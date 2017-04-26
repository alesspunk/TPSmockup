          
            $("#toggle-close").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
              $("#quick-bill").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
              $("#quick-bill-mini").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
            
             $("#toggle1").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
                $("#toggle2").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
                $("#toggle3").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
                  $("#detailbill").click(function(e) {
            e.preventDefault();
            $("#wrapper").toggleClass("toggled");
            });
 
 
 
 
 //seleccion
$("tr").click(function() {
   $(this).addClass('selected').siblings().removeClass("selected");
});


         
//acordion
$('.accordian-body').on('show.bs.collapse', function () {
    $("tr").closest("table")
        .find(".collapse.in")
        .not(this)
        .collapse('toggle')
})

//error

$(function(){
    $("tr").click(function(){
    });
    $("#no1").click(function(e){
        e.stopPropagation();
    });
  
});
