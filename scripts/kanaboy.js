/*Toolkit*/
function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
}
function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
}
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

//dict
var hiragana = [
    {key:"a",value:"あ"},
    {key:"i",value:"い"},
    {key:"u",value:"う"},
    {key:"e",value:"え"},
    {key:"o",value:"お"},
    {key:"ka",value:"か"},
    {key:"ki",value:"き"},
    {key:"ku",value:"く"},
    {key:"ke",value:"け"},
    {key:"ko",value:"こ"},
];

//init HTML element
var gamescreen = document.getElementById("gamescreen");
var gameinput = document.getElementById("gameinput");
var katakana_menu = document.getElementById("katakana_menu");
var katakana_menu = document.getElementById("katakana_menu");

//variables
var testLength = 0;
var questions = null;
var kanaDiv = null;
var kanaTested = "";

//data
var testStats = [];
var correctAnswer = 0;

//actions
hiragana_menu.onclick = displayTestLengthMenu;
katakana_menu.onclick = displayTestLengthMenu;

function displayTestLengthMenu(){
    if (this.id === "hiragana_menu"){kanaTested = "hiragana"}
    if (this.id === "katakana_menu"){kanaTested = "katakana"}
    console.log("click");
    gamescreen.innerHTML = "";
    let gameinput = createNode("div");
    gameinput.id = "gameinput";
    let fiveKana = createNode("div");
    fiveKana.id = 5;
    let tenKana = createNode("div");
    tenKana.id = 10;
    let twentyKana = createNode("div");
    twentyKana.id = 20;
    fiveKana.innerHTML = "● 5 Kana";
    tenKana.innerHTML = "● 10 Kana";
    twentyKana.innerHTML = "● 20 Kana";
    fiveKana.onclick = setTestLength;
    tenKana.onclick = setTestLength;
    twentyKana.onclick = setTestLength;
    append(gameinput,fiveKana);
    append(gameinput,tenKana);
    append(gameinput,twentyKana);
    append(gamescreen,gameinput);
}

function setTestLength(){
    testLength = this.id
    console.log("TEST LENGTH :"+testLength);
    initQuizz();
}

function initQuizz(){
    console.log(kanaTested);
    gamescreen.innerHTML = "";
    gamescreen.className = "quiz"
    questions = [];
    if (kanaTested === "hiragana"){
        tempList = hiragana;
        shuffle(tempList);
        console.log(tempList);
        for (let index = 0; index < testLength; index++) {
            questions.push(tempList.pop());
        }
    }
    if (kanaTested === "katakana"){}
    console.log(questions);
    //display element
    let gamequestion = createNode("div");
    gamequestion.id = "gamequestion";
    kanaDiv = createNode("p");
    kanaDiv.id="kana";
    append(gamequestion,kanaDiv);
    let gameinput = createNode("div");
    gameinput.id = "gameinput";
    let validationForm = createNode("form");
    validationForm.id = "validationForm";
    validationForm.onsubmit = validAnswer;
    let inputForm = createNode("input");
    inputForm.type = "text";
    inputForm.id = "answer";
    let submitForm = createNode("input");
    submitForm.type = "submit";
    /* submitForm.onclick = validAnswer */;
    submitForm.value = "Valider";
    append(validationForm,inputForm);
    append(validationForm,submitForm);
    append(gameinput,validationForm);
    append(gamescreen,gamequestion);
    append(gamescreen,gameinput);
    nextQuestion();
}

function nextQuestion(){
    try {
        kanaTested = questions.pop();
        kanaDiv.innerHTML = kanaTested.value;
    } catch (error) {
        console.log("test complete");
        console.log("correct answer :"+correctAnswer);
    }
}

function validAnswer(e){
    e.preventDefault();
    console.log("Validation");
    let vForm = document.getElementById("validationForm");
    let answer = document.getElementById("answer").value;
    console.log(answer);
    if (answer === kanaTested.key){
        console.log("CORRECT");
        correctAnswer++;
    }
    else{
        console.log("FALSE");
    }
    //reset form
    vForm.innerHTML = "";
    let inputForm = createNode("input");
    inputForm.type = "text";
    inputForm.id = "answer";
    let submitForm = createNode("input");
    submitForm.type = "submit";
    /* submitForm.onclick = validAnswer */;
    submitForm.value = "Valider";
    append(vForm,inputForm);
    append(vForm,submitForm);
    nextQuestion()
}