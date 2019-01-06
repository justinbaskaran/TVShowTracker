n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = m + "/" + d + "/" + y;
////////////Fresh off the Boat//////////////
$.ajax({
   type: 'GET',
  crossDomain: true,
  url: 'https://www.tvguide.com/tvshows/fresh-off-the-boat/episodes/660996/',
   //url: 'https://justinbaskaran.github.io',
   dataType: 'html', // Notice! JSONP <-- P (lowercase)
   error: function() {
      $( "#FOB" ).text( "NO DATE FETCHED!" ); 
   },
   success: function(data) {
     // console.log("FOB: " + data);
     // $( "#FOB" ).text( "IT WORKS!" ); 
      //<p class="tvobject-episode-airdate hidden-xs">January 10, 2019</p>
    var div = document.createElement("div");
    div.innerHTML = data;
    var nodes = div.getElementsByClassName("tvobject-episode-airdate hidden-xs");
    var elements = [];
    var newElements= [];
    for(var i=0; i<nodes.length; i++) { elements.push(nodes[i].innerHTML); }
    
    for (var j =0; j<elements.length; j++)
    {
            // Create date from input value
      var inputDate = new Date(elements[j]);

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
       newElements.push(elements[j])
         if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
          newElements = [];
          newElements.push(elements[j])
        }
      }

    }
    console.log("FOB " + newElements);
    if (newElements.length > 0)
    {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    var dates = new Date(newElements[0]);

    var day = days[ dates.getDay() ];

    $( "#FOB" ).text( day+" " + newElements[0] ); 
    }

   }
});
///////////////////////////////////////////////
/////////////Supergirl/////////////////////////
$.ajax({
   type: 'GET',
  crossDomain: true,
  url: 'https://www.tvguide.com/tvshows/supergirl/episodes/694533/',
   //url: 'https://justinbaskaran.github.io',
   dataType: 'html', // Notice! JSONP <-- P (lowercase)
   error: function() {
      $( "#SG" ).text( "NO DATE FETCHED!" ); 
   },
   dataType: 'html',
   success: function(data) {
     var div = document.createElement("div");
    div.innerHTML = data;
    var nodes = div.getElementsByClassName("tvobject-episode-airdate hidden-xs");
    var elements = [];
    var newElements= [];
    for(var i=0; i<nodes.length; i++) { elements.push(nodes[i].innerHTML); }
    console.log("SG Dates" + elements);
    for (var j =0; j<elements.length; j++)
    {
            // Create date from input value
      var inputDate = new Date(elements[j]);

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
       if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
       newElements.push(elements[j])
         if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
          newElements = [];
          newElements.push(elements[j])
        }
      }

    }
    console.log("SG" + newElements);
    if (newElements.length > 0)
    {
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
      var dates = new Date(newElements[0]);
  
      var day = days[ dates.getDay() ];
  
      $( "#SG" ).text( day+" " + newElements[0] ); 
    } else 
    {
        $( "#SG" ).text( "No Dates Listed!" ); 
    }
   }
});
////////////////////////////////////////////////
//////////////Young Sheldon//////////////////////
$.ajax({
   type: 'GET',
  crossDomain: true,
  url: 'https://www.tvguide.com/tvshows/young-sheldon/episodes/1047493/',
   //url: 'https://justinbaskaran.github.io',
   dataType: 'html', // Notice! JSONP <-- P (lowercase)
   error: function() {
      $( "#YS" ).text( "NO DATE FETCHED!" ); 
   },
   dataType: 'html',
   success: function(data) {
    var div = document.createElement("div");
    div.innerHTML = data;
    var nodes = div.getElementsByClassName("tvobject-episode-airdate hidden-xs");
    var elements = [];
    var newElements= [];
    for(var i=0; i<nodes.length; i++) { elements.push(nodes[i].innerHTML); }
    
    for (var j =0; j<elements.length; j++)
    {
            // Create date from input value
      var inputDate = new Date(elements[j]);

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
       if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
       newElements.push(elements[j])
         if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
          newElements = [];
          newElements.push(elements[j])
        }
      }

    }
    console.log( "YS" + newElements);
    if (newElements.length > 0)
    {
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
      var dates = new Date(newElements[0]);
  
      var day = days[ dates.getDay() ];
  
      $( "#YS" ).text( day+" " + newElements[0] ); 
    }
   }
});
//////////////////////////////////////////////////
/////////////////The Good Doctor///////////////////
$.ajax({
   type: 'GET',
  crossDomain: true,
  url: 'https://www.tvguide.com/tvshows/the-good-doctor/episodes/1041642/',
   //url: 'https://justinbaskaran.github.io',
   dataType: 'html', // Notice! JSONP <-- P (lowercase)
   error: function() {
      $( "#GD" ).text( "NO DATE FETCHED!" ); 
   },
   dataType: 'html',
   success: function(data) {
    var div = document.createElement("div");
    div.innerHTML = data;
    var nodes = div.getElementsByClassName("tvobject-episode-airdate hidden-xs");
    var elements = [];
    var newElements= [];
    for(var i=0; i<nodes.length; i++) { elements.push(nodes[i].innerHTML); }
    
    for (var j =0; j<elements.length; j++)
    {
            // Create date from input value
      var inputDate = new Date(elements[j]);

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
       newElements.push(elements[j])
         if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
          newElements = [];
          newElements.push(elements[j])
        }
      }

    }
    console.log( "GD" + newElements);
    if (newElements.length > 0)
    {
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
      var dates = new Date(newElements[0]);
  
      var day = days[ dates.getDay() ];
  
      $( "#GD" ).text( day+" " + newElements[0] );  
    }
   }
});
////////////////////////////////////////////////////
////////////////// The Big Bang Theory /////////////
$.ajax({
   type: 'GET',
  crossDomain: true,
  url: 'https://www.tvguide.com/tvshows/the-big-bang-theory/episodes/288041/',
   //url: 'https://justinbaskaran.github.io',
   dataType: 'html', // Notice! JSONP <-- P (lowercase)
   error: function() {
      $( "#BBT" ).text( "NO DATE FETCHED!" ); 
   },
   dataType: 'html',
   success: function(data) {
    var div = document.createElement("div");
    div.innerHTML = data;
    var nodes = div.getElementsByClassName("tvobject-episode-airdate hidden-xs");
    var elements = [];
    var newElements= [];
    for(var i=0; i<nodes.length; i++) { elements.push(nodes[i].innerHTML); }
    
    for (var j =0; j<elements.length; j++)
    {
            // Create date from input value
      var inputDate = new Date(elements[j]);

      // Get today's date
      var todaysDate = new Date();

      // call setHours to take the time out of the comparison
      if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
       newElements.push(elements[j])
         if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
          newElements = [];
          newElements.push(elements[j])
        }
      }
    }
    console.log( "BBT" + newElements);
    if (newElements.length > 0)
    {
      var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
      var dates = new Date(newElements[0]);
  
      var day = days[ dates.getDay() ];
  
      $( "#BBT" ).text( day+" " + newElements[0] );   
    }
   }
});
/////////////////////////////////////////////////////
////////////////// Kakegurui /////////////

$.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://myanimelist.net/anime/season') + '&callback=?', function(data){
 // console.log("TRial "+ data.contents);
  var div = document.createElement("div");
  div.innerHTML = data.contents;
  var nodes = div.getElementsByClassName("remain-time");
  var elements = [];
  var elementsnewElements= [];
  elements.push(nodes[2].innerHTML); 
  console.log( "Kakeguri new" + elements);

  var daystoweekdays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var currentDate = new Date(elements[0]);

  currentDate.setHours (currentDate.getHours()- 2);

  var day = daystoweekdays[ currentDate.getDay() ];

  $( "#KG" ).text( day+" " + months[currentDate.getMonth()]+" "+ currentDate.getDate()
  + ", "  + currentDate.getFullYear()); 

  // for (var j =0; j<elements.length; j++)
  // {
  //         // Create date from input value
  //   var inputDate = new Date(elements[j]);

  //   // Get today's date
  //   var todaysDate = new Date();

  //   // call setHours to take the time out of the comparison
  //   if(inputDate.setHours(0,0,0,0) >= todaysDate.setHours(0,0,0,0)) {
  //    newElements.push(elements[j])
  //      if(inputDate.setHours(0,0,0,0) == todaysDate.setHours(0,0,0,0)) {
  //       newElements = [];
  //       newElements.push(elements[j])
  //     }
  //   }
  // }
  //console.log( "Kakeguri new" + newElements);
  // if (newElements.length > 0)
  // {
  // $( "#KG" ).text( newElements[0] ); 
  // }
});
       

/////////////////////////////////////////////////////