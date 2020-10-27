
$(document).ready( function (){

    var next = $('.next');
    var prev = $('.prev');

    //IMPOSTAZIONI AL CLICK
    next.click( function(){
        nextPrevClick(next);
    })

    prev.click( function(){
        nextPrevClick(prev);
    })

    //BONUS IMPOSTAZIONE KEYBORD
    $(document).keydown( function (event){
        console.log(event.keyCode);

        if(event.keyCode === 37){
            nextPrevClick(prev);
        } else if(event.keyCode === 39){
            nextPrevClick(next);
        }

    })

    //IMPOSTAZIONE FUNZIONE
    function nextPrevClick(direzione){

        var activeImg = $('.images img.active');
        var activeCircle = $('.nav i.active');

        //RIMOZIONE ACTIVE
        activeImg.removeClass('active');
        activeCircle.removeClass('active');

        //DIREZIONE NEXT
        if ( direzione === next ){
            if( activeImg.hasClass('last') === true ){
                $('.images img.first').addClass('active'); 
                $('.nav i.first').addClass('active'); 
            } else {
                activeImg.next('img').addClass('active');
                activeCircle.next('i').addClass('active');
            }
        }

        //DIREZIONE PREV
        if ( direzione === prev ){
            if( activeImg.hasClass('first') === true ){
                $('.images img.last').addClass('active'); 
                $('.nav i.last').addClass('active'); 
            } else {
                activeImg.prev('img').addClass('active');
                activeCircle.prev('i').addClass('active');
            }
        }
    }

});//--- end document