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
const hiragana_dict = [
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
/* var katakana_menu = document.getElementById("katakana_menu");
var katakana_menu = document.getElementById("katakana_menu"); */

//variables
var testLength = 0;
var questions = null;
var kanaDiv = null;
var kanaTested = "";

//data
var testStats = {
    serie5 : [],
    serie10 : [],
    serie20 : [],
};
var correctAnswer = 0;

//actions
function setMenu(){
    gamescreen.innerHTML = "";
    gamescreen.className = "gamescreen";
    let gameinput = createNode("div");
    gameinput.id = "gameinput";
    let list = createNode("ul");
    list.id = "kana_list";
    list.className = "menu_list";
    let hiragana = createNode("li");
    hiragana.id = "hiragana_menu";
    let katakana = createNode("li");
    katakana.id = "katakana_menu";
    hiragana.innerHTML = "Hiragana";
    hiragana.className = "menu";
    katakana.innerHTML = "Katakana";
    katakana.className = "menu";
    hiragana.onclick = displayTestLengthMenu;
    katakana.onclick = displayTestLengthMenu;
    append(list,hiragana);
    append(list,katakana);
    append(gameinput,list);
    append(gamescreen,gameinput);
}

function displayTestLengthMenu(){
    if (this.id === "hiragana_menu"){kanaTested = "hiragana"}
    if (this.id === "katakana_menu"){kanaTested = "katakana"}
    console.log("click");
    gamescreen.innerHTML = "";
    let gameinput = createNode("div");
    gameinput.id = "gameinput";
    let list = createNode("ul");
    list.className = "menu_list";
    let fiveKana = createNode("li");
    fiveKana.id = 5;
    fiveKana.className = "menu";
    let tenKana = createNode("li");
    tenKana.id = 10;
    tenKana.className = "menu";
    let twentyKana = createNode("li");
    twentyKana.id = 20;
    twentyKana.className = "menu";
    fiveKana.innerHTML = "5 Kana";
    tenKana.innerHTML = "10 Kana";
    twentyKana.innerHTML = "20 Kana";
    fiveKana.onclick = setTestLength;
    tenKana.onclick = setTestLength;
    twentyKana.onclick = setTestLength;
    append(list,fiveKana);
    append(list,tenKana);
    append(list,twentyKana);
    append(gameinput,list);
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
    questions = [];
    if (kanaTested === "hiragana"){
        tempList = JSON.parse(JSON.stringify(hiragana_dict));
        shuffle(tempList);
        console.log(tempList);
        for (let index = 0; index < testLength; index++) {
            questions.push(tempList.pop());
        }
    }
    if (kanaTested === "katakana"){
        alert("Cet option n'est pas encore disponible");
        reset();
        setMenu();
    }
    console.log(questions);
    //display element
    let gamequestion = createNode("div");
    gamequestion.id = "gamequestion";
    kanaDiv = createNode("p");
    kanaDiv.id="kana";
    append(gamequestion,kanaDiv);
    let gameForm = createNode("div");
    gameForm.id = "gameform";
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
    append(gameForm,validationForm);
    append(gamescreen,gamequestion);
    append(gamescreen,gameForm);
    nextQuestion();
}

function nextQuestion(){
    gamescreen.className = "gamescreen quiz";
    try {
        kanaTested = questions.pop();
        kanaDiv.innerHTML = kanaTested.value;
    } catch (error) {
        testEnd();
    }
}

async function validAnswer(e){
    e.preventDefault();
    console.log("Validation");
    let vForm = document.getElementById("validationForm");
    let answer = document.getElementById("answer").value;
    console.log(answer);
    if (answer === kanaTested.key){
        console.log("CORRECT");
        correctAnswer++;
        gamescreen.className = "gamescreen quiz_correct";
        await new Promise(r => setTimeout(r, 1000));
    }
    else{
        console.log("FALSE");
        let romaji = createNode("h3");
        gamescreen.className = "gamescreen quiz_false";
        romaji.innerHTML = kanaTested.key;
        append(kanaDiv,romaji);
        await new Promise(r => setTimeout(r, 2000));
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

function testEnd(){
    console.log("test complete");
    console.log("correct answer :"+correctAnswer);
    if (testLength == 5) {
        testStats.serie5.push({date:new Date(), score: correctAnswer});
    }
    console.log(testStats);
    gamescreen.innerHTML = "";
    gamescreen.className = "gamescreen score";
    let scoreScreen = createNode("div");
    scoreScreen.id = "scoreScreen";
    let score = createNode("h2");
    score.innerHTML = "Ton score est de : "+correctAnswer+" bonne(s) réponse(s) !";
    let back = createNode("button");
    back.innerHTML = "retourner au menu";
    back.onclick = setMenu;
    reset();
    append(scoreScreen,score);
    append(scoreScreen,back);
    append(gamescreen,scoreScreen);
}

function reset(){
    console.log("RESET");
    correctAnswer = 0;
    console.log(hiragana_dict);
}

/* On load  */

window.onload = setMenu;