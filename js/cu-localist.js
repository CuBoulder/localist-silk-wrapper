$(document).ready(function(){
  var spotlight = $('.event-spotlight-component').length;
  var slider = $('.featured_section_component ').length;
  slider = 0;
  // spotlight = 0;
  if (spotlight > 0) {
    $('.event-spotlight-component:first').appendTo('.featured-container');
    console.log('moved first spotlight component to wider region.');
  }
  else if (slider > 0) {
    $('.featured_section_component:first').appendTo('.featured-container');
    $('.featured_item a.box_left img').each(function(){
      var url = $(this).attr('src');
      url = url.replace('/big/', '/cover/');
      $(this).attr('src', url);
    });
  }
});
