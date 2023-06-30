var topButton = document.getElementById("topButton");
window.onscroll = function(){scrollFunction()};
function scrollFunction(){
    if(document.body.scrollTop > 60 || document.documentElement.scrollTop > 60){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

function goToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function screenLoad(){
    setTimeout(function(){
    var loadScreen = document.getElementById("preloader");
    loadScreen.style.display = "none";
    }, 3000)
}