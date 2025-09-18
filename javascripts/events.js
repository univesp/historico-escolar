

  $(window).scroll(function(){

    var nav = $("nav");
    var scroll = $(window).scrollTop();

    // Mostra o nav quando a página está no topo
    if(scroll == 0){
      nav.fadeIn();

    } else {
      nav.fadeOut();
    }

  });

  $( init );
function init() {
  $( ".droppable-area2" ).sortable({
      connectWith: ".connected-sortable",
      stack: '.connected-sortable ul'
    }).disableSelection();

}

var ordem = [];


 $(function () {
         $( ".teste" ).sortable({
            scrollSensitivity: 10,
            connectWith: ".connected-sortable",
            receive: function (event, ui) {
                var clicado = ui.item.attr("id");
                ordem.push(clicado);
                var ordemnumerica = ordem.sort(function (a, b) {
        return (a - b);
    });
                console.log(ordemnumerica);



if(ordemnumerica.length > 5){
    document.getElementById("demo1").innerHTML = document.getElementById(ordemnumerica[0]).querySelector('span').innerHTML;
    document.getElementById("demo2").innerHTML = document.getElementById(ordemnumerica[1]).querySelector('span').innerHTML;
    document.getElementById("demo3").innerHTML = document.getElementById(ordemnumerica[2]).querySelector('span').innerHTML;
    document.getElementById("demo4").innerHTML = document.getElementById(ordemnumerica[3]).querySelector('span').innerHTML;
    document.getElementById("demo5").innerHTML = document.getElementById(ordemnumerica[4]).querySelector('span').innerHTML;
    document.getElementById("demo6").innerHTML = document.getElementById(ordemnumerica[5]).querySelector('span').innerHTML;  
}



// document.getElementById("demo1").innerHTML = ordemnumerica[0];
// document.getElementById("demo2").innerHTML = ordemnumerica[1];
// document.getElementById("demo3").innerHTML = ordemnumerica[2];
// document.getElementById("demo4").innerHTML = ordemnumerica[3];
// document.getElementById("demo5").innerHTML = ordemnumerica[4];
// document.getElementById("demo6").innerHTML = ordemnumerica[5];



  if(ordem.length==1){
    $('.aro').remove();
  }
  if(ordem.length==6){
    $(".draggable-item2").css({"height": "80px" ,"margin-top": "75px"});
    $(".draggable-item").css({"padding-top": "20px"});
    $('.connected-sortable').css({"margin-top": "0px"});
    //$('.regua').css({"padding-top": "210px"});
    $("hr").css({"margin-top": "50px"});
    $('.botao4').show();
    $('.botao4').click(function() {
    $('.flip-container .flipper').closest('.flip-container').toggleClass('hover');
    $('.flip-container .flipper').css('transform, rotateY(180deg)');
});
  }
            }
        });
});


    for (var $x=$(".droppable-area1 li"), i=$x.length-1, j, temp; i>=0; i--) { j=Math.floor(Math.random()*(i+1)), temp=$x[i], $x[i]=$x[j], $x[j]=temp; }
$x.each(function(i, li) { $(".droppable-area1").append(li); });


      $(function(){
      var $x = $(".droppable-area1 li");
    Array.prototype.sort.call($x, function() { return Math.round(Math.random())< 0.5; });
    $x.each(function(i, li) {
      $(".droppable-area1").append(li);
    });
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 1 ).show();
    }, 2800 );
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 2 ).show();
    }, 3000 );
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 3 ).show();
    }, 3200 );
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 4 ).show();
    }, 3400 );
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 5 ).show();
    }, 3600 );
    setTimeout( function() {
    $( ".droppable-area1" ).find( "li" ).eq( 6 ).show();
    }, 3800 );
        $("#resposta1").animate({left: '1500px'},200);
        $("#resposta1").animate({left: '30%'},300);
        $("#resposta2").animate({left: '1500px'},400);
        $("#resposta2").animate({left: '32%'},500);
        $("#resposta3").animate({left: '1500px'},600);
        $("#resposta3").animate({left: '34%'},700);
        $("#resposta4").animate({left: '1500px'},800);
        $("#resposta4").animate({left: '36%'},900);
        $("#resposta5").animate({left: '1500px'},1000);
        $("#resposta5").animate({left: '38%'},1100);
        $("#resposta6").animate({left: '1500px'},1200);
        $("#resposta6").animate({left: '40%'},1300);
        $("#resposta7").animate({left: '1500px'},1400);
        $("#resposta7").animate({left: '42%'},1500);
        $("#resposta8").animate({left: '1500px'},1600);
        $("#resposta8").animate({left: '44%'},1700);
        $("#resposta9").animate({left: '1500px'},1800);
        $("#resposta9").animate({left: '46%'},1900);
        $("#resposta10").animate({left: '1500px'},2000);
        $("#resposta10").animate({left: '48%'},2100);
        $("#resposta11").animate({left: '1500px'},2200);
        $("#resposta11").animate({left: '50%'},2300);
        $("#resposta12").animate({left: '1500px'},2400);
        $("#resposta12").animate({left: '52%'},2500);
        $("#resposta13").animate({left: '1500px'},2400);
        $("#resposta13").animate({left: '54%'},2500);
        $("#resposta14").animate({left: '1500px'},2400);
        $("#resposta14").animate({left: '56%'},2500);
        $("#resposta15").animate({left: '1500px'},2400);
        $("#resposta15").animate({left: '58%'},2500);
        $("#resposta16").animate({left: '1500px'},2400);
        $("#resposta16").animate({left: '60%'},2500);
        $("#resposta17").animate({left: '1500px'},2400);
        $("#resposta17").animate({left: '63%'},2500);
        $("#resposta18").animate({left: '1500px'},2400);
        $("#resposta18").animate({left: '65%'},2500);
    });


var ordem = [];
var ordem2 = [];

function certo(){
$('.botao2').show();
$('.botao4').hide();
  };


var desabilita = 0;

$(".botao3").click(function(){
  desabilita++;

  console.log(desabilita);
     });

$(".botao6").click(function(){
  desabilita=0;

  console.log(desabilita);
     });

function message(){
  if(desabilita==0){
  $('#successMessage').show();
  }
}
function message2(){
  if(desabilita==0){
  $('#successMessage2').show();
  }
}
function message3(){
  if(desabilita==0){
  $('#successMessage3').show();
   }
}
function message4(){
  if(desabilita==0){
  $('#successMessage4').show();
  }
}
function message5(){
  if(desabilita==0){
  $('#successMessage5').show();
   }
}
function message6(){
  if(desabilita==0){
  $('#successMessage6').show();
  }
}
function message7(){
  if(desabilita==0){
  $('#successMessage7').show();
  }
}
function message8(){
  if(desabilita==0){
  $('#successMessage8').show();
  }
}
function message9(){
  if(desabilita==0){
  $('#successMessage9').show();
 }
}
function message10(){
  if(desabilita==0){
  $('#successMessage10').show();
  }
}
function message11(){
  if(desabilita==0){
  $('#successMessage11').show();
  }
}
function message12(){
  if(desabilita==0){
  $('#successMessage12').show();
  }
}
function message13(){
  if(desabilita==0){
  $('#successMessage13').show();
  }
}
function message14(){
  if(desabilita==0){
  $('#successMessage14').show();
   }
}
function message15(){
  if(desabilita==0){
  $('#successMessage15').show();
   }
}
function message16(){
  if(desabilita==0){
  $('#successMessage16').show();
   }
}
function message17(){
  if(desabilita==0){
  $('#successMessage17').show();
  }
}
function message18(){
  if(desabilita==0){
  $('#successMessage18').show();
  }
}
function message19(){
  if(desabilita==0){
  $('#successMessage19').show();
  }
}

function message20(){
  if(desabilita==0){
  $('#successMessage20').show();
  }
}
function message21(){
  if(desabilita==0){
  $('#successMessage21').show();
  }
}
function message22(){
  if(desabilita==0){
  $('#successMessage22').show();
  }
}
function message23(){
  if(desabilita==0){
  $('#successMessage23').show();
  }
}
function message24(){
  if(desabilita==0){
  $('#successMessage24').show();
   }
}
function message25(){
  if(desabilita==0){
  $('#successMessage25').show();
   }
}



function fecharreferencia(){
  $('#referencia').hide();
}
function fecharmensagem(){
$('#successMessage').hide();
}
function fecharmensagem2(){
$('#successMessage2').hide();
}
function fecharmensagem3(){
$('#successMessage3').hide();
}
function fecharmensagem4(){
$('#successMessage4').hide();
}
function fecharmensagem5(){
$('#successMessage5').hide();
}
function fecharmensagem6(){
$('#successMessage6').hide();
}
function fecharmensagem7(){
$('#successMessage7').hide();
}
function fecharmensagem8(){
$('#successMessage8').hide();
}
function fecharmensagem9(){
$('#successMessage9').hide();
}
function fecharmensagem10(){
$('#successMessage10').hide();
}
function fecharmensagem11(){
$('#successMessage11').hide();
}
function fecharmensagem12(){
$('#successMessage12').hide();
}
function fecharmensagem13(){
$('#successMessage13').hide();
}
function fecharmensagem14(){
$('#successMessage14').hide();
}
function fecharmensagem15(){
$('#successMessage15').hide();
}
function fecharmensagem16(){
$('#successMessage16').hide();
}
function fecharmensagem17(){
$('#successMessage17').hide();
}
function fecharmensagem18(){
$('#successMessage18').hide();
}
function fecharmensagem19(){
$('#successMessage19').hide();
}
function fecharmensagem20(){
$('#successMessage20').hide();
}
function fecharmensagem21(){
$('#successMessage21').hide();
}
function fecharmensagem22(){
$('#successMessage22').hide();
}
function fecharmensagem23(){
$('#successMessage23').hide();
}
function fecharmensagem24(){
$('#successMessage24').hide();
}
function fecharmensagem25(){
$('#successMessage25').hide();
}


    $(document).ready(function(){
    $(".iniciar2").click(function(){        
        window.location.replace('index2.html');
    });
});



$(".reiniciar").click(function(){
        window.location.replace('index2.html');
     });



$(".inicio").click(function(){
   window.location.replace('index.html');
     });


$('.botao4').click(function() {
  certo();
  $('#conteudo1').show();
  $('.iniciar3').show();
  $('.lin1').show();
  $('.lin2').show();
  $('.lin3').show();
  $('.lin4').show();
  $('.lin5').show();
  $('.lin6').show();
});

$('.botao').click(function() {
  $('#referencia').hide();
});

$(".iniciar3").click(function() {
      $('html, body').animate({
         scrollTop: $("#conteudo1").offset().top
     }, 2000);
    });


