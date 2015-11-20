//header

 
var header = document.querySelector('header');

var topspace = document.createElement('div');
topspace.className = 'top';
header.appendChild(topspace);

var headerone = document.createElement('div');
headerone.className = 'headerone';
topspace.appendChild(headerone);

var h1 = document.createElement('h1');
//h1.textContent = "About GOLF";
h1.className = 'h1';
headerone.appendChild(h1);


// make logo a link

var logolink = document.createElement('a');
logolink.href="index.html";
h1.appendChild(logolink);

var logo = document.createElement('img');
logo.className = 'logo'; 
logo.src = "images/logo.png" ;
logolink.appendChild(logo);



//navbar
var navbar = document.createElement('nav');
navbar.className = 'navbar';
headerone.appendChild(navbar);

var navitems = document.createElement('ul');
navbar.appendChild(navitems);


//first nav bar item - add id element here
var lionenav = document.createElement('li');
lionenav.id = 'home';
navitems.appendChild(lionenav);


var lione = document.createElement('a');
lione.textContent = "home";
lione.href="index.html";
lionenav.appendChild(lione);
 
//
var litwonav = document.createElement('li');
litwonav.id = 'about';
navitems.appendChild(litwonav);

var litwo = document.createElement('a');
litwo.textContent = "about";
litwo.href="about.html";
litwonav.appendChild(litwo);

//
var lifournav = document.createElement('li');
lifournav.id = 'contact';
navitems.appendChild(lifournav);

var lifour = document.createElement('a');
lifour.textContent = "contact";
lifour.href = "contact.html";
lifournav.appendChild(lifour);

//

var lithreenav = document.createElement('li');
lithreenav.id = 'gallery';
navitems.appendChild(lithreenav);

var lithree = document.createElement('a');
lithree.textContent = "gallery";
lithree.href="gallery.html";
lithreenav.appendChild(lithree);

// date and weather
// header two is the div for the infobox; need to create ul and li for date and weather

var headertwo = document.createElement('div');
topspace.appendChild(headertwo);

var infobox = document.createElement('h6');
headertwo.appendChild(infobox); 

var infoitems = document.createElement('ul');
infoitems.className = "infobox";
infobox.appendChild(infoitems); 

var today = document.createElement('li');
today.id = "spanDate";
infobox.appendChild(today);
 
var weather = document.createElement('li');
weather.className = "temperature";
infobox.appendChild(weather);

    var months = ['January','February','March','April','May','June','July',
        'August','September','October','November','December'];  
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        'Saturday', 'Sunday'];
     
    var date = new Date();
        
    document.getElementById("spanDate").innerHTML = days[date.getDay()] + ", " +
            months[date.getMonth()] +   " " 
           + date.getDate()+ ", " + date.getFullYear();  
 
//
//weather - need zip code and country code
 // got an API
 
var apikey = '&APPID=da0e5b7c2d9da9ba13c195f4137461e4';
        
var url = 'http://api.openweathermap.org/data/2.5/weather?zip=';

var zipcode = "80439,us";  //evergreen CO zip code
		
var constructedURL = url + zipcode + apikey + "&units=imperial";
       

//    console.log(constructedURL);
    $.ajax({
        url: constructedURL,
        type: 'GET'
    }).done(function(theParsedResponseFromTheServer){
        var realTemp =  Math.round((theParsedResponseFromTheServer.main.temp));	
        var temp = $('<div> ' + ' ' + realTemp + "&#176" + "F" +'</div>');
        
        $('.temperature').append(temp);
            });

 