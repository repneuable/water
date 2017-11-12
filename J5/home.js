/**
 * ==================================================================================================
 * This document contains material which is the proprietary property of and
 * confidential to kevinh.work.
 *
 * Disclosure outside kevinh.work is prohibited except by license agreement or other
 * confidentiality agreement.
 * ==================================================================================================
 * File Name: home.js
 * Purpose  : Host javascript source code for kevinh.work HTML files.
 * Version  : 0.1.0
 * --------------------------------------------------------------------------------------------------
 * Revision History: Nearly infinite
 * --------------------------------------------------------------------------------------------------
 * Date          Revision Description                                                     Modified By
 * --------------------------------------------------------------------------------------------------
 * 00/00/0000 - Your description here                                                             KH
 * ==================================================================================================
 */

//CONVERTER - dataPATH modifier
  function convertPATH(e) {

  if(e.keyCode === 13 && document.getElementById("incomingHOTNESS").checked == false){
            e.preventDefault(); // Ensure it is only this code that rusn

            var title = document.getElementById('incomingTITLE').value;
            var path = document.getElementById('incomingPATH').value;
            var category = document.getElementById('incomingCATEGORY').value;
            var comment = document.getElementById('incomingCOMMENT').value;
            var hotness = document.getElementById('incomingHOTNESS').value;

            var result = "\n" + "<tr><td class=\"dataTITLE\">"+title+"</td><td class=\"dataPATH\"><a href=\""+path+"\" target=\"_blank\">&#8599;&#xFE0E;</a></td><td class=\"dataDATE\"></td><td class=\"dataCAT\">"+category+"</td><td class=\"dataCOMMENT\">"+comment+"</td></tr>";

            document.getElementById('outgoingSTRING').value = result;
            document.getElementById('outgoingLIST').value += result;
            alert("Conversion done.");
        }
      else if(e.keyCode === 13 && document.getElementById('incomingHOTNESS').checked){
        e.preventDefault(); // Ensure it is only this code that rusn

            var title2 = document.getElementById('incomingTITLE').value;
            var path2 = document.getElementById('incomingPATH').value;
            var category2 = document.getElementById('incomingCATEGORY').value;
            var comment2 = document.getElementById('incomingCOMMENT').value;
            var hotness2 = document.getElementById('incomingHOTNESS').value;

            var result2 = "\n" + "<tr><td class=\"dataTITLEhot\">"+title2+"</td><td class=\"dataPATH\"><a href=\""+path2+"\" target=\"_blank\">&#8599;&#xFE0E;</a></td><td class=\"dataDATE\"></td><td class=\"dataCAT\">"+category2+"</td><td class=\"dataCOMMENT\">"+comment2+"</td></tr>";

            document.getElementById('outgoingSTRING').value = result2;
            document.getElementById('outgoingLIST').value += result2;
            alert("Conversion done.");
      }
}

//CONVERTER - toggle display
function toggleCONVERTER() {
    document.getElementById("draggable1-alt").style.display = "inline-table";
    document.getElementById("draggable2-alt").style.display = "inline-table";
    document.getElementById("draggable3-alt").style.display = "inline-table";
}


////////////////////////////ALL TOGGLES for topic table displays/////////////////////////////////
function toggleINDEX() {
  var x = document.getElementById("draggableJ"); var z = x.zIndex;
  x.style.display = "block";}

function toggleTABLEShome() {
  var x = document.getElementById("draggable1"); var z = x.zIndex;
  var alt = document.getElementById("draggable1-alt");
  document.getElementById("draggable2-alt").style.display = "inline-table";
  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}

function toggleTABLESconverter() {
  var x = document.getElementById("draggable2"); var z = x.zIndex;
  var alt = document.getElementById("draggable2-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.display = "block"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}

function toggleTABLES1() {
  var x = document.getElementById("draggable1"); var z = x.zIndex;
  var alt = document.getElementById("draggable1-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES2() {
  var x = document.getElementById("draggable2"); var z = x.zIndex;
  var alt = document.getElementById("draggable2-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES3() {
  var x = document.getElementById("draggable3"); var z = x.zIndex;
  var alt = document.getElementById("draggable3-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES4() {
  var x = document.getElementById("draggable4"); var z = x.zIndex;
  var alt = document.getElementById("draggable4-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES5() {
  var x = document.getElementById("draggable5"); var z = x.zIndex;
  var alt = document.getElementById("draggable5-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES6() {
  var x = document.getElementById("draggable6"); var z = x.zIndex;
  var alt = document.getElementById("draggable6-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES7() {
  var x = document.getElementById("draggable7"); var z = x.zIndex;
  var alt = document.getElementById("draggable7-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES8() {
  var x = document.getElementById("draggable8"); var z = x.zIndex;
  var alt = document.getElementById("draggable8-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES9() {
  var x = document.getElementById("draggable9"); var z = x.zIndex;
  var alt = document.getElementById("draggable9-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES10() {
  var x = document.getElementById("draggable10"); var z = x.zIndex;
  var alt = document.getElementById("draggable10-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}

function toggleTABLES11() {
  var x = document.getElementById("draggable11"); var z = x.zIndex;
  var alt = document.getElementById("draggable11-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES12() {
  var x = document.getElementById("draggable12"); var z = x.zIndex;
  var alt = document.getElementById("draggable12-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES13() {
  var x = document.getElementById("draggable13"); var z = x.zIndex;
  var alt = document.getElementById("draggable13-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES14() {
  var x = document.getElementById("draggable14"); var z = x.zIndex;
  var alt = document.getElementById("draggable14-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES15() {
  var x = document.getElementById("draggable15"); var z = x.zIndex;
  var alt = document.getElementById("draggable15-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES16() {
  var x = document.getElementById("draggable16"); var z = x.zIndex;
  var alt = document.getElementById("draggable16-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES17() {
  var x = document.getElementById("draggable17"); var z = x.zIndex;
  var alt = document.getElementById("draggable17-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES18() {
  var x = document.getElementById("draggable18"); var z = x.zIndex;
  var alt = document.getElementById("draggable18-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES19() {
  var x = document.getElementById("draggable19"); var z = x.zIndex;
  var alt = document.getElementById("draggable19-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES20() {
  var x = document.getElementById("draggable20"); var z = x.zIndex;
  var alt = document.getElementById("draggable20-alt");

if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES21() {
  var x = document.getElementById("draggable21"); var z = x.zIndex;
  var alt = document.getElementById("draggable21-alt");

if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}
function toggleTABLES22() {
  var x = document.getElementById("draggable22"); var z = x.zIndex;
  var alt = document.getElementById("draggable22-alt");

  if (alt.style.display != "none" && x.style.display != "none") { x.style.display = "none"; } else if (x.style.display == "none") { x.style.zIndex ++; x.style.display = "block"; alt.style.display = "none"; } else { alt.style.display = "inline-table"; x.style.display = "none";}}



function toggleOFF() {
  document.getElementById("draggable1").style.display = "none";
  document.getElementById("draggable2").style.display = "none";
  document.getElementById("draggable3").style.display = "none";
  document.getElementById("draggable4").style.display = "none";
  document.getElementById("draggable5").style.display = "none";
  document.getElementById("draggable6").style.display = "none";
  document.getElementById("draggable7").style.display = "none";
  document.getElementById("draggable8").style.display = "none";
  document.getElementById("draggable9").style.display = "none";
  document.getElementById("draggable10").style.display = "none";
  document.getElementById("draggable11").style.display = "none";
  document.getElementById("draggable12").style.display = "none";
  document.getElementById("draggable13").style.display = "none";
  document.getElementById("draggable14").style.display = "none";
  document.getElementById("draggable15").style.display = "none";
  document.getElementById("draggable16").style.display = "none";
  document.getElementById("draggable17").style.display = "none";
  document.getElementById("draggable18").style.display = "none";
  document.getElementById("draggable19").style.display = "none";
  document.getElementById("draggable20").style.display = "none";

}




function expandFOOTER() {

    var imgCHECK = document.getElementById("expandICON");

    if (imgCHECK.src.indexOf('expand-icon.png')!=-1 ){
    var allFootImgs = document.getElementById("footer").getElementsByTagName("img");
      for(var i = 0; i < allFootImgs.length; i++){
          var imgz = allFootImgs[i];
          imgz.style.height = "30px";
          imgz.style.width = "30px";

        }
    imgCHECK.src = "collapse-icon.png";
    }

    else {
      var allFootImgs2 = document.getElementById("footer").getElementsByTagName("img");
        for(var i2 = 0; i2 < allFootImgs2.length; i2++){
            var imgz2 = allFootImgs2[i2];
            imgz2.style.height = "15px";
            imgz2.style.width = "15px";

          }
      imgCHECK.src = "expand-icon.png";
    }
    if (button.value == "OFF") {
    button.value = "ON";
  } else {
    button.value = "OFF";
  }

}

////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
/////////////////// text input from local file /////////////////////////
////////////////////////////////////////////////////////////////////////
/*
$(document).ready(function() {
    //$('#output').load('http://kevinh.work/resources/journal_entries.txt');
    alert("ok");
    $.get("http://kevinh.work/resources/journal_entries.txt", function(response) {
     var logfile = response;
     $('#output').html(logfile);
     //alert(logfile);
    });
});

$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://kevinh.work/resources/journal_entries.txt",
        dataType: "text",
        success: function(data) {processData(data);}
     });
});

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {

            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(headers[j]+":"+data[j]);
            }
            lines.push(tarr);
        }
    }
    alert(lines);
}
/////


function importRequest()
{

  jQuery.get('journal_entries.txt', function(txt) {
    $('#output').text(txt);
  });
}
*/
//document.getElementById("openFile").addEventListener('change', function() {})


  /*  var fileContents;
      if (window.XMLHttpRequest){
        fileContents = new XMLHttpRequest();
      }
      else {
        fileContents = new ActiveXObject('Microsoft.XMLHTPP');
      }
}
    function importRequest() {
      window.alert("HELP");
      if (fileContents.readyState == 0 || fileContents.readyState == 4){ //broser has started request (0), or server retrieved data (4)
        fileContents.open('GET', 'file:///journal_entries.txt', true);
        fileContents.onreadystatechange = handleResponse;
        fileContents.send(null);
      }


    function handleResponse(){
      if(fileContents.readyState == 4 || fileContents.status == 200)
      {
        var fileContentsResponse = fileContents.responseText;
        document.getElementById('fileContents').innerHTML= fileContentsResponse;
      }
    }

    document.getElementById('fileInput').addEventListener('click'), function() {
    importRequest();  }

**/
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
///////////////////////////end display toggles//////////////////////////
////////////////////////////////////////////////////////////////////////




function sortTableCalm(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableCalm");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSubtle(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSubtle");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableDeep(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableDeep");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableTraditional(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableTraditional");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableHistory(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableHistory");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableScience(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableScience");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableResearch(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableResearch");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}

function sortTableTechnology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableTechnology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableWeb(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableWeb");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}

function sortTableInfoSec(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableInfoSec");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableComics(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableComics");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEducation(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEducation");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableIdea(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableIdea");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableBlog(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableBlog");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEcological(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEcological");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEnergy(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEnergy");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSustainability(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSustainability");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableManagement(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableManagement");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableConservation(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableConservation");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableVeganism(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableVeganism");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


  function sortTableNatural(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("topictableNatural");switching = true;  dir = "asc";
    while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
      for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
      if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEPA(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEPA");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableFDEP(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableFDEP");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTablePollution(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictablePollution");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableImpact(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableImpact");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableToxicology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableToxicology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}



function sortTableEffects(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEffects");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTablePsychology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictablePsychology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSociology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSociology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableReceipts(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableReceipts");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableJustice(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableJustice");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableHumanities(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableHumanities");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEthics(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEthics");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableLaw(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableLaw");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTablePolicy(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictablePolicy");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableEconomics(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEconomics");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableCompliance(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableCompliance");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableFl(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableFl");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableCerts(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableCerts");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableJobs(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableJobs");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableVolunteering(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableVolunteering");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}

function sortTableChemistry(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableChemistry");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableClimatology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableClimatology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSoil(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSoil");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableGeography(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableGeography");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}



function sortTableGeomatics(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableGeomatics");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}



function sortTableHydrology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableHydrology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableWastewater(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableWastewater");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableFiltration(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableFiltration");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}



function sortTableEcology(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableEcology");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSoundscape(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSoundscape");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableHydroponics(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableHydroponics");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableSolid(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableSolidWasteManagement");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableStudio(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableStudio");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableDesign(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableDesign");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableVisual(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableVisual");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableWeb(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableWeb");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableGames(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableGames");switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}


function sortTableUnsorted(n) {
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("topictableUnsorted"); switching = true;  dir = "asc";
  while (switching) {switching = false;  rows = table.getElementsByTagName("tr");
    for (i = 1; i < (rows.length - 1); i++) {shouldSwitch = false; x = rows[i].getElementsByTagName("td")[n];y = rows[i + 1].getElementsByTagName("td")[n];
      if (dir == "asc") { if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { shouldSwitch= true; break; }} else if (dir == "desc") {  if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {  shouldSwitch= true;  break; }}}
    if (shouldSwitch) { rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); switching = true; switchcount ++;  } else { if (switchcount === 0 && dir == "asc") { dir = "desc";  switching = true;}}}}
