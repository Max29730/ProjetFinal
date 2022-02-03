function chargerSalle() {
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
                    var titreSalle = document.createElement("h4");
                    titreSalle.innerHTML = "Salle numero " + i;
                    var divSalle = document.createElement("div");
                    var list = document.createElement("ul");
                    var capaciteDeLaSalle = document.createElement("li");
                    capaciteDeLaSalle.innerHTML = contenuJSON[i].capacite;
                    var numeroDeLaSalle = document.createElement("li");
                    numeroDeLaSalle.innerHTML = contenuJSON[i].numero;
                    var nomDeLaSalle = document.createElement("li");
                    nomDeLaSalle.innerHTML = contenuJSON[i].salle;

                    var tDimension = document.createElement("li");
                    if (contenuJSON[i].tDimension) {
                        tDimension.innerHTML = "Le film est en 3D"
                    } else {
                        tDimension.innerHTML = "Le film n'est pas en 3D"
                    }

                    list.classList.add("list-group");
                    capaciteDeLaSalle.classList.add("list-group-item");
                    numeroDeLaSalle.classList.add("list-group-item");
                    nomDeLaSalle.classList.add("list-group-item");
                    tDimension.classList.add("list-group-item");

                    divSalle.appendChild(titreSalle);
                    divSalle.appendChild(list);
                    list.appendChild(capaciteDeLaSalle);
                    list.appendChild(numeroDeLaSalle);
                    list.appendChild(nomDeLaSalle);
                    list.appendChild(tDimension);
                    maDiv.appendChild(divSalle);
                }
            } else {
                alert("Une erreur s'est produite : " + httprequest.responseText);
            }
        }
    };

    httprequest.open("GET", "http://localhost:8080/Cinema1.2/rest/salle", true);
    httprequest.send();
}
s