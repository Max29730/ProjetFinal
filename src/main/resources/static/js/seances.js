function rechercheFilm() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheFilm");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("film")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove("masqueFilm");
            } else {
                if (!tr[i].className.includes("masqueFilm")) {
                    tr[i].className += " ";
                    tr[i].className += "masqueFilm";
                }
            }
        }
    }
}

function rechercheSalle() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheSalle");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("salle")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove("masqueSalle");
            } else {
                if (!tr[i].className.includes("masqueSalle")) {
                    tr[i].className += " ";
                    tr[i].className += "masqueSalle";
                }
            }
        }
    }
}

function rechercheHeure() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheHeure");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("heure")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove("masqueHeure");
            } else {
                if (!tr[i].className.includes("masqueHeure")) {
                    tr[i].className += " ";
                    tr[i].className += "masqueHeure";
                }
            }
        }
    }
}

function rechercheJour() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheJour");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByClassName("jour")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].classList.remove("masqueJour");
            } else {
                if (!tr[i].className.includes("masqueJour")) {
                    tr[i].className += " ";
                    tr[i].className += "masqueJour";
                }
            }
        }
    }
}

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tableau");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}