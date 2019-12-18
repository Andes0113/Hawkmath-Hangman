/* Project 4 - OOP Game App
 * Phrase.js */
class Phrase{
    constructor(phrase){
        this.phrase = phrase.toLowerCase();
    }
    /*
     * Adds phrase to the screen, empty boxes. Also adds hawkmath images
     * @param none
     * @returns none
    */
    addPhraseToDisplay(){
        $("#phrase ul").html('<img src = "images/Hawkmath.png" width = 50 height = 50></img>');
        for(let i = 0; i < this.phrase.length; i++){
            if(this.phrase.charAt(i) === " "){
                $("#phrase ul").html($("#phrase ul").html() + `<li class = "space"> </li>`);
            }else{
                $("#phrase ul").html($("#phrase ul").html() + `<li class = "hide letter ${this.phrase.charAt(i)}">${this.phrase.charAt(i)}</li>`);
            }
        }
        $("#phrase ul").html($("#phrase ul").html() + '<img src = "images/Hawkmath.png" width = 50 height = 50></img>');
    }
    /*
     * Returns if the phrase has a letter
     * @param {char}
     * @returns {boolean}
    */
    checkLetter(c){
        return this.phrase.indexOf(c) != -1;
    }
    /*
     * Checks if a letter is in the string, then reveals letter if it is
     * @param {char}
     * @returns none
    */
    showMatchedLetter(c){
        if(this.checkLetter(c)){
            const keys = document.getElementsByClassName(`hide letter ${c}`)
            for(let i = keys.length -1; i >=0; i--){
                keys[i].className = "show";
            }
        }
    }
}