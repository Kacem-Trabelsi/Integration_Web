# COLLOCOV - Page d'Accueil

Page d'accueil moderne pour COLLOCOV, une plateforme de colocation étudiante et de covoiturage.

## Technologies Utilisées

- **HTML5** : Structure sémantique de la page
- **CSS3** : Styles de base et animations
- **Flexbox** : Mise en page flexible et responsive
- **Media Queries** : Design responsive pour tous les écrans
- **SASS** : Préprocesseur CSS avec variables et mixins
- **TailwindCSS** : Framework CSS utility-first (configuré)

## Structure du Projet

```
integration_web/
├── index.html              # Page principale HTML5
├── styles/
│   ├── main.scss          # Fichier SASS principal
│   └── input.css          # Fichier d'entrée TailwindCSS
├── js/
│   └── main.js            # JavaScript pour le menu mobile
├── dist/
│   └── css/
│       ├── main.css       # CSS compilé depuis SASS
│       └── tailwind.css   # CSS compilé depuis TailwindCSS
├── package.json           # Dépendances npm
├── tailwind.config.js     # Configuration TailwindCSS
└── README.md              # Ce fichier
```

## Installation

1. Installer les dépendances :
```bash
npm install
```

## Utilisation

### Compiler les styles SASS
```bash
npm run build-css
```

### Compiler TailwindCSS
```bash
npm run build-tailwind
```

### Compiler tout (SASS + TailwindCSS)
```bash
npm run build
```

### Mode développement (watch)
```bash
npm run dev
```

## Fonctionnalités

- ✅ Navigation responsive avec menu hamburger sur mobile
- ✅ Design moderne avec Flexbox
- ✅ Media Queries pour tablette et mobile
- ✅ Variables SASS pour une maintenance facile
- ✅ Mockup d'application mobile animé
- ✅ Boutons interactifs avec effets hover
- ✅ Design responsive (desktop, tablette, mobile)

## Breakpoints Media Queries

- **Desktop** : > 1024px
- **Tablette** : 768px - 1024px
- **Mobile** : < 768px
- **Petit Mobile** : < 480px

## Personnalisation

Les couleurs et variables peuvent être modifiées dans `styles/main.scss` :

```scss
$primary-blue: #2563eb;
$dark-blue: #1e40af;
$light-blue: #dbeafe;
$yellow: #fbbf24;
$green: #10b981;
```

## Notes

- Le fichier CSS compilé se trouve dans `dist/css/main.css`
- Assurez-vous de compiler les fichiers SASS avant d'utiliser la page
- TailwindCSS est configuré mais peut être utilisé en complément du SASS

