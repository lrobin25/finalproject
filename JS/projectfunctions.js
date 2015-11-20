 
$(document).ready(function() {

// NOTE: all buttons MUST use id not class    
    
// nav bar hover buttons
///is there a way to chain?  
        $('#contact').hover(function() {
        $('#contact').toggleClass('navtoggle');
            });
            
        $('#home').hover(function() {
        $('#home').toggleClass('navtoggle');
            });
                 
        $('#gallery').hover(function() {
        $('#gallery').toggleClass('navtoggle');
            });
            
        $('#about').hover(function() {
        $('#about').toggleClass('navtoggle');
    });
    
    
// tabs for about page
    $( "#tabs" ).tabs();           


// parsely for contact page
    $('.contactform').parsley();
 

 // local storage for index (home) page
    localStorage.setItem('name', "Laura Robinson");
    localStorage.setItem('course','ICT 4510 / Advanced Web Development');
    localStorage.setItem('date', 'Fall 2015');
     
    function information() {
    var storageinfo = document.querySelector(".middlebox");
        var div = document.createElement('div');
        storageinfo.appendChild(div);
               
        var h3name=document.createElement('h3');
        h3name.className = 'homestorage'; 
        h3name.textContent = "Name - " + localStorage.getItem('name');
        storageinfo.appendChild(h3name);
        
        var h3course=document.createElement('h3');
        h3course.textContent = "Course - " + localStorage.getItem('course');
        storageinfo.appendChild(h3course);
        
        var h3date=document.createElement('h3');
        h3date.textContent = localStorage.getItem('date');
        storageinfo.appendChild(h3date);   
    }    
        
   //  $('h1').text("Hello" + ' ' +  localStorage.getItem('name'));
    
    $('#storagebutton').on('click',information);
   

// gallery - flickr feeds and button to flickr.com for LR account using JSON info rather
// than hardcoding the URL
var lrfeed = "https://api.flickr.com/services/feeds/photos_public.gne?ids=48928949@N02&format=json&jsoncallback=?";

$.getJSON(lrfeed,function(data) {
                  
        // the photos start at "items' 
        // data.link is the URL for LR's Flickr photostream found in the jSON  
  
        var link = '<a class = "flickr" target= "_blank" href="' + data.link + '"> flickr </a>';
        //console.log(link);
           
	var photourl = '';
	
        $.each(data.items,function(i,photo) {
            photourl = photourl + 
                '<span class="image">' +
                '<a target= "_blank" href="' + photo.link + '">'+
                '<img src="' + photo.media.m.replace('_m','_s') + '"></a></span>';	
           // each photo has a property called media which is the src link - called medium size = m
           // the replace - says to replace the mediusm image with a small thumbnail S; this is in the API 
	}); 
	$('#photos').append(photourl);
        
        $('.flickrlink').append(link);        
       //    $('button').append(link);     
}); 

// validate POST using httpbin  on contact page
//validate button should be outside form

$('#validate').on('click',function(event) {
         
    var posturl = "https://httpbin.org/post";
    var serializedData = $('#contactform').serialize();

    // check
    //console.log(serializedData);

    $.ajax ({   
        url: posturl,
        type: 'POST',
        data: serializedData
    }).done(function(serverPostResponse){
        $('h4').append($('<div></div>').text("httpbin.org said for first name -  "   + " " +
        serverPostResponse.form.firstname + " " ));
        $('h4').append($('<div></div>').text("httpbin.org said for last name -  "   + " " +
        serverPostResponse.form.lastname + " " ));
        $('h4').append($('<div></div>').text("httpbin.org said for email address -  "   + " " +
        serverPostResponse.form.email + " " ));
        $('h4').append($('<div></div>').text("httpbin.org said for skill level -  "   + " " +
        serverPostResponse.form.skill + " " ));
        $('h4').append($('<div></div>').text("httpbin.org said for source -  "   + " " +
        serverPostResponse.form.sources + " " ));
        $('h4').append($('<div></div>').text("httpbin.org said for message -  "   + " " +
        serverPostResponse.form.message + " " ));
    });
 });

});    



