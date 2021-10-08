const quizData = [
    {
        question : "Who am I ?",
        a: "Harshil Jani",
        b: "Bugs Bunny",
        c: "Christopher Columbus",
        d: "Ken Thompson",
        correct: "b"    
    },
    {
        question : "Which is my favorite Programming Language ?",
        a: "Go",
        b: "C++",
        c: "Python",
        d: "Kotlin",
        correct: "a"    
    },
    {
        question : "Am I in a relationship?",
        a: "Single",
        b: "Mingle",
        c: "Complicated",
        d: "Not to say !",
        correct: "d"    
    },
    {
        question : "Which is my favorite drama catagory",
        a: "Turkish",
        b: "Korean",
        c: "Indian",
        d: "Pakistani",
        correct: "a"    
    },
    {
        question : "Which among the following is my dream ?",
        a: "Climb Mt. Everest",
        b: "Launch my own Unix Operating System",
        c: "Peacefully Live in a Cold Country",
        d: "Meet Shah-Rukh-Khan",
        correct: "c"    
    },
    {
        question : "With Whom I share my Birthday?",
        a: "Ken Thompson",
        b: "Bill Gates",
        c: "Linus Torvalds",
        d: "Ben Goosling",
        correct: "b"    
    },
    {
        question : "Where do I study?",
        a: "Engineering College",
        b: "Medical College",
        c: "Commerece College",
        d: "Droped out child",
        correct: "a"    
    },
]

let currentQuestion = 0;
let score = 0;
const question = document.getElementById("question");
const answerEls = document.querySelectorAll(".options")
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const submitBtn = document.getElementById("submit");
const result = document.getElementById("result");
const main = document.getElementById("quiz");
const verdict = document.getElementById("verdict");

function loadQuestion(){
    deselectOption();
    let currentObject = quizData[currentQuestion];
    question.innerText = currentObject.question;
    a.innerText = currentObject.a;
    b.innerText = currentObject.b;
    c.innerText = currentObject.c;
    d.innerText = currentObject.d;
}

function getSelected(){
    let answer  = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id; 
        }
    });
    console.log("Jo maine select kara "+answer.substr(0,1));
    return answer.substr(0,1);
}

function deselectOption() {
    verdict.innerHTML = "";
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
loadQuestion();
submitBtn.addEventListener("click", ()=>{
    if(getSelected() === quizData[currentQuestion].correct){
        console.log(quizData[currentQuestion].correct + " Sahi jawab");
        score++;
        console.log("Filhaal ka Score "+ score);
        verdict.innerText = "✅";
    }else{
        verdict.innerText = "❌";
    }
    if(currentQuestion < quizData.length-1){
        currentQuestion++;
        setTimeout(()=>{
            loadQuestion();
        },1000)
    }
    else{
        setTimeout(()=>{
            deselectOption();
            verdict.style.display = "none";
        },1000)   
            result.style.display = "flex";
            result.innerText = "You have Scored " + score + "/ 7 !!";
            result.style.paddingLeft = "100px";
            main.style.display = "none";
            submitBtn.style.display = "none";
            document.getElementById("replay").style.display = "flex";
            document.getElementById("replay").addEventListener("click",()=>{
                window.location.reload(); 
            })
     }      
})