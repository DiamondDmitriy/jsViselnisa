var ruAlphavit = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
var enAlphavit = "abcdefghijklmnopqrstuvwxyz"
var words = [
    "капуста",
    "огурец",
    "чаща",
    "зелень",
    "огонь",
    "машина"
];

var word = words[Math.floor(Math.random()*words.length)];
var wordLenght = word.length;
var wordEmpty = [];
for(i=0; i<word.length; i++){
    wordEmpty[i] ="_";

}


// function for chek carected letter
function mistake(alpht){
    let coint = 0;

    for (let i = 0; i < alpht.length; i++) {
        if(letter!==alpht[i]){
            coint++;
            console.log("non");
            if(coint===alpht.length){
                return true;
            }
        }else if(letter===alpht[i]){
            console.log("ok");
            return false;
        }
        
    }
}
// /////////////////////////////////// //


// open letters in our word
function openLetter(letter,word,count){
    

    for(i=0;i<word.length;i++){
        if(letter==word[i]){
            if(wordEmpty[i]==="_"){
                
            wordEmpty[i]=letter;
            count--;
            }
        }else{

        }

    }
    return count;

}

// ////////////////////// //


while(wordLenght>0){


    
    alert(wordEmpty.join(" "));



    var letter = prompt("enter letter");



    if(letter.length !== 1){
        alert("please, enter along latter");
    }else if(mistake(ruAlphavit) ){
        alert("please, enter letter it language");
    }
    else{
        wordLenght = openLetter(letter,word,wordLenght);
    }


    if(wordLenght===0){
        confirm("u win! do u    want repeat?");
    }
}
 