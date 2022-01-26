// console.log(document.getElementById("rechercheFilm").value)

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
    // console.log("heure")

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheHeure");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");
    // console.log(filter)

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
    // console.log("heure")

    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("rechercheJour");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableau");
    tr = table.getElementsByTagName("tr");
    // console.log(filter)

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

//Sort functions
function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tableau");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false;
            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            /* Check if the two rows should switch place,
            based on the direction, asc or desc: */
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    // If so, mark as a switch and break the loop:
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            // Each time a switch is done, increase this count by 1:
            switchcount++;
        } else {
            /* If no switching has been done AND the direction is "asc",
            set the direction to "desc" and run the while loop again. */
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}