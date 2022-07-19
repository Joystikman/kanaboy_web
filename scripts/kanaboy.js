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
  //HIRAGANA
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
    {key:"rya",value:"りゃ"},{key:"ryu",value:"りゅ"},{key:"ryo",value:"りょ"},

    {key:"gya",value:"ギや"},{key:"gyu",value:"ギゆ"},{key:"gyo",value:"ギよ"},
    {key:"ja",value:"じや"},{key:"ju",value:"じゆ"},{key:"jo",value:"じよ"},
    {key:"bya",value:"びや"},{key:"byu",value:"びゆ"},{key:"byo",value:"びよ"},
    {key:"pya",value:"ぴや"},{key:"pyu",value:"ぴゆ"},{key:"pyo",value:"ぴよ"},
];
  //KATAKANA
  const katakana_dict = [
    {key:"a",value:"ア"},{key:"i",value:"イ"},{key:"u",value:"ウ"},{key:"e",value:"エ"},{key:"o",value:"オ"},
    {key:"ka",value:"カ"},{key:"ki",value:"キ"},{key:"ku",value:"ク"},{key:"ke",value:"ケ"},{key:"ko",value:"コ"},
    {key:"sa",value:"サ"},{key:"shi",value:"シ"},{key:"su",value:"ス"},{key:"se",value:"セ"},{key:"so",value:"ソ"},
    {key:"ta",value:"タ"},{key:"chi",value:"チ"},{key:"tsu",value:"ツ"},{key:"te",value:"テ"},{key:"to",value:"ト"},
    {key:"na",value:"ナ"},{key:"ni",value:"ニ"},{key:"nu",value:"ヌ"},{key:"ne",value:"ネ"},{key:"no",value:"ノ"},
    {key:"ha",value:"ハ"},{key:"hi",value:"ヒ"},{key:"fu",value:"フ"},{key:"he",value:"ヘ"},{key:"ho",value:"ホ"},
    {key:"ma",value:"マ"},{key:"mi",value:"ミ"},{key:"mu",value:"ム"},{key:"me",value:"メ"},{key:"mo",value:"モ"},
    {key:"ya",value:"ヤ"},{key:"yu",value:"ユ"},{key:"yo",value:"ヨ"},
    {key:"ra",value:"ラ"},{key:"ri",value:"リ"},{key:"ru",value:"ル"},{key:"re",value:"レ"},{key:"ro",value:"ロ"},
    {key:"wa",value:"ワ"},{key:"o",value:"ヲ"},
    {key:"n",value:"ン"},
];
const katakana_complet_dict = [
    {key:"a",value:"ア"},{key:"i",value:"イ"},{key:"u",value:"ウ"},{key:"e",value:"エ"},{key:"o",value:"オ"},
    {key:"ka",value:"カ"},{key:"ki",value:"キ"},{key:"ku",value:"ク"},{key:"ke",value:"ケ"},{key:"ko",value:"コ"},
    {key:"sa",value:"サ"},{key:"shi",value:"シ"},{key:"su",value:"ス"},{key:"se",value:"セ"},{key:"so",value:"ソ"},
    {key:"ta",value:"タ"},{key:"chi",value:"チ"},{key:"tsu",value:"ツ"},{key:"te",value:"テ"},{key:"to",value:"ト"},
    {key:"na",value:"ナ"},{key:"ni",value:"ニ"},{key:"nu",value:"ヌ"},{key:"ne",value:"ネ"},{key:"no",value:"ノ"},
    {key:"ha",value:"ハ"},{key:"hi",value:"ヒ"},{key:"fu",value:"フ"},{key:"he",value:"ヘ"},{key:"ho",value:"ホ"},
    {key:"ma",value:"マ"},{key:"mi",value:"ミ"},{key:"mu",value:"ム"},{key:"me",value:"メ"},{key:"mo",value:"モ"},
    {key:"ya",value:"ヤ"},{key:"yu",value:"ユ"},{key:"yo",value:"ヨ"},
    {key:"ra",value:"ラ"},{key:"ri",value:"リ"},{key:"ru",value:"ル"},{key:"re",value:"レ"},{key:"ro",value:"ロ"},
    {key:"wa",value:"ワ"},{key:"o",value:"ヲ"},
    {key:"n",value:"ン"},
    {key:"ga",value:"ガ"},{key:"gi",value:"ギ"},{key:"gu",value:"グ"},{key:"ge",value:"ゲ"},{key:"go",value:"ゴ"},
    {key:"za",value:"ザ"},{key:"ji",value:"ジ"},{key:"zu",value:"ズ"},{key:"ze",value:"ゼ"},{key:"zo",value:"ゾ"},
    {key:"da",value:"ダ"},{key:"ji",value:"ヂ"},{key:"zu",value:"ヅ"},{key:"de",value:"デ"},{key:"do",value:"ド"},
    {key:"ba",value:"バ"},{key:"bi",value:"ビ"},{key:"bu",value:"ブ"},{key:"be",value:"ベ"},{key:"bo",value:"ボ"},
    {key:"pa",value:"パ"},{key:"pi",value:"ピ"},{key:"pu",value:"プ"},{key:"pe",value:"ペ"},{key:"po",value:"ポ"},
    {key:"kya",value:"キヤ"},{key:"kyu",value:"キユ"},{key:"kyo",value:"キヨ"},
    {key:"sha",value:"シヤ"},{key:"shu",value:"シユ"},{key:"sho",value:"シヨ"},
    {key:"cha",value:"チヤ"},{key:"chu",value:"チユ"},{key:"cho",value:"チヨ"},
    {key:"nya",value:"ニヤ"},{key:"nyu",value:"ニユ"},{key:"nyo",value:"ニヨ"},
    {key:"hya",value:"ヒヤ"},{key:"hyu",value:"ヒユ"},{key:"hyo",value:"ヒヨ"},
    {key:"mya",value:"ミヤ"},{key:"myu",value:"ミユ"},{key:"myo",value:"ミヨ"},
    {key:"rya",value:"リヤ"},{key:"ryu",value:"リユ"},{key:"ryo",value:"リヨ"},
    {key:"gya",value:"ギヤ"},{key:"gyu",value:"ギユ"},{key:"gyo",value:"ギヨ"},
    {key:"ja",value:"ジヤ"},{key:"ju",value:"ジユ"},{key:"jo",value:"ジヨ"},
    {key:"bya",value:"ビヤ"},{key:"byu",value:"ビユ"},{key:"byo",value:"ビヨ"},
    {key:"pya",value:"ピヤ"},{key:"pyu",value:"ピユ"},{key:"pyo",value:"ピヨ"},
];

//TEXTS
const txt = {
    main_menu : {
        hiragana46 : "HIRAGANA (46 Kanas)",
        hiragana104 : "HIRAGANA (104 Kanas)",
        katakana46 : "KATAKANA (46 Kanas)",
        katakana104 : "KATAKANA (104 Kanas)",
        memory_mode : "enable memory mode",
        memory_mode_tooltip : "If enable, before each quizz, the kana that will be present in the serie are displayed to let you memorize its"
    },
    quizz_length : {
        a : {number : 5, value : "5 KANAS"},
        b : {number : 10, value : "10 KANAS"},
        c : {number : 20, value : "20 KANAS"},
        memory_mode_status : {
            true : "Memory mode enable",
            false : "Memory mode disable"
        }
    },
    form : {
        valid_value : "valider",
        valid_memory : "kana suivant"
    },
    test_end : {
        score_value : "Bonne(s) réponse(s) : ",
        home : "Retourner au menu"
    }
}

//init HTML element
var gamescreen = document.getElementById("gamescreen");

//variables
var testLength = 0;
var questions = null;
var kanaDiv = null;
var kanaTested = "";
var correctAnswer = 0;
var enableMemoryMode = false;
var memoryKanaList = null;

//data
var testStats = {
    serie5 : [],
    serie10 : [],
    serie20 : [],
};

//actions
  //display menu
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
    hiragana.innerHTML = txt.main_menu.hiragana46;
    hiragana.onclick = displayTestLengthMenu;
    /* menu hiragana (complet) */
    let hiragana_complet = createNode("li");
    hiragana_complet.id = "hiragana_complet_menu";
    hiragana_complet.className = "menu";
    hiragana_complet.innerHTML = txt.main_menu.hiragana104;
    hiragana_complet.onclick = displayTestLengthMenu;
    /* menu katakana (46) */
    let katakana = createNode("li");
    katakana.id = "katakana_menu";
    katakana.className = "menu";
    katakana.innerHTML = txt.main_menu.katakana46;
    katakana.onclick = displayTestLengthMenu;
    /* menu katakana (complet) */
    let katakana_complet = createNode("li");
    katakana_complet.id = "katakana_complet_menu";
    katakana_complet.className = "menu";
    katakana_complet.innerHTML = txt.main_menu.katakana104;
    katakana_complet.onclick = displayTestLengthMenu;
    /* memory mode */
    let memory_form = createNode("div");
    memory_form.id = "memory_form";
    memory_form.className = "memory_form";
    let memory_checkbox = createNode("input");
    memory_checkbox.id = "memory_checkbox";
    memory_checkbox.type = "checkbox";
    memory_checkbox.className = "";
    memory_checkbox.onclick = setMemoryMode;
    let memory_label = createNode("label");
    memory_label.id = "memory_label";
    memory_label.className = "";
    memory_label.for = "memory_checkbox"
    memory_label.innerHTML = txt.main_menu.memory_mode;
    let memory_tooltip = createNode("span");
    memory_tooltip.id = "memory_tooltip";
    memory_tooltip.className = "";
    memory_tooltip.innerHTML = "ℹ️";
    memory_tooltip.onclick = displayTooltip;
    /* add to menu list */
    append(memory_form,memory_checkbox);
    append(memory_form,memory_label);
    append(memory_form,memory_tooltip);
    append(list,hiragana);
    append(list,hiragana_complet);
    append(list,katakana);
    append(list,katakana_complet);
    append(gameinput,list);
    append(gamescreen,gameinput);
    append(gamescreen,memory_form);
}

  //display number of questions to be tested on
function displayTestLengthMenu(){
    if (this.id === "hiragana_menu"){kanaTested = "hiragana"}
    if (this.id === "hiragana_complet_menu"){kanaTested = "hiragana_complet"}
    if (this.id === "katakana_menu"){kanaTested = "katakana"}
    if (this.id === "katakana_complet_menu"){kanaTested = "katakana_complet"}
    console.log("click");
    gamescreen.innerHTML = "";
    let gameinput = createNode("div");
    gameinput.id = "gameinput";
    let list = createNode("ul");
    list.className = "menu_list";
    //choice A
    let choiceA = createNode("li");
    choiceA.id = txt.quizz_length.a.number;
    choiceA.className = "menu";
    choiceA.innerHTML = txt.quizz_length.a.value;
    choiceA.onclick = setTestLength;
    //choice B
    let choiceB = createNode("li");
    choiceB.id = txt.quizz_length.b.number;
    choiceB.className = "menu";
    choiceB.innerHTML = txt.quizz_length.b.value;
    choiceB.onclick = setTestLength;
    //choice C
    let choiceC = createNode("li");
    choiceC.id = txt.quizz_length.c.number;
    choiceC.className = "menu";
    choiceC.innerHTML = txt.quizz_length.c.value;
    choiceC.onclick = setTestLength;
    //memory mode status
    let memory_mode_status = createNode("p");
    memory_mode_status.id = "memory_mode_status";
    memory_mode_status.className = "memory_status";
    memory_mode_status.innerHTML = enableMemoryMode ? txt.quizz_length.memory_mode_status.true : txt.quizz_length.memory_mode_status.false;
    /* add to menu list */
    append(list,choiceA);
    append(list,choiceB);
    append(list,choiceC);
    append(list,memory_mode_status);
    append(gameinput,list);
    append(gamescreen,gameinput);
}

  //save the number of question
function setTestLength(){
    testLength = this.id
    console.log("TEST LENGTH :"+testLength);
    setTestQuestions();
}

function setTestQuestions(){
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
        tempList = JSON.parse(JSON.stringify(katakana_dict));
        shuffle(tempList);
        console.log(tempList);
        for (let index = 0; index < testLength; index++) {
            questions.push(tempList.pop());
        }
    }
    if (kanaTested === "katakana_complet"){
        tempList = JSON.parse(JSON.stringify(katakana_complet_dict));
        shuffle(tempList);
        console.log(tempList);
        for (let index = 0; index < testLength; index++) {
            questions.push(tempList.pop());
        }
    }
    if(enableMemoryMode){
        memoryKanaList = [];
        memoryKanaList = JSON.parse(JSON.stringify(questions));
        shuffle(memoryKanaList);
        initMemory();
    }
    else{
        enableMemoryMode = false;
        initQuizz();
    }
}

  //start the quizz
function initQuizz(){
    console.log(kanaTested);
    console.log(questions);
    gamescreen.innerHTML = "";
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
    submitForm.value = txt.form.valid_value;
    append(validationForm,inputForm);
    append(validationForm,submitForm);
    append(gameForm,validationForm);
    append(gamescreen,gamequestion);
    append(gamescreen,gameForm);
    nextQuestion();
}

  //display the following question
function nextQuestion(){
    gamescreen.className = "gamescreen quiz";
    try {
        kanaTested = questions.pop();
        kanaDiv.innerHTML = kanaTested.value;
    } catch (error) {
        testEnd();
    }
}

  //check the answer entered
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
    document.getElementById("answer").value = "";
    nextQuestion()
}

  //end the test
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
    score.innerHTML = txt.test_end.score_value+correctAnswer;
    let back = createNode("button");
    back.innerHTML = txt.test_end.home;
    back.onclick = setMenu;
    reset();
    append(scoreScreen,score);
    append(scoreScreen,back);
    append(gamescreen,scoreScreen);
}

  //reset variables
function reset(){
    console.log("RESET");
    testLength = 0;
    questions = null;
    kanaDiv = null;
    kanaTested = "";
    correctAnswer = 0;
    enableMemoryMode = false;
}

// memory function
function setMemoryMode(){
    enableMemoryMode = !enableMemoryMode;
}

function displayTooltip(){
    alert(txt.main_menu.memory_mode_tooltip);
}

function initMemory(){
    console.log(kanaTested + " - memory mode");
    console.log(questions);
    gamescreen.innerHTML = "";
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
    validationForm.onsubmit = validMemory;
    let submitForm = createNode("input");
    submitForm.type = "submit";
    submitForm.value = txt.form.valid_memory;
    append(validationForm,submitForm);
    append(gameForm,validationForm);
    append(gamescreen,gamequestion);
    append(gamescreen,gameForm);
    nextMemory();
}

//display the following memory
function nextMemory(){
    gamescreen.className = "gamescreen quiz";
    try {
        kanaMemorized = memoryKanaList.pop();
        kanaDiv.innerHTML = kanaMemorized.value;
        let romaji = createNode("h3");
        romaji.innerHTML = kanaMemorized.key;
        append(kanaDiv,romaji);
    } catch (error) {
        console.log("révisions terminées");
        initQuizz();
    }
}

  //check the answer entered
  async function validMemory(e){
    e.preventDefault();
    console.log("validMemory");
    nextMemory()
}

/* On load  */

window.onload = setMenu;