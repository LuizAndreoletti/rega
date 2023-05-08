(function(){
  
    //Change these values
    var msg = "Nós usamos cookies para melhorar a sua experiência de navegação na web. Ao continuar a navegar no site, você concorda com a nossa política de uso de cookies.";
    var closeBtnMsg = "OK";
    var privacyBtnMsg = "Privacy Policy";
    var privacyLink = "https://www.google.com";
    
    //check cookies 
    if(document.cookie){
     var cookieString = document.cookie;
     var cookieList = cookieString.split(";");
     // if cookie named OKCookie is found, return
     for(x = 0; x < cookieList.length; x++){
       if (cookieList[x].indexOf("OKCookie") != -1){return}; 
     }
    }
    
    var docRoot = document.body;
    var okC = document.createElement("div");
    okC.setAttribute("id", "okCookie");
    var okCp = document.createElement("p");
    var okcText = document.createTextNode(msg); 
    
    //close button
    var okCclose = document.createElement("a");
    var okcCloseText = document.createTextNode(closeBtnMsg);
    okCclose.setAttribute("href", "#");
    okCclose.setAttribute("id", "okClose");
    okCclose.appendChild(okcCloseText);
    okCclose.addEventListener("click", closeCookie, false);
   
    
    
    //add to DOM
    okCp.appendChild(okcText);
    okC.appendChild(okCp);
    okC.appendChild(okCclose);
    docRoot.appendChild(okC);
    
    okC.classList.add("okcBeginAnimate");
    
    function closeCookie(){
      var cookieExpire = new Date();
      cookieExpire.setFullYear(cookieExpire.getFullYear() +2);
      document.cookie="OKCookie=1; expires=" + cookieExpire.toGMTString() + ";";
      docRoot.removeChild(okC);
    }
    
  })();