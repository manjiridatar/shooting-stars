
var stars = document.getElementsByClassName("star");
for(var i=0; i < stars.length; i++)
{
    stars[i].addEventListener('click', handleClick);
}

function handleClick(event) {

    var starclicked = event.target;

    for (var i=0; i<stars.length; i++){
        stars[i].classList.remove("star-clicked");
    }
    for (var i=0 ; i<stars.length; i++) {
        if (starclicked == stars[i]) {
            stars[i].classList.add("star-clicked");
            for(var j = 0; j<=i; j++) {
                stars[j].classList.add("star-clicked");
            }
        }
    }
}