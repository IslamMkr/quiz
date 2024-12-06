// packages
import { useEffect } from "react"
import { Box, Grid2 as Grid } from "@mui/material"
import { useLocation, useNavigate } from "react-router-dom"
// hooks
import useRedirectOnBack from "../hooks/useRedirectOnBack"
import useRedirectIfNoState from "../hooks/useRedirectIfNoState"
// components
import Statistics from "../components/Statistics"
import ResponseDetails from "../components/ResponseDetails"
// types
import { Question, Response } from "../types/question"

const ResultsPage = () => {
	const navigate = useNavigate()
	const location = useLocation()

	useRedirectOnBack()
	useRedirectIfNoState()

	useEffect(() => {
		console.log(location.state)
		if (!location.state) {
			navigate("/")
		}
	}, [location.state, navigate])

	if (location.state === null) return null

	const { responses, score, questions } = location.state as {
		responses: Response[]
		score: number
		questions: Question[]
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "50px 20px",
				boxSizing: "border-box",
				gap: 5,
			}}>
			<Statistics score={score} questions={questions} responses={responses} />

			<Grid container direction="column" alignItems="center" style={{ width: "80%", maxWidth: 700, gap: 8 }}>
				{questions.map((question, index) => {
					const userResponse = responses.find((response) => response.questionIndex === index)

					return (
						<ResponseDetails
							key={index}
							question={question}
							answer={userResponse}
							label={`Question ${index + 1}/${questions.length}`}
						/>
					)
				})}
			</Grid>
		</Box>
	)
}

export default ResultsPage
