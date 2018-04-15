  // JavaScript Document

   $(window).load(function () {
   
       $(".page-content").show();
      // $("#bg-video").show();

       
  });



  $(function () {

        // Slideshow 1
        $("#slider1").responsiveSlides({
          maxwidth: 800,
          speed: 800,
          pause: true

        });
      });

  $(document).ready(function() {
  	


    !function(d,s,id){

      var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?"http":"https";if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document, "script", "twitter-wjs");


       // highlight current page





     });
  var currentPage = $("body").data("current-page");
  if (currentPage) {
    $("a[data-page-id='" + currentPage + "']").addClass("active");
  }


