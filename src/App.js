import './App.css';
import Heading from './components/Button/Heading/Heading.jsx';
import Button from './components/Button/Button.jsx'
import { useState } from "react";
// import OptionButton from './components/Button/OptionButton/OptionButton';

// Quize app

const App = () => {
  const questionData = [{
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Tag Markup Language",
      "Hyper Text Markup Language",
      "Hyperlinks Text Mark Language",
      "Hyperlinking Text Marking Language"
    ],
  },
  {
    question: "What does SQL stands for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    question: "What year was JavaScript launched?",
    answer: "1995",
    options: ["1996", "1995", "None of the Above"],
  },
  {
    question: "What symbol indicates a tag?",
    answer: "Angle brackets e.g.",
    options: [
      "Angle brackets e.g.",
      "Curved brackets e.g. {,}",
      "Commas e.g. ','",
      "Exclamation marks e.g. !",
    ],
  },
  {
    question: "A CSS file can be applied to only one HTML file.",
    answer: "False",
    options: [
      "True",
      "False",
      "None of the Above",
    ],
  },
  {
    question: "What is the correct tag for a line break?",
    answer: "<br/>",
    options: [
      "<stop/>",
      "<line/>",
      "<break/>",
      "<br/>",
    ],
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    options: [
      "Creative Style System",
      "Cascading Style Sheet",
      "Computing Style Sheet",
    ],
  },
  {
    question: "What is the correct format for a div?",
    answer: "Div id='example'",
    options: [
      "Div-id='example'",
      "Div+id='example'",
      "Div id='example'",
      "div id-'example'",
    ],
  },
  {
    question: "What is the correct format for aligning written content to the center of the page in CSS?",
    answer: "Text-align:center;",
    options: [
      "Text-align:center;",
      "Text:align-center;",
      "Text:align-center;",
      "Font:align-center;",
    ],
  },
  {
    question: "Where should a CSS file be referenced in a HTML file?",
    answer: "Inside the head section",
    options: [
      "After all HTML code",
      "Inside the head section",
      "Before any HTML code",
    ],
  }
  ]
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showStart, setShowStart] = useState(true);



  const skipQuest = () => {
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion(prev => prev + 1)
    } else {
      setShowScore(true)
    }
  }

  // const backQuest = () => {
  //   if (currentQuestion === 0) {
  //     setShowStart(true)
  //   } else {
  //     setCurrentQuestion(prev => prev - 1)
  //   }
  // }

  const correctAns = (correct) => {
    if (correct === questionData[currentQuestion].answer) {
      console.log("Correct Answer");
      setScore(prev => prev + 1)
      setCorrectAnswer(prev => prev + 1)
    }
    if (correct !== questionData[currentQuestion].answer) {
      console.log("Wrong Answer Correct Ans is >>>>", questionData[currentQuestion].answer);
      setWrongAnswer(prev => prev + 1)
    }
  }

  const quizeAgainBtn = () => {
    setShowScore(false)
    setShowStart(true)
    setCurrentQuestion(0)
    setCorrectAnswer(0)
    setWrongAnswer(0)
    setScore(0)
  }
  const quizestartBtn = () => {
    setShowStart(false)
  }

  return (
    <div>

      {
        showScore ? (
          <div className='score-section'>
            <div className='score-main'>
              <div>Your scored <span>{score}</span> out of <b>{questionData.length}</b></div>
              <hr />
              <div>Correct Answer : <b>{correctAnswer}</b></div>
              <hr />
              <div>wrong Answer : <span>{wrongAnswer}</span></div>
              <hr />
              <div>Total Question : <b>{questionData.length}</b></div>
              <hr />

              <Button label={"Quize Again"} onClick={quizeAgainBtn} /></div>
          </div>

        ) : showStart ? (<div className='score-section'>
          <div className='score-main'>
            <div><Heading label={" Quize App"} /></div> <br />
            <div><Button label={" Start Quize"} onClick={quizestartBtn} /></div>
            </div>
        </div>) :
          (
            <>
              <div className='question-section'>
                <div><Heading label={" Quize App"} /></div>
                <div className='question-count'><p>Total Question {currentQuestion + 1}<span>/</span>{questionData.length}</p></div>
                <div className='question-text'><h3>{currentQuestion + 1} :  {questionData[currentQuestion].question}</h3></div>
              </div>
              <div className='answer-section'>
                {
                  questionData[currentQuestion].options.map((e, i) =>
                    <button className='btn' onClick={() => { return (correctAns(e), skipQuest()) }} key={i}> {e} </button>                   
                    )
                }
              </div>
              <div className='skip-back-Btn'>
                <div><Button label={"Skip"} onClick={skipQuest} /></div>
                {/* <div><Button label={"Back"} onClick={backQuest} /></div> */}
              </div>
            </>
          )}

    </div>
  )
}
export default App;
