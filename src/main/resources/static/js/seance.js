function chargerSeance() {
    var httprequest;
    if (window.XMLHttpRequest) {
        httprequest = new XMLHttpRequest();
    } else {
        httprequest = new ActiveXObject("Msxm12.XMLHTTP");
    }

    httprequest.onreadystatechange = function() {
        if (httprequest.readyState == 4) {
            if (httprequest.status == 200) {
                var contenuJSON = JSON.parse(httprequest.responseText);
                var maDiv = document.getElementById("affichage");
                maDiv.innerHTML = "";

                for (i = 0; i < contenuJSON.length; i++) {
                    var titreSeance = document.createElement("h4");
                    titreSeance.innerHTML = "Seance numero " + i;
                    var divSeance = document.createElement("div");
                    var list = document.createElement("ul");
                    var nomDuFilm = document.createElement("li");
                    nomDuFilm.innerHTML = contenuJSON[i].film.film;
                    var nomDeLaSalle = document.createElement("li");
                    nomDeLaSalle.innerHTML = contenuJSON[i].salle.salle;
                    var duree = document.createElement("li");
                    duree.innerHTML = contenuJSON[i].film.dureeMinute;
                    var jour = document.createElement("li");
                    jour.innerHTML = contenuJSON[i].jour;
                    var heure = document.createElement("li");
                    heure.innerHTML = contenuJSON[i].heure;

                    list.classList.add("list-group");
                    nomDuFilm.classList.add("list-group-item");
                    nomDeLaSalle.classList.add("list-group-item");
                    duree.classList.add("list-group-item");
                    jour.classList.add("list-group-item");
                    heure.classList.add("list-group-item");

                    divSeance.appendChild(titreSeance);
                    divSeance.appendChild(list);
                    list.appendChild(nomDuFilm);
                    list.appendChild(nomDeLaSalle);
                    list.appendChild(duree);
                    list.appendChild(jour);
                    list.appendChild(heure);
                    maDiv.appendChild(divSeance);
                }
            } else {
                alert("Une erreur s'est produite : " + httprequest.responseText);
            }
        }
    };

    httprequest.open("GET", "http://localhost:8080/Cinema1.2/rest/seance", true);
    httprequest.send();
}