// Gestion de l'authentification côté client avec localStorage

// Initialiser un utilisateur par défaut pour les tests
function initializeDefaultUser() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Vérifier si l'utilisateur par défaut existe déjà
    const defaultUserExists = users.find(user => user.email === 'test@collocov.com');
    
    if (!defaultUserExists) {
        const defaultUser = {
            id: '1',
            nom: 'Utilisateur Test',
            email: 'test@collocov.com',
            telephone: '+33 6 12 34 56 78',
            password: 'test1234',
            createdAt: new Date().toISOString()
        };
        
        users.push(defaultUser);
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// Initialiser l'utilisateur par défaut au chargement
if (typeof window !== 'undefined') {
    initializeDefaultUser();
}

// Fonction pour créer un utilisateur
function createUser(nom, email, telephone, password) {
    // Vérifier si l'utilisateur existe déjà
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = existingUsers.find(user => user.email === email);
    
    if (userExists) {
        return { success: false, message: 'Cet email est déjà utilisé' };
    }
    
    // Créer le nouvel utilisateur
    const newUser = {
        id: Date.now().toString(),
        nom: nom,
        email: email,
        telephone: telephone,
        password: password, // En production, il faudrait hasher le mot de passe
        createdAt: new Date().toISOString()
    };
    
    // Ajouter l'utilisateur à la liste
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));
    
    return { success: true, message: 'Compte créé avec succès' };
}

// Fonction pour connecter un utilisateur
function loginUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
        return { success: false, message: 'Email ou mot de passe incorrect' };
    }
    
    // Stocker la session
    const sessionData = {
        userId: user.id,
        email: user.email,
        nom: user.nom,
        loggedIn: true,
        loginTime: new Date().toISOString()
    };
    
    localStorage.setItem('currentUser', JSON.stringify(sessionData));
    
    return { success: true, message: 'Connexion réussie', user: user };
}

// Fonction pour déconnecter un utilisateur
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Fonction pour vérifier si un utilisateur est connecté
function isLoggedIn() {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
}

// Fonction pour obtenir les informations de l'utilisateur connecté
function getCurrentUser() {
    const session = isLoggedIn();
    if (!session) return null;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.id === session.userId);
}

