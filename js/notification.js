document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez tous les éléments avec la classe close-icon
    const closeIcons = document.querySelectorAll('.close-icon');

    // Parcourez chaque élément close-icon et ajoutez un gestionnaire d'événements "click" 
    closeIcons.forEach(icon => {
        icon.addEventListener('click', function () {
            // Trouvez le parent de l'icône et masquez-le en appliquant display: none
            const notificationBar = this.parentElement;
            notificationBar.style.display = 'none';
        });
    });
});