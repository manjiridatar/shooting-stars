var stars = document.getElementsByClassName( "star" );

for( var i = 0; i < stars.length; i++ ) {
    stars[ i ].addEventListener( 'click', handleClick );
}

function handleClick( event ) {
    var starClicked = event.target;
    var found = false;

    for( var i = 0; i < stars.length; i++) {
        if( starClicked == stars[ i ] ) {
            found = true;
            stars[ i ].classList.add( "star-clicked" );

        } else {
            if( found ) {
                stars[ i ].classList.remove( "star-clicked" );

            } else {
                stars[ i ].classList.add( "star-clicked" );

            }
        }
    }
}


