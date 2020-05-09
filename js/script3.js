
$( document ).ready(function() {
  new WOW().init();
});
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    $ajaxUtils
      .sendGetRequest("home.html",
        function (res) {
          var message = res;
          

          

          document.querySelector("#Homepage")
            .innerHTML = message;
        }, false);
        
    
        
       

  });
