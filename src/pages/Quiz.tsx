// packages
import { useState, useEffect, useCallback, useMemo } from "react"
import { Box, FormControl, LinearProgress, RadioGroup, Typography } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
import EastIcon from "@mui/icons-material/East"
// components
import Timer from "../components/Timer"
import QuestionOption from "../components/QuestionOption"
import CustomButton from "../components/CustomButton"
// hooks
import useRedirectOnBack from "../hooks/useRedirectOnBack"
import useRedirectIfNoState from "../hooks/useRedirectIfNoState"
// utils
import { reactQuestions, typescriptQuestions } from "../utils/questions"
// types
import { Response } from "./../types/question"

const QuizPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useRedirectOnBack()
	useRedirectIfNoState()

	const questions = (location.state as string) === "react" ? reactQuestions : typescriptQuestions

	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
	const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
	const [isSubmitted, setIsSubmitted] = useState(false)
	const [timeLeft, setTimeLeft] = useState(30)
	const [isTimeUp, setIsTimeUp] = useState(false)
	const [responses, setResponses] = useState<Response[]>([])
	const [score, setScore] = useState(0)

	const showResults = useCallback(() => {
		const actualResponses =
			responses.length !== questions.length
				? [...responses, { questionIndex: currentQuestionIndex, answer: selectedAnswer }]
				: responses

		const actualScore = score + (selectedAnswer === questions[currentQuestionIndex].answer ? 1 : 0)

		navigate("/results", {
			state: { responses: actualResponses, score: actualScore, questions },
		})
	}, [currentQuestionIndex, navigate, questions, responses, score, selectedAnswer])

	const moveToNextQuestion = useCallback(() => {
		if (currentQuestionIndex < questions.length - 1) {
			setCurrentQuestionIndex(currentQuestionIndex + 1)
			setSelectedAnswer(null)
			setIsSubmitted(false)
			setTimeLeft(30)
			setIsTimeUp(false)
		} else {
			setTimeout(() => {
				showResults()
			}, 500)
		}
	}, [currentQuestionIndex, questions.length, showResults])

	useEffect(() => {
		let timer: NodeJS.Timeout

		if (timeLeft > 0 && !isTimeUp) {
			timer = setInterval(() => {
				setTimeLeft((prevTime) => prevTime - 1)
			}, 1000)
		} else if (timeLeft === 0) {
			setIsTimeUp(true)
			setIsSubmitted(true)
			setTimeout(moveToNextQuestion, 1000)
		}
		return () => clearInterval(timer)
	}, [timeLeft, isTimeUp, moveToNextQuestion])

	const handleNext = () => {
		if (selectedAnswer === null) return

		const newResponse = {
			questionIndex: currentQuestionIndex,
			answer: selectedAnswer,
		}

		setResponses((prevResponses) => [...prevResponses, newResponse])

		const correctAnswer = questions[currentQuestionIndex].answer

		if (selectedAnswer === correctAnswer) {
			setScore((prevScore) => prevScore + 1)
		}

		setIsSubmitted(true)

		setTimeout(() => {
			moveToNextQuestion()
		}, 200)
	}

	const shuffledOptions = useMemo(() => {
		return questions[currentQuestionIndex].options.sort(() => Math.random() - 0.5)
	}, [currentQuestionIndex, questions])

	if (!location.state) return null

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				gap: 5,
				boxSizing: "border-box",
				padding: "50px 0px",
			}}>
			<LinearProgress
				variant="determinate"
				value={Math.floor(((currentQuestionIndex + 1) / questions.length) * 100)}
				sx={{ width: "100%", marginTop: "10px", backgroundColor: "#EEEEEE", height: 10 }}
			/>
			<Typography variant="h6" gutterBottom style={{ color: "#FFC837" }}>
				Question {currentQuestionIndex + 1} / {questions.length}
			</Typography>

			<Timer timeLeft={timeLeft} />

			<Typography
				variant="h5"
				gutterBottom
				style={{
					fontWeight: "bold",
					textAlign: "center",
					width: "80%",
					maxWidth: 700,
				}}>
				{questions[currentQuestionIndex].question}
			</Typography>

			<FormControl component="fieldset" fullWidth>
				<RadioGroup
					value={selectedAnswer ?? ""}
					onChange={(e) => setSelectedAnswer(e.target.value)}
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: 10,
					}}>
					{Object.entries(shuffledOptions).map(([key, option]) => (
						<QuestionOption key={key + option} option={option} selectedAnswer={selectedAnswer} />
					))}
				</RadioGroup>
			</FormControl>

			<CustomButton
				onClick={handleNext}
				disabled={isSubmitted || selectedAnswer === null}
				text="Question Suivante"
				Icon={<EastIcon fill="white" style={{ width: 20, height: 20 }} />}
			/>
		</Box>
	)
}

export default QuizPage
