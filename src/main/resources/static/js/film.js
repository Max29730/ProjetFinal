function chargerFilm() {
    var httprequest;
    if (window.XMLHttpRequest) {
        // Tous les navigateurs sauf l'ami Internet Explorer
        httprequest = new XMLHttpRequest();
    } else {
        // Que pour internet explorer
        httprequest = new ActiveXObject("Msxm12.XMLHTTP");
    }

    httprequest.onreadystatechange = function() {
        if (httprequest.readyState == 4) {
            if (httprequest.status == 200) {
                var contenuJSON = JSON.parse(httprequest.responseText);
                var maDiv = document.getElementById("affichage");
                maDiv.innerHTML = "";

                for (i = 0; i < contenuJSON.length; i++) {

                    // Création des éléments HTML
                    var titreFilm = document.createElement("h4");
                    titreFilm.innerHTML = "Film numero " + i;
                    var divFilm = document.createElement("div");
                    var list = document.createElement("ul");
                    var nomDuFilm = document.createElement("li");
                    nomDuFilm.innerHTML = contenuJSON[i].film;
                    var duree = document.createElement("li");
                    duree.innerHTML = contenuJSON[i].dureeMinute;

                    // CSS
                    //titreSeance.classList.add("");
                    list.classList.add("list-group");
                    nomDuFilm.classList.add("list-group-item");
                    duree.classList.add("list-group-item");

                    // Affectation
                    divFilm.appendChild(titreFilm);
                    divFilm.appendChild(list);
                    list.appendChild(nomDuFilm);
                    list.appendChild(duree);
                    maDiv.appendChild(divFilm);
                }

            } else {
                alert("Une erreur s'est produite : " + httprequest.responseText);
            }
        }
    };

    httprequest.open("GET", "http://localhost:8080/Cinema1.2/rest/film", true);
    httprequest.send();
}