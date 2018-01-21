google.charts.load('current', { 'packages': ['map'] });
google.charts.setOnLoadCallback(drawMap);
function drawMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Population'],
        ['US', 'US: 317,842,000'],
        ['France', 'France 200,852,800'],
        ['Egypt', 'Egypt 80,250,360']
    ]);
    var options = {
        showTooltip: true,
        showInfoWindow: true
    };
    var map = new google.visualization.Map(document.getElementById('chart_div'));
    map.draw(data, options);
}


var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});

var $tabs = $('.tabs');
var $panels = $('.panel');

$tabs.on('click', 'a', function (e) {
    e.preventDefault();
    var id = $(this).attr('href');

    $panels.filter(':not([hidden])').attr('hidden', true);
    $(id).removeAttr('hidden');

    $tabs.find('.current').removeClass('current');
    $(this).addClass('current');

});

$(document).ready(function () {
   $(".menu-icon").on("click", function () {
      $("nav ul").toggleClass("show");
   });



   $(window).on("scroll", function () {
       if($(window).scrollTop()){
           $('nav').addClass('black');
       }
       else{
           $('nav').removeClass('black');
       }
   })
});
