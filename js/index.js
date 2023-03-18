$('#skills').on("click", function(){
    window.location.href='https://jade0304.github.io/UX_UI_HW_19/resume';
    return false;
});

$( "li" ).hover(
    function() {
      $( this ).append( $( "<span> l </span>" ) );
    }, function() {
      $( this ).find( "span" ).last().remove();
    }
  );



