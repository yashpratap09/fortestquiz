import React from "react";
import { useState } from "react";
import "./quiz.css"

const Quiz=()=>{

    var QuestionBank = [
        {
            Question:"what is express",
            AnswerText:[
                { Answer:"Java Library" ,isCorrect:false},
                { Answer:"Javascript " ,isCorrect:false},
                { Answer:"language" ,isCorrect:false},
                { Answer:"Java script framework" ,isCorrect:true}
            ]
        },
        {
            Question:"what is css use",
            AnswerText:[
                { Answer:"language" ,isCorrect:false},
                { Answer:"Designing purpose" ,isCorrect:true},
                { Answer:"srcipt" ,isCorrect:false},
                { Answer:"markup language" ,isCorrect:false}
            ]
        },
        {
            Question:"what is javascript",
            AnswerText:[
                { Answer:"scripting language" ,isCorrect:true},
                { Answer:"markup" ,isCorrect:false},
                { Answer:"HTML" ,isCorrect:false},
                { Answer:"markup language" ,isCorrect:false}
            ]
        },
        {
            Question:"what is phyton",
            AnswerText:[
                { Answer:"java language" ,isCorrect:false},
                { Answer:"machine language" ,isCorrect:true},
                { Answer:"srcipt" ,isCorrect:false},
                { Answer:"markup language" ,isCorrect:false}
            ]
        },
        {
            Question:"what is git",
            AnswerText:[
                { Answer:"DevOps tool" ,isCorrect:true},
                { Answer:"machine language" ,isCorrect:true},
                { Answer:"srcipt" ,isCorrect:false},
                { Answer:"markup language" ,isCorrect:false}
            ]
        },{
            Question:"what is mongodb",
            AnswerText:[
                { Answer:"DevOps tool" ,isCorrect:true},
                { Answer:"DataBase" ,isCorrect:true},
                { Answer:"srcipt" ,isCorrect:false},
                { Answer:"markup language" ,isCorrect:false}
            ]
        },
        {
            Question:"9*9+6",
            AnswerText:[
                { Answer:"88" ,isCorrect:true},
                { Answer:"87" ,isCorrect:true},
                { Answer:"25" ,isCorrect:false},
                { Answer:"65" ,isCorrect:false}
            ]
        },
        {
            Question:"2+48+1*48",
            AnswerText:[
                { Answer:"55" ,isCorrect:true},
                { Answer:"98" ,isCorrect:true},
                { Answer:"100" ,isCorrect:false},
                { Answer:"93" ,isCorrect:false}
            ]
        }, {
            Question:"8/2+4",
            AnswerText:[
                { Answer:"8" ,isCorrect:true},
                { Answer:"9" ,isCorrect:false},
                { Answer:"1.6" ,isCorrect:false},
                { Answer:"3" ,isCorrect:false}
            ]
        },
        {
            Question:"1*48",
            AnswerText:[
                { Answer:"48" ,isCorrect:true},
                { Answer:"98" ,isCorrect:true},
                { Answer:"10" ,isCorrect:false},
                { Answer:"84" ,isCorrect:false}
            ]
        }
    ]

const [currentQuestion,setCurrentquestion] = useState(0);
const[score,setScore] = useState(0);
const[showScore,setShowScore] = useState(false)

const handleAnswerResponse = (isCorrect)=>
{
    if(isCorrect){
        setScore(score+1)
    }

    const nextQuestion = currentQuestion+1;
    if(nextQuestion<QuestionBank.length){
        setCurrentquestion(nextQuestion)
    }
    else{
        setShowScore(true)
    }
}

const resetQuiz = () =>
{
    setShowScore(false)
    setScore(0)
    setCurrentquestion(0)
    window.location.href = "/"
}


    return(


        <div className="app">
       {showScore?(
        <div className="score-1">
            You have scored {score} out of {QuestionBank.length}
            
            
            <button className="score" type="submit" onClick={resetQuiz}>  Back to Home Page </button>
        </div>
       )
       :(
        <>
        <div  className="question-section">
            <div className="question-count">
          <span>{currentQuestion+1}</span>/{QuestionBank.length}
            </div>
            <div className="question-text">
            {QuestionBank[currentQuestion].Question}
            </div>
        </div>

        <div className="answer-section" >
         {QuestionBank[currentQuestion].AnswerText.map((answer=>
         (
            <button onClick={()=>handleAnswerResponse(answer.isCorrect)}>{answer.Answer}</button>
         )
            ))}
        </div>


        </>
       )
       }
        </div>
    )
}

export default Quiz