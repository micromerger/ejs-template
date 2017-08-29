$("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
     $("#menu-toggle-2").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled-2");
        $('#menu ul').hide();
    });
 
     function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
        function() {
          var checkElement = $(this).next();
          if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
            return false;
            }
          if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
            $('#menu ul:visible').slideUp('normal');
            checkElement.slideDown('normal');
            return false;
            }
          }
        );
      }
  $(document).ready(function() {initMenu();});

$( "#appiontment" ).css( "display" , "block" );
$( "#appiontmentLink" ).addClass( "active" );

$( "#appiontmentLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#appiontment" ).css( "display" , "block" );
$( "#appiontmentLink" ).addClass( "active" );
  });

$( "#assemblyLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#assembly" ).css( "display" , "block" );
$( "#assemblyLink" ).addClass( "active" );
  });

$( "#customer1Link" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#customer1" ).css( "display" , "block" );
$( "#customer1Link" ).addClass( "active" );
  });

$( "#customerLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#customer" ).css( "display" , "block" );
$( "#customerLink" ).addClass( "active" );
  });

$( "#doctorLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#doctor" ).css( "display" , "block" );
$( "#doctorLink" ).addClass( "active" );
  });

$( "#emailLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#email" ).css( "display" , "block" );
$( "#emailLink" ).addClass( "active" );
  });

$( "#model1Link" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#model1" ).css( "display" , "block" );
$( "#model1Link" ).addClass( "active" );
  });

$( "#model2Link" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#model2" ).css( "display" , "block" );
$( "#model2Link" ).addClass( "active" );
  });

$( "#modelLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#model" ).css( "display" , "block" );
$( "#modelLink" ).addClass( "active" );
  });

$( "#order1Link" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#order1" ).css( "display" , "block" );
$( "#order1Link" ).addClass( "active" );
  });

$( "#patientLink" ).click(function(){ 
$( "#appiontment" ).css("display" , "none");
$( "#appiontmentLink" ).removeClass( "active" );
$( "#assembly" ).css("display" , "none");
$( "#assemblyLink" ).removeClass( "active" );
$( "#customer1" ).css("display" , "none");
$( "#customer1Link" ).removeClass( "active" );
$( "#customer" ).css("display" , "none");
$( "#customerLink" ).removeClass( "active" );
$( "#doctor" ).css("display" , "none");
$( "#doctorLink" ).removeClass( "active" );
$( "#email" ).css("display" , "none");
$( "#emailLink" ).removeClass( "active" );
$( "#model1" ).css("display" , "none");
$( "#model1Link" ).removeClass( "active" );
$( "#model2" ).css("display" , "none");
$( "#model2Link" ).removeClass( "active" );
$( "#model" ).css("display" , "none");
$( "#modelLink" ).removeClass( "active" );
$( "#order1" ).css("display" , "none");
$( "#order1Link" ).removeClass( "active" );
$( "#patient" ).css("display" , "none");
$( "#patientLink" ).removeClass( "active" );
$( "#patient" ).css( "display" , "block" );
$( "#patientLink" ).addClass( "active" );
  });


