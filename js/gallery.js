$(document).ready(function(){
  $(".gallery-image").imageZoom();

  $(".gallery-image").click(function(){
    alert("The paragraph was clicked.");
  });
});