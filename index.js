n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
////////////////////////////////////////////////////////////////////////////////////////////
////////////Fresh off the Boat///////////////////////////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt3551096/episodes?ref_=tt_ov_epll') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
 //    console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#FOB" ).text( dateRecente);
 } else {
  $( "#FOB" ).text( "No Show Found!");
 }
});
///////////////////////////////////////////////
/////////////Supergirl/////////////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt4016454/episodes?ref_=tt_ov_epl') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
 //    console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#SG" ).text( dateRecente);
 } else {
  $( "#SG" ).text( "No Show Found!");
 };
});
////////////////////////////////////////////////
//////////////Young Sheldon//////////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt6226232/episodes?ref_=tt_ov_epl') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
 //    console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#YS" ).text( dateRecente);
 } else {
  $( "#YS" ).text( "No Show Found!");
 }
});
//////////////////////////////////////////////////
/////////////////The Good Doctor///////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt6470478/episodes?ref_=tt_ov_epl') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
     console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#GD" ).text( dateRecente);
 } else {
  $( "#GD" ).text( "No Show Found!");
 }
 
});
///////////////////////////////////////////////////////////////////////////////////
////////////////// The Big Bang Theory ///////////////////////////////////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt0898266/episodes?ref_=tt_ov_epl') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
 //    console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#BBT" ).text( dateRecente);
 } else {
  $( "#BBT" ).text( "No Show Found!");
 }
});
///////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////// Kakegurui /////////////////////////////////////////////////////////////
$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://www.imdb.com/title/tt7131720/episodes?season=2&ref_=tt_eps_sn_2') + '&callback=?' , function(data){
 // console.log("ConsoleLOG: " + data.contents)
 var div = document.createElement("div");
 div.innerHTML = data.contents;
 var nodes = div.getElementsByClassName("airdate");
 var dateRecente="";
 var counter=999999999999;
 for (let i=0; i<nodes.length; i++){
   var MonthList= ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   var res = nodes[i].innerText.split(" ");
   var day = res[12];
   if (res[13] != null){
    var month = MonthList.indexOf(res[13].substring(0,3))+1;
    var year = res[14];
    var DateString = month+"/"+day+"/"+year;
    DateString = DateString.trim();
    var currentDates = new Date();
    var pageDate = new Date(DateString);
   }
   if (pageDate > currentDates){
 //    console.log("Page Date: " + pageDate);
     var a =0;
     var pDate = pageDate.getTime();
     var cDate = currentDates.getTime();

     while (pDate-cDate >604800000 ){
         pDate = pDate - 604800000
         a++;
     }

     if (a < counter){
         counter = a;
         dateRecente = pageDate
     }
   }
 }
 if (dateRecente != ""){
  $( "#KG" ).text( dateRecente);
 } else {
  $( "#KG" ).text( "No Show Found!");
 }
});
/////////////////////////////////////////////////////