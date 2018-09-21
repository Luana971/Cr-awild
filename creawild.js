$(document).ready(function(){

    $("#cerf1, #cerf2, #cerf3, #cerf4, #cerf5, #cerf6").on('click', function(){
        $("#myModal").css("display", "block");
        $("#cerf").attr("src", $(this).attr("src"));
    });

    $(".close").on("click", function(){
        $("#myModal").css("display", "none");
    });		

});

/* ----- Fonction bouton retour en haut de la page, bouton apparait lorsque la page défile de 250px  ----- */

window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          document.getElementById("top-button").style.display = "block";
      } else {
          document.getElementById("top-button").style.display = "none";
      }
  };

/* ----- Fonction bouton langue changer langue sélectionnée ----- */
$('#dropdown-langue-items').on( 'click' , 'a' , function() {
    const elemSelect = $(this);
    const elemSelectClone = ($(this)).clone();
    const elemTitle = $("#btn-title a") ;
    const elemTitleClone = (elemTitle.clone());
    elemSelect.replaceWith(elemTitleClone);
    elemTitle.replaceWith(elemSelectClone);
  });

/* ----- Fonction rétrécir menu burger ----- */

  $('#navbarNav').find('a').on('click', function(e){
    $('#bouton-burger').trigger('click');
   });