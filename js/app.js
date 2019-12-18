 /* Project 4 - OOP Game App
 * app.js */
let game = new Game([new Phrase("subscribe to hawkmath"), new Phrase("Zeroes at the end of a factorial"), new Phrase("more number theory"), new Phrase("a trick integral"), new Phrase("a prime problem"), new Phrase("how many numbers can be made"), new Phrase("a challenging geometry problem")]);
$("#btn__reset").on("click", function(){
    reset();
    game.startGame();
});

$(".key").on("click", function(){
    game.handleInteraction($(this));
});

/*
 * Takes a key and handles interaction
 * @param {char}
 * @returns void
*/
$(document).on("keyup", (e)=>{
    let keys = $(".key");
    if(e.keyCode >= 65 && e.keyCode <= 90){
        for(let i = 0; i < keys.length; i++){
            if(keys.eq(i).html() == String.fromCharCode(e.keyCode).toLowerCase()){
                game.handleInteraction(keys.eq(i));
            }
        }
    }
});

/*
 * resets the game board
 * @param none
 * @returns none
*/
function reset(){
    $("#phrase ul").html('');
    let li = $("#qwerty button");
    console.log(li.length);
    for(let i = 0 ; i < li.length; i++){
        li.eq(i).prop("class", "key");
        li.eq(i).prop("disabled", false);
    }
    let imgs = $("img");
    for(let i = 0; i < imgs.length; i++){
        imgs.eq(i).attr("src", "images/liveHeart.png");
    }
    game.missed = 0;
    game.startGame();
}