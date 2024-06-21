
// Tout les leins de redirection vers les differentes pages du site

// fonction pour modifier le contenue de la balise title
function setTitle(newTitle) {
    document.title = newTitle;
}

// fonction pour simplifier la redirection
function redirectToPage(url) {
    window.history.pushState({}, '', url);
}

function setHead(newHead) {
    var h2Element = document.getElementById('title-page'); // Cibler l'élément h2 par son id
    h2Element.innerText = newHead; // Mettre à jour le contenu de l'élément h2
}

function rdirDiscussions() {
    redirectToPage('page.html?discussions=true');
    setTitle('SecurChat | Discussions');
    setHead('Discussions');
}

function rdirDiscussionsGroup() {
    redirectToPage('page.html?discussions-de-groupe=true');
    setTitle('SecurChat | Groupes');
    setHead('Discussions de Groupe');
}

function rdirParametre() {
    redirectToPage('page.html?parametrage=true');
    setTitle('SecurChat | Parametre');
    setHead('Parametre');
}

function rdirNouvelleDiscussions() {
    redirectToPage('page.html?nouvelle-discussions=true');
    setTitle('SecurChat | Nouvelle');
    setHead('Nouvelle Discussions');
}

function rdirInformation() {
    redirectToPage('../index.html?information=true');
    setTitle('SecurChat | Information');
    setHead('Information');
}