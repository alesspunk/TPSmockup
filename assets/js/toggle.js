          $('.row .btn').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $collapse = $this.closest('.collapse-group').find('.collapse');
    $collapse.collapse('toggle');
});


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
            
            
            document.getElementById("contenido").innerHTML = document.getElementById("quickbill").innerHTML;
            
             $("#toggle1").click(function(e) {
	             
if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }



	             
			
				
				  	var x2 = document.getElementById("quickbill").innerHTML;
				  	document.getElementById("contenido").innerHTML = x2;

            });
            
                     $("#toggle2").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
            var x = document.getElementById("detail-bill").innerHTML;
    document.getElementById("contenido").innerHTML = x;

            });
            
                          $("#toggle3").click(function(e) {
          
          if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
            var x = document.getElementById("progress-bill").innerHTML;
    document.getElementById("contenido").innerHTML = x;

            });
            
                   $("#toggle4").click(function(e) {
          
          if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
            var x = document.getElementById("last-36").innerHTML;
    document.getElementById("contenido").innerHTML = x;

            });
            
            
                $("#toggle5").click(function(e) {
          
           if( $( "#wrapper" ).hasClass('toggled') ) {



	  }
	  else{

	      $("#wrapper").toggleClass("toggled");

	  }
            var x = document.getElementById("b-paragraphs").innerHTML;
    document.getElementById("contenido").innerHTML = x;
    
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
