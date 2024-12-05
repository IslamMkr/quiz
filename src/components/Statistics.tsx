import { FC } from "react"
import { Box, Grid2 as Grid, LinearProgress, Typography } from "@mui/material"
import { Question, Response } from "../types/question"

interface StatisticsProps {
	questions: Question[]
	score: number
	responses: Response[]
}

const Statistics: FC<StatisticsProps> = ({ questions, score, responses }) => {
	const totalQuestions = questions.length
	const correctAnswers = score

	const difficultyStats = ["easy", "medium", "hard"].map((difficulty) => {
		const questionsByDifficulty = questions.filter((q) => q.difficulty === difficulty)
		const correctByDifficulty = responses.filter(
			(response) =>
				questions[response.questionIndex].difficulty === difficulty &&
				questions[response.questionIndex].answer === response.answer
		).length

		return {
			difficulty: difficulty === "easy" ? "Facile" : difficulty === "medium" ? "Moyen" : "Difficile",
			total: questionsByDifficulty.length,
			correct: correctByDifficulty,
			wrong: questionsByDifficulty.length - correctByDifficulty,
		}
	})

	const accuracy = (correctAnswers / totalQuestions) * 100

	const performanceMessage =
		accuracy === 100
			? "Excellent travail ! Vous avez répondu à toutes les questions correctement."
			: accuracy >= 80
			? "Très bon résultat ! Vous maîtrisez bien le sujet."
			: accuracy >= 50
			? "Pas mal, mais il y a encore des points à améliorer."
			: "Vous pouvez faire mieux. Continuez à pratiquer !"

	return (
		<Grid container direction="column" style={{ width: "80%", maxWidth: 700, gap: 50 }}>
			<Grid container direction="column" sx={{ textAlign: "center" }}>
				<Typography variant="h6">Statistiques Générales</Typography>
				<Typography variant="body1" mt={2}>
					Vous avez répondu correctement à {correctAnswers} question
					{correctAnswers > 1 ? "s" : ""} sur {totalQuestions}.
				</Typography>
				<LinearProgress variant="determinate" value={accuracy} sx={{ mt: 2, height: 10 }} />
				<Typography variant="body1" mt={1}>
					Précision : {accuracy.toFixed(2)}%
				</Typography>
				<Typography variant="h6" mt={2} sx={{ color: accuracy >= 80 ? "green" : "orange" }} fontWeight="bold">
					{performanceMessage}
				</Typography>
			</Grid>

			<Grid container direction="column" sx={{ textAlign: "center" }}>
				<Typography variant="h6" gutterBottom>
					Performance par Difficulté
				</Typography>
				{difficultyStats.map((stat) => (
					<Box key={stat.difficulty} sx={{ mb: 2 }}>
						<Typography variant="body1">
							<b>{stat.difficulty.toUpperCase()}</b>
						</Typography>
						<Typography variant="body2">
							Correctes : {stat.correct} / {stat.total} (
							{stat.total > 0 ? ((stat.correct / stat.total) * 100).toFixed(2) : "0.00"}
							%)
						</Typography>
						<LinearProgress
							variant="determinate"
							value={(stat.correct / stat.total) * 100}
							sx={{
								height: 10,
								mt: 1,
								backgroundColor: "lightgray",
								"& .MuiLinearProgress-bar": {
									backgroundColor: stat.correct >= stat.wrong ? "green" : "red",
								},
							}}
						/>
					</Box>
				))}
			</Grid>
		</Grid>
	)
}

export default Statistics
