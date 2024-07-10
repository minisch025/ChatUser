
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


// Script de gestion du boutton plus et de la bar de notification
function hideElement(Element) {
    Element.forEach(hide => {
        setTimeout(() => {
            hide.classList.remove('show');
        }, 5000); // 5 secondes
    });
}

document.querySelector('#plus-button').addEventListener('click', function () {
    const options = document.querySelectorAll('.plus-option');
    options.forEach(option => {
        option.classList.toggle('show');
        option.style.transition = 'transform 2s ease';
        hideElement(options);
    });
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        const options = document.querySelectorAll('.plus-option');
        options.forEach(option => {
            option.classList.remove('show');
        });
    });
});

document.querySelectorAll('.fa-chevron-down').forEach(link => {
    link.addEventListener('click', function () {
        const options = document.querySelectorAll('.topbar-element .fas');
        options.forEach(option => {
            option.classList.remove('hidden');
        });
    });
});

const hideSearch = document.querySelector(".fa-search");
hideSearch.addEventListener("click", function () {
const searchBar = document.querySelector(".search-bar");
    if(searchBar.classList.contains('hidden')){
        searchBar.classList.remove('hidden');
    }
    else{
        searchBar.classList.add('hidden');
        console.log("1 + 2 = ", 1+2);
    }
});

// Géré l'affichage du menu en mode petit écrant
const badge = document.querySelector(".badge");
const leftside = document.querySelector(".left-side");

badge.addEventListener("click", function () {
    if(leftside.classList.contains('hide')){
        leftside.classList.remove('hide');
    }
    else{
        leftside.classList.add('hide');
        console.log("1 + 1 = ", 1+1);
    }
});
//
let leftSide = document.querySelector(".left-side");
let startX;
let startY;
let distance = 0;

leftSide.addEventListener('touchstart', function (event) {
    startX = event.touches[0].clientX;
    startY = event.touches[0].clientY;
});

leftSide.addEventListener('touchmove', function (event) {
    let currentX = event.touches[0].clientX;
    let currentY = event.touches[0].clientY;

    let diffX = startX - currentX;
    let diffY = startY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 0) {
        // Swiping left
        distance += diffX;
        leftSide.style.transform = `translateX(-${distance}px)`;
    }
});

leftSide.addEventListener('touchend', function (event) {
    distance = 0;
    leftSide.style.transform = 'translateX(0)';
});


// Sélection de tous les éléments .notification-bar
const notificationBars = document.querySelectorAll('.notification-bar');

// Pour chaque élément .notification-bar, ajouter des écouteurs d'événements
notificationBars.forEach(notificationBar => {
    notificationBar.addEventListener('mouseover', function () {
        // Trouver l'élément .close-icon associé à cet élément .notification-bar
        const closeIcon = notificationBar.querySelector('.close-icon');
        if (closeIcon) {
            closeIcon.style.transition = 'transform 2s ease';
            closeIcon.style.display = 'block'
        }
    });

    notificationBar.addEventListener('mouseout', function () {
        // Trouver l'élément .close-icon associé à cet élément .notification-bar
        const closeIcon = notificationBar.querySelector('.close-icon');
        if (closeIcon) {
            closeIcon.style.display = 'none';
        }
    });
});
