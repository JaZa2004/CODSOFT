        document.addEventListener("DOMContentLoaded",function(){
    
            document.getElementById("charac-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("Below-Banner").scrollIntoView({ behavior: "smooth" });
            });
    
            document.getElementById("aboutus-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
            });
    
            document.getElementById("contact-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("contactus")[0].scrollIntoView({ behavior: "smooth" });
            });
            
            document.getElementById("feature-link").addEventListener("click", function(event) {
            event.preventDefault();
            document.getElementById("featured").scrollIntoView({ behavior: "smooth" });
            });
        })