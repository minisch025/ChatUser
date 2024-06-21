
// JAVASCRIPT DE LA PAGE PRINCIPALE

document.addEventListener('DOMContentLoaded', function () {
    let params = new URLSearchParams(window.location.search);
    if (params.get('connexion') === 'true') { //|| window.location.href == window.location
        // Afficher le code pendant 2 secondes
        document.getElementById('page').classList.add('hidden');
        document.getElementById('code').classList.remove('hidden');
        setTimeout(function () {
            document.getElementById('code').classList.add('hidden');
            // Afficher le reste du contenu après 2 secondes
            window.location.href = 'page.html#page';
            document.getElementById('page').classList.remove('hidden');
        }, 3000);
    }
    redimensionnerNav();
});

function redimensionnerNav() {
    var element = document.getElementById("element");
    var leftside = document.getElementById("left-side");
    var titre = document.getElementsByClassName('link-title');
    var toprightside = document.getElementById('toprightside');
    var isSmall = element.style.width === "110px";

    element.style.width = isSmall ? "250px" : "110px";
    leftside.style.width = isSmall ? "250px" : "110px";
    document.getElementById('site-name').textContent = isSmall ? 'SecurChat' : '';
    toprightside.style.display = isSmall ? "none" : "flex";
    toprightside.style.textAlign = isSmall ? "left" : "center";

    for (var i = 0; i < titre.length; i++) {
        titre[i].style.display = isSmall ? 'block' : 'none';
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments de lien
    const links = document.querySelectorAll('.nav-link');

    // Parcourez tous les éléments de lien
    links.forEach(link => {
        // Ajoutez un écouteur d'événements au clic
        link.addEventListener('click', function () {
            // Retirez la classe active de tous les liens
            links.forEach(link => {
                link.classList.remove('active');
            });

            // Ajoutez la classe active à l'élément de lien cliqué
            this.classList.add('active');
        });
    });
});
