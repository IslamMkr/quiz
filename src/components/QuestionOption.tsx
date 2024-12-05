import { FC } from "react"
import { FormControlLabel, Radio } from "@mui/material"

interface QuestionOptionProps {
	key: string
	option: string
	selectedAnswer: string | null
}

const QuestionOption: FC<QuestionOptionProps> = ({ key, option, selectedAnswer }) => {
	return (
		<FormControlLabel
			key={key}
			value={option}
			control={<Radio />}
			label={option}
			sx={{
				color: "#17183b",
				borderRadius: 4,
				border: selectedAnswer === option ? "2px solid #2196f3" : "2px solid #F2F2F2",
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
				transform: selectedAnswer === option ? "scale(1.05)" : "scale(1)",
				"&:hover": { border: "2px solid #2196f3" },
				cursor: "pointer",
			}}
			style={{
				width: "80%",
				padding: "8px 16px",
				borderRadius: 100,
				backgroundColor: "#F2F2F2",
				maxWidth: 700,
			}}
		/>
	)
}

export default QuestionOption
