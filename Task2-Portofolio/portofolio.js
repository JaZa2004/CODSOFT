document.addEventListener("DOMContentLoaded",function(){

    document.getElementById("skills-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("skills").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("achiev-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("Achievements").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("projects-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    });

    document.getElementById("contact-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementsByClassName("main-section contact bg-lightgrey")[0].scrollIntoView({ behavior: "smooth" });
    });
    
    document.getElementById("cv-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("CV").scrollIntoView({ behavior: "smooth" });
    });
})