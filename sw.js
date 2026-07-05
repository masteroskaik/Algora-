// Service Worker pour Complexité Algorithmique PWA
const CACHE_NAME = 'complexite-algo-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png'
];

// Installation du service worker
self.addEventListener('install', (event) => {
  console.log('[SW] Installation en cours...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[SW] Cache ouvert');
        return cache.addAll(urlsToCache);
      })
      .catch((error) => {
        console.error('[SW] Erreur lors de la mise en cache:', error);
      })
  );
  self.skipWaiting();
});

// Activation du service worker
self.addEventListener('activate', (event) => {
  console.log('[SW] Activation en cours...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('[SW] Suppression de l\'ancien cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Interception des requêtes (stratégie Cache First)
self.addEventListener('fetch', (event) => {
  // Ne mettre en cache que les requêtes GET
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Retourner la réponse en cache si elle existe
        if (response) {
          console.log('[SW] Réponse en cache pour:', event.request.url);
          return response;
        }

        // Sinon, faire la requête réseau
        return fetch(event.request)
          .then((response) => {
            // Vérifier si la réponse est valide
            if (!response || response.status !== 200 || response.type === 'error') {
              return response;
            }

            // Cloner la réponse
            const responseToCache = response.clone();

            // Mettre en cache la réponse
            caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch(() => {
            // En cas d'erreur réseau, retourner une page offline
            console.log('[SW] Erreur réseau pour:', event.request.url);
            // Vous pouvez retourner une page offline personnalisée ici
            return new Response('Offline - Contenu non disponible', {
              status: 503,
              statusText: 'Service Unavailable',
              headers: new Headers({
                'Content-Type': 'text/plain'
              })
            });
          });
      })
  );
});

// Gestion des messages depuis le client
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
