
// Tout les leins de redirection vers les differentes pages du site

// fonction pour modifier le contenue de la balise title
function setTitle(newTitle) {
    document.title = newTitle;
}

// fonction pour simplifier la redirection
// function redirectToPage(url) {
//     window.history.pushState({}, '', url);
// }

function setHead(newHead) {
    var h2Element = document.getElementById('title-page'); // Cibler l'élément h2 par son id
    h2Element.innerText = newHead; // Mettre à jour le contenu de l'élément h2
}

function rdirDiscussions() {
    // redirectToPage('page.html?discussions=true');
    setTitle('SecurChat | Discussions');
    setHead('Discussions');
}

function rdirDiscussionsGroup() {
    // redirectToPage('page.html?discussions-de-groupe=true');
    setTitle('SecurChat | Groupes');
    setHead('Discussions de Groupe');
}

function rdirParametre() {
    // redirectToPage('page.html?parametrage=true');
    setTitle('SecurChat | Parametre');
    setHead('Parametre');
}

function rdirNouvelleDiscussions() {
    // redirectToPage('page.html?nouvelle-discussions=true');
    setTitle('SecurChat | Nouvelle');
    setHead('Nouvelle Discussions');
}

function rdirInformation() {
    // redirectToPage('../index.html?information=true');
    setTitle('SecurChat | Information');
    setHead('Information');
}



// Récupérer les liens
const lienDiscussions = document.getElementById('lienDiscussions');
const lienDiscussionsGroupe = document.getElementById('lienDiscussionsGroupe');
const lienParametre = document.getElementById('lienParametre');
const lienNouvelleDiscussions = document.getElementById('lienNouvelleDiscussions');
const lienInformation = document.getElementById('lienInformation');

// Récupérer la div mainContent
const mainContent = document.getElementById('mainContent');

// Fonction pour charger le contenu de la div depuis la page spécifiée par le lien
function chargerContenu(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            mainContent.innerHTML = tempDiv.querySelector('#contentPage').innerHTML;
        });
}

// Ajouter des écouteurs d'événements aux liens
lienDiscussions.addEventListener('click', function () {
    chargerContenu('discussions.html');
});

lienDiscussionsGroupe.addEventListener('click', function () {
    chargerContenu('discussions-groupe.html');
});

lienParametre.addEventListener('click', function () {
    chargerContenu('parametrage.html');
});

lienNouvelleDiscussions.addEventListener('click', function () {
    chargerContenu('nouvelle-discussions.html');
});
lienInformation.addEventListener('click', function () {
    chargerContenu('information.html');
});

function loadAndToggleInfo() {
    var infoDiv = document.getElementById('infoDiv');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                infoDiv.innerHTML = this.responseText;
                infoDiv.style.display = 'block';
                document.addEventListener('click', closeInfoOutside);
            }
        };
        xhr.open("GET", "../infos.txt", true);
        xhr.send();
    } else {
        infoDiv.style.display = 'none';
        document.removeEventListener('click', closeInfoOutside);
    }
}

function closeInfoOutside(event) {
    var infoDiv = document.getElementById('infoDiv');
    if (!infoDiv.contains(event.target)) {
        infoDiv.style.display = 'none';
        document.removeEventListener('click', closeInfoOutside);
    }
}