/* Project 4 - OOP Game App
 * Game.js */
class Game{
    constructor(phrases){
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }
    /*
     * Sets active phrase and adds it to display. Begins game
     * @param none
     * @returns none
    */
    startGame(){
        $("#overlay").hide();
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    /*
     * Gets random phrase from array of phrases
     * @param none
     * @returns {string}
    */
    getRandomPhrase(){
        return this.phrases[Math.floor(Math.random() * this.phrases.length)];
    }
    /*
     * Checks if correct key or not and if game is over
     * @param {html element}
     * @returns none
    */
    handleInteraction(key){
        key.prop("disabled", true);
        if(this.activePhrase.checkLetter(key.html())){
            key.prop("class", "chosen");
            this.activePhrase.showMatchedLetter(key.html());
            if(this.checkForWin()){
                this.gameOver();
            }
        }else{
            key.prop("class", "wrong");
            this.removeLife()
        }
    }
    /*
     * Removes a life and changes image. Checks if game is over
     * @param none
     * @returns none
    */
    removeLife(){
        let imgs = $("img");
        let win = true;
        for(let i = 0; i < imgs.length; i++){
            if(imgs.eq(i).attr("src") == "images/liveHeart.png"){
                imgs.eq(i).attr("src", "images/lostHeart.png");
                i = imgs.length;
            }
        }
        this.missed++;
        if(this.missed == 6){
            this.gameOver();
        }
    }
    /*
     * Checks if game is won
     * @param none
     * @returns {boolean}
    */
    checkForWin(){
        return $(".hide").length == 0;
    }
    /*
     * Checks if game is won or not, updates html accordingly
     * @param none
     * @returns none
    */
    gameOver(){
        $("#overlay").show();
        if(this.checkForWin()){
            $("#game-over-message").html('You win! Nice Hawkmath knowledge!');
            $('.start').prop('class', 'win');
        }else{
            $("#game-over-message").html("You lose. Brush up on Hawkmath's youtube channel.");
            $(".start").prop("class", "lose");
        }
    }
}