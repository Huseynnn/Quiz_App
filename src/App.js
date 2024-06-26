import { useEffect, useState } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
        id: 4,
        question: "What is the capital of France?",
        answers: [
            {
                text: "Rome",
                correct: false,
            },
            {
                text: "Paris",
                correct: true,
            },
            {
                text: "Berlin",
                correct: false,
            },
            {
                text: "Madrid",
                correct: false,
            },
        ],
    },
    {
        id: 5,
        question: "What is the chemical symbol for water?",
        answers: [
            {
                text: "H2O",
                correct: true,
            },
            {
                text: "O2",
                correct: false,
            },
            {
                text: "CO2",
                correct: false,
            },
            {
                text: "HO2",
                correct: false,
            },
        ],
    },
    {
        id: 6,
        question: "Which planet is known as the Red Planet?",
        answers: [
            {
                text: "Earth",
                correct: false,
            },
            {
                text: "Mars",
                correct: true,
            },
            {
                text: "Jupiter",
                correct: false,
            },
            {
                text: "Saturn",
                correct: false,
            },
        ],
    },
    {
        id: 7,
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: [
            {
                text: "Harper Lee",
                correct: true,
            },
            {
                text: "J.K. Rowling",
                correct: false,
            },
            {
                text: "Jane Austen",
                correct: false,
            },
            {
                text: "Mark Twain",
                correct: false,
            },
        ],
    },
    {
        id: 8,
        question: "What is the largest ocean on Earth?",
        answers: [
            {
                text: "Atlantic Ocean",
                correct: false,
            },
            {
                text: "Indian Ocean",
                correct: false,
            },
            {
                text: "Arctic Ocean",
                correct: false,
            },
            {
                text: "Pacific Ocean",
                correct: true,
            },
        ],
    },
    {
        id: 9,
        question: "What is the hardest natural substance on Earth?",
        answers: [
            {
                text: "Gold",
                correct: false,
            },
            {
                text: "Iron",
                correct: false,
            },
            {
                text: "Diamond",
                correct: true,
            },
            {
                text: "Platinum",
                correct: false,
            },
        ],
    },
    {
        id: 10,
        question: "Which element has the chemical symbol 'O'?",
        answers: [
            {
                text: "Oxygen",
                correct: true,
            },
            {
                text: "Gold",
                correct: false,
            },
            {
                text: "Osmium",
                correct: false,
            },
            {
                text: "Oganesson",
                correct: false,
            },
        ],
    },
    {
        id: 11,
        question: "What is the largest mammal in the world?",
        answers: [
            {
                text: "Elephant",
                correct: false,
            },
            {
                text: "Blue Whale",
                correct: true,
            },
            {
                text: "Giraffe",
                correct: false,
            },
            {
                text: "Great White Shark",
                correct: false,
            },
        ],
    },
    {
        id: 12,
        question: "Who painted the Mona Lisa?",
        answers: [
            {
                text: "Pablo Picasso",
                correct: false,
            },
            {
                text: "Vincent van Gogh",
                correct: false,
            },
            {
                text: "Leonardo da Vinci",
                correct: true,
            },
            {
                text: "Claude Monet",
                correct: false,
            },
        ],
    },
    {
        id: 13,
        question: "Which country is known as the Land of the Rising Sun?",
        answers: [
            {
                text: "China",
                correct: false,
            },
            {
                text: "South Korea",
                correct: false,
            },
            {
                text: "Japan",
                correct: true,
            },
            {
                text: "Thailand",
                correct: false,
            },
        ],
    },
    {
        id: 14,
        question: "What is the smallest country in the world?",
        answers: [
            {
                text: "Monaco",
                correct: false,
            },
            {
                text: "Nauru",
                correct: false,
            },
            {
                text: "Vatican City",
                correct: true,
            },
            {
                text: "San Marino",
                correct: false,
            },
        ],
    },
    {
        id: 15,
        question: "In which year did the Titanic sink?",
        answers: [
            {
                text: "1910",
                correct: false,
            },
            {
                text: "1912",
                correct: true,
            },
            {
                text: "1914",
                correct: false,
            },
            {
                text: "1916",
                correct: false,
            },
        ],
    },
    {
        id: 16,
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            {
                text: "Oxygen",
                correct: false,
            },
            {
                text: "Nitrogen",
                correct: false,
            },
            {
                text: "Carbon Dioxide",
                correct: true,
            },
            {
                text: "Hydrogen",
                correct: false,
            },
        ],
    }
];


  const moneyPyramid = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$500" },
    { id: 5, amount: "$1000" },
    { id: 6, amount: "$2000" },
    { id: 7, amount: "$4000" },
    { id: 8, amount: "$8000" },
    { id: 9, amount: "$16000" },
    { id: 10, amount: "$32000" },
    { id: 11, amount: "$64000" },
    { id: 12, amount: "$125000" },
    { id: 13, amount: "$250000" },
    { id: 14, amount: "$500000" },
    { id: 15, amount: "$1000000" },
  ].reverse();

  useEffect(() => {
    questionNumber > 1 && setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount)
  },[moneyPyramid,questionNumber]);

  return (
    <div className="App">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
          <>
            <div className="top">
              <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
            </div>
            <div className="bottom">
              <Trivia
                data={data}
                setStop={setStop}
                questionNumber={questionNumber}
                setQuestionNumber={setQuestionNumber}
              />
            </div>
          </>
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
