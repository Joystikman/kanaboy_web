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
    {key:"a",value:"あ"},{key:"i",value:"い"},{key:"u",value:"う"},{key:"e",value:"え"},{key:"o",value:"お"},
    {key:"ka",value:"か"},{key:"ki",value:"き"},{key:"ku",value:"く"},{key:"ke",value:"け"},{key:"ko",value:"こ"},
    {key:"sa",value:"さ"},{key:"shi",value:"し"},{key:"su",value:"す"},{key:"se",value:"せ"},{key:"so",value:"そ"},
    {key:"ta",value:"た"},{key:"chi",value:"ち"},{key:"tsu",value:"つ"},{key:"te",value:"て"},{key:"to",value:"と"},
    {key:"na",value:"な"},{key:"ni",value:"に"},{key:"nu",value:"ぬ"},{key:"ne",value:"ね"},{key:"no",value:"の"},
    {key:"ha",value:"は"},{key:"hi",value:"ひ"},{key:"fu",value:"ふ"},{key:"he",value:"へ"},{key:"ho",value:"ほ"},
    {key:"ma",value:"ま"},{key:"mi",value:"み"},{key:"mu",value:"む"},{key:"me",value:"め"},{key:"mo",value:"も"},
    {key:"ya",value:"や"},{key:"yu",value:"ゆ"},{key:"yo",value:"よ"},
    {key:"ra",value:"ら"},{key:"ri",value:"り"},{key:"ru",value:"る"},{key:"re",value:"れ"},{key:"ro",value:"ろ"},
    {key:"wa",value:"わ"},{key:"o",value:"を"},
    {key:"n",value:"ん"},
];
const hiragana_complet_dict = [
    {key:"a",value:"あ"},{key:"i",value:"い"},{key:"u",value:"う"},{key:"e",value:"え"},{key:"o",value:"お"},
    {key:"ka",value:"か"},{key:"ki",value:"き"},{key:"ku",value:"く"},{key:"ke",value:"け"},{key:"ko",value:"こ"},
    {key:"sa",value:"さ"},{key:"shi",value:"し"},{key:"su",value:"す"},{key:"se",value:"せ"},{key:"so",value:"そ"},
    {key:"ta",value:"た"},{key:"chi",value:"ち"},{key:"tsu",value:"つ"},{key:"te",value:"て"},{key:"to",value:"と"},
    {key:"na",value:"な"},{key:"ni",value:"に"},{key:"nu",value:"ぬ"},{key:"ne",value:"ね"},{key:"no",value:"の"},
    {key:"ha",value:"は"},{key:"hi",value:"ひ"},{key:"fu",value:"ふ"},{key:"he",value:"へ"},{key:"ho",value:"ほ"},
    {key:"ma",value:"ま"},{key:"mi",value:"み"},{key:"mu",value:"む"},{key:"me",value:"め"},{key:"mo",value:"も"},
    {key:"ya",value:"や"},{key:"yu",value:"ゆ"},{key:"yo",value:"よ"},
    {key:"ra",value:"ら"},{key:"ri",value:"り"},{key:"ru",value:"る"},{key:"re",value:"れ"},{key:"ro",value:"ろ"},
    {key:"wa",value:"わ"},{key:"o",value:"を"},
    {key:"n",value:"ん"},
    {key:"ga",value:"が"},{key:"gi",value:"ぎ"},{key:"gu",value:"ぐ"},{key:"ge",value:"げ"},{key:"go",value:"ご"},
    {key:"za",value:"ざ"},{key:"ji",value:"じ"},{key:"zu",value:"ず"},{key:"ze",value:"ぜ"},{key:"zo",value:"ぞ"},
    {key:"da",value:"だ"},{key:"ji",value:"ぢ"},{key:"zu",value:"づ"},{key:"de",value:"で"},{key:"do",value:"ど"},
    {key:"ba",value:"ば"},{key:"bi",value:"び"},{key:"bu",value:"ぶ"},{key:"be",value:"べ"},{key:"bo",value:"ぼ"},
    {key:"pa",value:"ぱ"},{key:"pi",value:"ぴ"},{key:"pu",value:"ぷ"},{key:"pe",value:"ぺ"},{key:"po",value:"ぽ"},
    {key:"kya",value:"きゃ"},{key:"kyu",value:"きゅ"},{key:"kyo",value:"きょ"},
    {key:"sha",value:"しゃ"},{key:"shu",value:"しゅ"},{key:"sho",value:"しょ"},
    {key:"cha",value:"ちゃ"},{key:"chu",value:"ちゅ"},{key:"cho",value:"ちょ"},
    {key:"nya",value:"にゃ"},{key:"nyu",value:"にゅ"},{key:"nyo",value:"にょ"},
    {key:"hya",value:"ひゃ"},{key:"hyu",value:"ひゅ"},{key:"hyo",value:"ひょ"},
    {key:"mya",value:"みゃ"},{key:"myu",value:"みゅ"},{key:"myo",value:"みょ"},
    {key:"rya",value:"りあ"},{key:"ryu",value:"りゅ"},{key:"ryo",value:"りょ"},
];

//init HTML element
var gamescreen = document.getElementById("gamescreen");

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
    /* menu hiragana (46) */
    let hiragana = createNode("li");
    hiragana.id = "hiragana_menu";
    hiragana.className = "menu";
    hiragana.innerHTML = "Hiragana (46 kanas)";
    hiragana.onclick = displayTestLengthMenu;
    /* menu hiragana (complet) */
    let hiragana_complet = createNode("li");
    hiragana_complet.id = "hiragana_complet_menu";
    hiragana_complet.className = "menu";
    hiragana_complet.innerHTML = "Hiragana (104 kanas)";
    hiragana_complet.onclick = displayTestLengthMenu;
    /* menu katakana (46) */
    let katakana = createNode("li");
    katakana.id = "katakana_menu";
    katakana.className = "menu";
    katakana.innerHTML = "Katakana";
    katakana.onclick = displayTestLengthMenu;
    /* add to menu list */
    append(list,hiragana);
    append(list,hiragana_complet);
    append(list,katakana);
    append(gameinput,list);
    append(gamescreen,gameinput);
}

function displayTestLengthMenu(){
    if (this.id === "hiragana_menu"){kanaTested = "hiragana"}
    if (this.id === "hiragana_complet_menu"){kanaTested = "hiragana_complet"}
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
    if (kanaTested === "hiragana_complet"){
        tempList = JSON.parse(JSON.stringify(hiragana_complet_dict));
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
    let answer = document.getElementById("answer").value.toLowerCase();
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
    if (testLength == 10) {
        testStats.serie10.push({date:new Date(), score: correctAnswer});
    }
    if (testLength == 20) {
        testStats.serie20.push({date:new Date(), score: correctAnswer});
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