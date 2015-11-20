//footer

var footer = document.querySelector('footer');
var div = document.createElement('div');
div.className='bottomline';
footer.appendChild(div);

var ul = document.createElement('ul');
ul.className = 'links';
footer.appendChild(ul);

 
//text

var lifour = document.createElement('li');
lifour.className = "footerinfo";
lifour.textContent = "GOLF Course |  Evergreen CO | 303.555.1212 ";
ul.appendChild(lifour);


/// get ip address
var url = "http://httpbin.org/get";

    $.ajax({   
        url: url,
        type: "GET"
        })

.done(function(response){
    var ip = response.origin;
    var html = $('<p class="ipaddress">IP address  |  ' + ip + '</p>');
    $('footer').append(html);             
        });            
               

        
    