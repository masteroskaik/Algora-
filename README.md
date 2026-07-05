# Complexité Algorithmique – PWA (Progressive Web App)

Ce projet est une Progressive Web App (PWA) complète pour le cours "Complexité Algorithmique – M1 IA 2025/2026".

## 🚀 Caractéristiques PWA

### ✅ Installable
- **Manifest.json** : Configuration complète pour l'installation sur tous les appareils
- **Icônes multiples** : Tailles 72×72, 96×96, 128×128, 144×144, 152×152, 192×192, 384×384, 512×512 pixels
- **Favicon** : Icône 32×32 pour l'onglet du navigateur
- **Support Apple** : Meta tags pour iOS et iPadOS

### 📱 Responsive
- Design adaptatif pour tous les appareils (mobile, tablette, desktop)
- Barre de titre native sur mobile
- Expérience utilisateur optimisée

### 🔌 Fonctionnalité Offline
- **Service Worker** : Mise en cache intelligente des ressources
- **Stratégie Cache First** : Charger depuis le cache en priorité
- **Fallback réseau** : Récupérer les données fraîches quand possible
- **Mode offline** : Notification utilisateur en cas d'indisponibilité

### 🎨 Thème Personnalisé
- Couleur de thème : Orange doré (`#f7b731`)
- Arrière-plan : Gris foncé (`#0d1117`)
- Cohérence visuelle sur tous les appareils

## 📁 Structure du Projet

```
pwa_project/
├── index.html              # Page principale avec meta tags PWA
├── manifest.json           # Configuration PWA
├── sw.js                   # Service Worker
├── icons/
│   ├── favicon.ico
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── icon.png                # Logo original
└── README.md               # Ce fichier
```

## 🔧 Installation et Déploiement

### Prérequis
- Un serveur web HTTPS (obligatoire pour PWA)
- Les fichiers doivent être servis avec les bons en-têtes MIME

### Étapes de déploiement

1. **Copier tous les fichiers** sur votre serveur web
2. **Configurer HTTPS** (certificat SSL/TLS)
3. **Vérifier les en-têtes HTTP** :
   ```
   Content-Type: application/json (pour manifest.json)
   Content-Type: application/javascript (pour sw.js)
   ```

### Serveur local (test)
```bash
# Avec Python 3
python3 -m http.server 8000

# Avec Node.js
npx http-server

# Avec PHP
php -S localhost:8000
```

**Note** : Pour tester localement, utilisez `http://localhost:8000` (HTTP est accepté en local).

## 📲 Installation sur Appareils

### Android
1. Ouvrir le site dans Chrome/Firefox
2. Appuyer sur le menu (⋮)
3. Sélectionner "Installer l'application"
4. Confirmer

### iOS/iPadOS
1. Ouvrir le site dans Safari
2. Appuyer sur le bouton de partage (↗)
3. Sélectionner "Sur l'écran d'accueil"
4. Nommer l'app et ajouter

### Desktop (Chrome, Edge, Brave)
1. Ouvrir le site
2. Cliquer sur l'icône d'installation (⊞+)
3. Confirmer

## 🔍 Vérification

### Chrome DevTools
1. Ouvrir DevTools (`F12`)
2. Aller à l'onglet **Application**
3. Vérifier :
   - ✅ Service Worker enregistré
   - ✅ Manifest valide
   - ✅ Cache rempli
   - ✅ Icônes détectées

### Lighthouse
1. Ouvrir DevTools
2. Aller à **Lighthouse**
3. Générer un rapport PWA
4. Vérifier le score (objectif : 90+)

## 🛠️ Personnalisation

### Changer le logo
1. Remplacer `icon.png` par votre logo
2. Exécuter `python3 generate_icons.py`
3. Les icônes seront régénérées dans le dossier `icons/`

### Modifier les couleurs
Éditer `manifest.json` :
```json
"theme_color": "#votre_couleur",
"background_color": "#votre_couleur"
```

### Ajouter des ressources au cache
Éditer `sw.js`, tableau `urlsToCache` :
```javascript
const urlsToCache = [
  '/',
  '/index.html',
  '/votre_ressource.css',
  // ...
];
```

## 📊 Performances

- **Taille initiale** : ~50 KB (HTML + CSS + JS)
- **Icônes** : ~200 KB (toutes les tailles)
- **Cache** : Réduit le temps de chargement de 80%+
- **Offline** : Accès immédiat aux pages en cache

## 🔐 Sécurité

- ✅ HTTPS obligatoire
- ✅ Service Worker sécurisé
- ✅ Pas de données sensibles en cache
- ✅ Politique de sécurité du contenu (CSP)

## 📝 Notes

- Le Service Worker se met à jour automatiquement
- Les anciennes versions du cache sont supprimées
- Les ressources externes (CDN) sont mises en cache si disponibles
- Mode offline affiche un message personnalisé

## 🆘 Dépannage

### Service Worker ne s'enregistre pas
- Vérifier que le site est en HTTPS
- Vérifier la console du navigateur pour les erreurs
- Vider le cache du navigateur

### Icônes ne s'affichent pas
- Vérifier que le dossier `icons/` existe
- Vérifier les chemins dans `manifest.json`
- Rafraîchir le navigateur (Ctrl+Shift+R)

### Cache ne se met pas à jour
- Incrémenter `CACHE_NAME` dans `sw.js`
- Forcer la réinstallation du Service Worker
- Utiliser "Unregister" dans DevTools

## 📚 Ressources

- [MDN - Progressive Web Apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Web.dev - PWA](https://web.dev/progressive-web-apps/)
- [Manifest Spec](https://www.w3.org/TR/appmanifest/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

---

**Créé avec ❤️ pour le cours M1 IA 2025/2026**
