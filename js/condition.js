function loadConditions() {
    var infoDiv = document.getElementById('conditionsDiv');
    var formInscription = document.getElementById('form-inscription');
    if (infoDiv.style.display === 'none' || infoDiv.style.display === '') {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                infoDiv.innerHTML = this.responseText;
                infoDiv.style.display = 'block';
                document.addEventListener('click', closeInfoOutside);
            }
        };
        xhr.open("GET", "conditions_utilisateur.txt", true);
        xhr.send();
    } else {
        infoDiv.style.display = 'none';
        formInscription.style.display = 'block'
        document.removeEventListener('click', closeInfoOutside);
    }
}

function closeInfoOutside(event) {
    var infoDiv = document.getElementById('conditionsDiv');
    if (!infoDiv.contains(event.target)) {
        infoDiv.style.display = 'none';
        document.removeEventListener('click', closeInfoOutside);
    }
}

function validateForm() {
    var checkbox = document.getElementById('acceptConditions');

    if (!checkbox.checked) {
        alert("Veuillez accepter les termes et conditions pour continuer.");
        return false;
    }
    return true;
}
