function changeLanguage() {
    var select = document.getElementById("language-selector");
    var language = select.options[select.selectedIndex].value;
    var elements = document.getElementsByClassName("lang");
    
    for (var i = 0; i < elements.length; i++) {
      elements[i].style.display = "none";
    }
    
    var languageElements = document.getElementsByClassName("lang-" + language);
    
    for (var i = 0; i < languageElements.length; i++) {
      languageElements[i].style.display = "block";
    }
  }