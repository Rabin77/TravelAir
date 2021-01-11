  let subnav = document.getElementById("subnanvar");

        window.onscroll = function() {runMe()};

        function runMe() {
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
            subnav.classList.add("addme");
        } 
        else {
            subnav.classList.remove("addme");
        }
        }


$('.nav-tabs a').click(function(){
$(this).tab('show');
})

// Select tab by name
$('.nav-tabs a[href="#home"]').tab('show')

// Select first tab
$('.nav-tabs button:first').tab('show')

// Select last tab
$('.nav-tabs button:first').tab('show')

// Select fourth tab (zero-based)
$('.nav-tabs a:eq(3) a').tab('show')

// buttonmangemnt


function openNav() {
  document.getElementById("mySidenav").style.width = "200px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}