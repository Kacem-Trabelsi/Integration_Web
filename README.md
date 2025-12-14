# COLLOCOV - Plateforme de Colocation Étudiante et Covoiturage

Plateforme web moderne pour la colocation étudiante et le covoiturage, développée avec HTML5, CSS3, SASS et JavaScript.

## 📋 Table des matières

- [Prérequis](#prérequis)
- [Installation depuis Git](#installation-depuis-git)
- [Configuration dans VS Code](#configuration-dans-vs-code)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
- [Scripts disponibles](#scripts-disponibles)
- [Fonctionnalités](#fonctionnalités)
- [Technologies utilisées](#technologies-utilisées)

## 🔧 Prérequis

Avant de commencer, assurez-vous d'avoir installé les outils suivants :

1. **Git** - [Télécharger Git](https://git-scm.com/downloads)
2. **Node.js** (version 14 ou supérieure) - [Télécharger Node.js](https://nodejs.org/)
3. **npm** (inclus avec Node.js)
4. **VS Code** - [Télécharger VS Code](https://code.visualstudio.com/)

### Vérifier l'installation

Ouvrez un terminal (PowerShell, CMD, ou Terminal) et exécutez :

```bash
git --version
node --version
npm --version
```

Vous devriez voir les versions installées. Si ce n'est pas le cas, installez les outils manquants.

## 📥 Installation depuis Git

### Étape 1 : Cloner le dépôt

Ouvrez un terminal et naviguez vers le dossier où vous souhaitez cloner le projet :

```bash
cd C:\Users\VotreNom\Desktop
```

Clonez le dépôt Git :

```bash
git clone https://github.com/Kacem-Trabelsi/Integration_Web.git
```

Ou si vous utilisez SSH :

```bash
git clone git@github.com:Kacem-Trabelsi/Integration_Web.git
```

### Étape 2 : Naviguer dans le dossier du projet

```bash
cd Integration_Web
```

### Étape 3 : Installer les dépendances

Installez toutes les dépendances nécessaires avec npm :

```bash
npm install
```

Cette commande va installer :
- **SASS** (^1.69.5) - Préprocesseur CSS
- **TailwindCSS** (^3.4.1) - Framework CSS utility-first

### Étape 4 : Compiler les styles

Compilez les fichiers SASS et TailwindCSS :

```bash
npm run build
```

Cette commande compile :
- `styles/main.scss` → `dist/css/main.css`
- `styles/input.css` → `dist/css/tailwind.css`

## 💻 Configuration dans VS Code

### Étape 1 : Ouvrir le projet dans VS Code

1. Ouvrez **VS Code**
2. Cliquez sur **File** → **Open Folder** (ou `Ctrl+K` puis `Ctrl+O`)
3. Sélectionnez le dossier `Integration_Web` que vous venez de cloner
4. Cliquez sur **Select Folder**

### Étape 2 : Installer les extensions recommandées (optionnel mais recommandé)

Ouvrez la palette de commandes (`Ctrl+Shift+P`) et installez ces extensions :

1. **Live Server** - Pour prévisualiser le projet avec rechargement automatique
   - Recherchez "Live Server" dans les extensions
   - Installez l'extension de Ritwick Dey

2. **SASS** - Support pour les fichiers SASS
   - Recherchez "SASS" dans les extensions
   - Installez l'extension de Syler

3. **Prettier** - Formatage automatique du code (optionnel)
   - Recherchez "Prettier" dans les extensions
   - Installez l'extension de Prettier

### Étape 3 : Configuration du workspace (optionnel)

Créez un fichier `.vscode/settings.json` pour configurer VS Code :

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.associations": {
    "*.scss": "scss"
  },
  "liveServer.settings.port": 5500
}
```

## 🚀 Lancement du projet

### Méthode 1 : Avec Live Server (Recommandé)

1. **Ouvrir le fichier HTML principal**
   - Dans VS Code, ouvrez `index.html`
   - Cliquez droit sur le fichier
   - Sélectionnez **"Open with Live Server"**

2. **Le navigateur s'ouvrira automatiquement**
   - L'URL sera généralement : `http://127.0.0.1:5500/index.html`
   - Les modifications seront rechargées automatiquement

### Méthode 2 : Mode développement avec watch

Pour compiler automatiquement les styles lors des modifications :

1. **Ouvrir un terminal dans VS Code**
   - `Ctrl+`` (backtick) ou **Terminal** → **New Terminal**

2. **Lancer le mode watch**
   ```bash
   npm run dev
   ```
   Cette commande lance :
   - `sass --watch` pour surveiller les changements SASS
   - `tailwindcss --watch` pour surveiller les changements TailwindCSS

3. **Ouvrir le fichier HTML**
   - Ouvrez `index.html` dans votre navigateur
   - Ou utilisez Live Server en parallèle

### Méthode 3 : Ouvrir directement dans le navigateur

1. **Compiler les styles une fois**
   ```bash
   npm run build
   ```

2. **Ouvrir le fichier HTML**
   - Naviguez vers le dossier du projet dans l'explorateur de fichiers
   - Double-cliquez sur `index.html`
   - Le fichier s'ouvrira dans votre navigateur par défaut

⚠️ **Note** : Avec cette méthode, vous devrez recompiler manuellement après chaque modification.

## 📁 Structure du projet

```
Integration_Web/
├── index.html                  # Page d'accueil
├── connexion.html              # Page de connexion
├── inscription.html            # Page d'inscription
├── dashboard.html              # Tableau de bord
├── covoiturages.html           # Liste des covoiturages
├── colocations.html            # Liste des colocations ✨ NOUVEAU
├── details-colocation.html     # Détails d'une colocation ✨ NOUVEAU
├── details-covoiturage.html    # Détails d'un covoiturage
├── proposer-trajet.html        # Proposer un trajet
├── paiement.html               # Page de paiement
├── profile.html                # Profil utilisateur
├── inbox.html                  # Messages
├── notifications.html          # Notifications
├── reviews.html                # Avis
├── ecrire-review.html          # Écrire un avis
├── contact.html                # Contact
├── a-propos.html               # À propos
├── urgence.html                # Urgence
│
├── styles/
│   ├── main.scss               # Fichier SASS principal
│   └── input.css               # Fichier d'entrée TailwindCSS
│
├── dist/
│   └── css/
│       ├── main.css            # CSS compilé depuis SASS
│       ├── main.css.map        # Source map pour le débogage
│       └── tailwind.css        # CSS compilé depuis TailwindCSS
│
├── js/
│   ├── auth.js                 # Gestion de l'authentification
│   └── main.js                 # JavaScript principal
│
├── image/                      # Images du projet
│
├── node_modules/               # Dépendances npm (généré automatiquement)
│
├── package.json                # Configuration npm et scripts
├── package-lock.json           # Verrouillage des versions
├── tailwind.config.js          # Configuration TailwindCSS
└── README.md                   # Ce fichier
```

## 📜 Scripts disponibles

Tous les scripts sont définis dans `package.json` et peuvent être exécutés avec `npm run <script>` :

### Compilation

```bash
# Compiler uniquement SASS
npm run build-css

# Compiler uniquement TailwindCSS
npm run build-tailwind

# Compiler tout (SASS + TailwindCSS)
npm run build
```

### Mode développement (watch)

```bash
# Surveiller les changements SASS uniquement
npm run watch-css

# Surveiller les changements TailwindCSS uniquement
npm run watch-tailwind

# Surveiller les changements SASS et TailwindCSS (recommandé)
npm run dev
```

## ✨ Fonctionnalités

### Pages principales
- ✅ **Page d'accueil** - Présentation de la plateforme
- ✅ **Authentification** - Connexion et inscription
- ✅ **Tableau de bord** - Vue d'ensemble de l'utilisateur
- ✅ **Liste des covoiturages** - Recherche et filtrage de trajets
- ✅ **Liste des colocations** - Recherche et filtrage de logements ✨
- ✅ **Détails colocation** - Galerie d'images, description, réservation ✨
- ✅ **Détails covoiturage** - Informations détaillées du trajet
- ✅ **Paiement** - Gestion des paiements pour colocations et covoiturages ✨
- ✅ **Profil utilisateur** - Gestion du profil
- ✅ **Messages** - Système de messagerie
- ✅ **Notifications** - Centre de notifications
- ✅ **Avis** - Système de reviews

### Fonctionnalités techniques
- ✅ Design responsive (desktop, tablette, mobile)
- ✅ Navigation avec sidebar
- ✅ Authentification avec localStorage
- ✅ Cartes interactives avec Leaflet
- ✅ Galerie d'images avec navigation
- ✅ Filtres de recherche avancés
- ✅ Système de réservation
- ✅ Gestion des paiements

## 🛠 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles et animations
- **SASS** - Préprocesseur CSS avec variables et mixins
- **TailwindCSS** - Framework CSS utility-first
- **JavaScript (Vanilla)** - Interactivité et logique métier
- **Leaflet** - Cartes interactives
- **LocalStorage** - Stockage local des données

## 🔍 Dépannage

### Problème : Les styles ne s'appliquent pas

**Solution :**
1. Vérifiez que les fichiers CSS sont compilés dans `dist/css/`
2. Exécutez `npm run build` pour compiler les styles
3. Videz le cache du navigateur (Ctrl+F5)

### Problème : Erreur "npm: command not found"

**Solution :**
1. Vérifiez que Node.js est installé : `node --version`
2. Réinstallez Node.js depuis [nodejs.org](https://nodejs.org/)
3. Redémarrez votre terminal

### Problème : Erreur lors de `npm install`

**Solution :**
1. Supprimez le dossier `node_modules` et `package-lock.json`
2. Exécutez `npm install` à nouveau
3. Si le problème persiste, essayez `npm cache clean --force`

### Problème : Live Server ne fonctionne pas

**Solution :**
1. Vérifiez que l'extension Live Server est installée
2. Redémarrez VS Code
3. Assurez-vous qu'aucun autre serveur n'utilise le port 5500

## 📝 Notes importantes

- ⚠️ **Toujours compiler les styles** avant de tester les modifications
- ⚠️ **Ne pas modifier** les fichiers dans `dist/css/` directement (ils sont générés)
- ✅ **Modifier uniquement** les fichiers dans `styles/` (SASS) ou `styles/input.css` (TailwindCSS)
- ✅ Utilisez `npm run dev` en mode développement pour un rechargement automatique

## 🤝 Contribution

Pour contribuer au projet :

1. Créez une branche : `git checkout -b ma-nouvelle-fonctionnalite`
2. Committez vos changements : `git commit -m 'Ajout d'une nouvelle fonctionnalité'`
3. Poussez vers la branche : `git push origin ma-nouvelle-fonctionnalite`
4. Ouvrez une Pull Request

## 📞 Support

Pour toute question ou problème :
- Email : contact@collocov.com
- Téléphone : +33 1 23 45 67 89

## 📄 Licence

MIT License - Voir le fichier LICENSE pour plus de détails

---

**Développé avec ❤️ pour les étudiants**
