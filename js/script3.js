console.log("abc");
document.addEventListener("DOMContentLoaded",
  function (event) {
    $ajaxUtils
      .sendGetRequest("home.html",
        function (res) {
          var message = res;

          console.log(message);

          document.querySelector("#Homepage")
            .innerHTML = message;
        }, false);
    
        
       

  });
