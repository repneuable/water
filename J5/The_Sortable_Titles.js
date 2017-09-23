/**
 * ==================================================================================================
 * This document contains material which is the proprietary property of and
 * confidential to [company name].
 *
 * Disclosure outside [company name] is prohibited except by license agreement or other
 * confidentiality agreement.
 * ==================================================================================================
 * File Name: File name goes here
 * Purpose  : Purpose of the file goes here
 * Version  : 0.1.0
 * --------------------------------------------------------------------------------------------------
 * Revision History
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 00/00/0000 - Your description here                                                             MJH
 * ==================================================================================================
 */


 function sortTable(n) {
   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
   table = document.getElementById("myTable");
   switching = true;
   //Set the sorting direction to ascending:
   dir = "asc";
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
     //start by saying: no switching is done:
     switching = false;
     rows = table.getElementsByTagName("tr");
     /*Loop through all table rows (except the
     first, which contains table headers):*/
     for (i = 1; i < (rows.length - 1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[n];
       y = rows[i + 1].getElementsByTagName("TD")[n];
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       } else if (dir == "desc") {
         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       }
     }
     if (shouldSwitch) {
       /*If a switch has been marked, make the switch
       and mark that a switch has been done:*/
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
       //Each time a switch is done, increase this count by 1:
       switchcount ++;
     } else {
       /*If no switching has been done AND the direction is "asc",
       set the direction to "desc" and run the while loop again.*/
       if (switchcount === 0 && dir == "asc") {
         dir = "desc";
         switching = true;
       }
     }
   }
 }


 function sortTable2(n) {
   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
   table = document.getElementById("myTable2");
   switching = true;
   //Set the sorting direction to ascending:
   dir = "asc";
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
     //start by saying: no switching is done:
     switching = false;
     rows = table.getElementsByTagName("tr");
     /*Loop through all table rows (except the
     first, which contains table headers):*/
     for (i = 1; i < (rows.length - 1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[n];
       y = rows[i + 1].getElementsByTagName("TD")[n];
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       } else if (dir == "desc") {
         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       }
     }
     if (shouldSwitch) {
       /*If a switch has been marked, make the switch
       and mark that a switch has been done:*/
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
       //Each time a switch is done, increase this count by 1:
       switchcount ++;
     } else {
       /*If no switching has been done AND the direction is "asc",
       set the direction to "desc" and run the while loop again.*/
       if (switchcount === 0 && dir == "asc") {
         dir = "desc";
         switching = true;
       }
     }
   }
 }

 function sortTable3(n) {
   var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
   table = document.getElementById("myTable3");
   switching = true;
   //Set the sorting direction to ascending:
   dir = "asc";
   /*Make a loop that will continue until
   no switching has been done:*/
   while (switching) {
     //start by saying: no switching is done:
     switching = false;
     rows = table.getElementsByTagName("tr");
     /*Loop through all table rows (except the
     first, which contains table headers):*/
     for (i = 1; i < (rows.length - 1); i++) {
       //start by saying there should be no switching:
       shouldSwitch = false;
       /*Get the two elements you want to compare,
       one from current row and one from the next:*/
       x = rows[i].getElementsByTagName("TD")[n];
       y = rows[i + 1].getElementsByTagName("TD")[n];
       /*check if the two rows should switch place,
       based on the direction, asc or desc:*/
       if (dir == "asc") {
         if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       } else if (dir == "desc") {
         if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
           //if so, mark as a switch and break the loop:
           shouldSwitch= true;
           break;
         }
       }
     }
     if (shouldSwitch) {
       /*If a switch has been marked, make the switch
       and mark that a switch has been done:*/
       rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
       switching = true;
       //Each time a switch is done, increase this count by 1:
       switchcount ++;
     } else {
       /*If no switching has been done AND the direction is "asc",
       set the direction to "desc" and run the while loop again.*/
       if (switchcount === 0 && dir == "asc") {
         dir = "desc";
         switching = true;
       }
     }
   }
 }

 function myFunction() {
   var input, filter, table, tr, td, i;
   input = document.getElementById("searchTopics");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
 }

 function myFunction2() {
   var input, filter, table, tr, td, i;
   input = document.getElementById("searchGeneral");
   filter = input.value.toUpperCase();
   table = document.getElementById("myTable2");
   tr = table.getElementsByTagName("tr");
   for (i = 0; i < tr.length; i++) {
     td = tr[i].getElementsByTagName("td")[0];
     if (td) {
       if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
         tr[i].style.display = "";
       } else {
         tr[i].style.display = "none";
       }
     }
   }
}
