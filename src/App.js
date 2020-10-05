import React, { useState } from 'react';

export default function App() {
	const questions = [
		{
			questionText: 'Which state has the most professional sports teams?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'Texas', isCorrect: false },
				{ answerText: 'California', isCorrect: true },
				{ answerText: 'Florida', isCorrect: false },
			],
		},
		{
			questionText: 'Who has the most NBA MVP awards?',
			answerOptions: [
				{ answerText: 'Kobe Bryant', isCorrect: false },
				{ answerText: 'Kareem Abdul-Jabbar', isCorrect: true },
				{ answerText: 'LeBron James', isCorrect: false },
				{ answerText: 'Michael Jordan', isCorrect: false },
			],
		},
		{
			questionText: 'Which team has the longest Super Bowl appearance drought?',
			answerOptions: [
				{ answerText: 'New York Jets', isCorrect: true },
				{ answerText: 'Buffalo Bills', isCorrect: false },
				{ answerText: 'Washington Redskins', isCorrect: false },
				{ answerText: 'Minnesota Vikings', isCorrect: false },
			],
		},
		{
			questionText: 'Which pitcher has NOT won a Cy Young award?',
			answerOptions: [
				{ answerText: 'Randy Johnson', isCorrect: false },
				{ answerText: 'Justin Verlander', isCorrect: false },
				{ answerText: 'Jake Arrieta', isCorrect: false },
				{ answerText: 'Nolan Ryan', isCorrect: true },
			],
		},

		{
			questionText: 'Which hockey player has scored the most points in a season?',
			answerOptions: [
				{ answerText: 'Steve Yzerman', isCorrect: false },
				{ answerText: 'Wayne Gretzky', isCorrect: true },
				{ answerText: 'Mario Lemieux', isCorrect: false },
				{ answerText: 'Jaromir Jagr', isCorrect: false },
			],
		},
	];
	//State object to hold which question the user is currently on
	const [currentQuestion, setCurrentQuestion] = useState(0);

	//Save user score
	const [score, setScore] = useState(0);

	//Show user score at end of quiz
	const [showScore, setShowScore] = useState(false);

	//Reset quiz
	const clearState = () => {
		setCurrentQuestion(0);
		setScore(0);
		setShowScore(0);
	}

	const resetButton = () => {
		clearState();
	}

	//update state when an answer button is clicked
	const handleAnswerButtonClick = (isCorrect) => {
		if(isCorrect){
			alert("Correct!");
			setScore(score + 1);
		} else {
			alert("Sorry, that's incorrect.")
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	}
	
	//JSX elements for UI
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}
				<button onClick={()=> resetButton()}>Start Over</button></div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>{currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption)=>(
						<button onClick={()=> handleAnswerButtonClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
