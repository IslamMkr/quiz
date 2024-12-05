// packages
import { FC } from "react"
import { Accordion, AccordionDetails, AccordionSummary, Grid2 as Grid, Typography } from "@mui/material"
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined"
// types
import { Question, Response } from "../types/question"

interface ResponseDetailsProps {
	answer?: Response
	question: Question
	label: string
}

const ResponseDetails: FC<ResponseDetailsProps> = ({ answer, question, label }) => {
	const isCorrect = answer?.answer === question.answer
	return (
		<Accordion sx={{ maxWidth: 700, width: "80%", borderRadius: 2, "&::before": { position: "unset" } }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
				<Grid container alignItems="center" style={{ gap: 16 }}>
					{isCorrect ? <CheckCircleOutlineOutlinedIcon color="success" /> : <CancelOutlinedIcon color="error" />}
					<Typography variant="body2">{label}</Typography>
				</Grid>
			</AccordionSummary>
			<AccordionDetails>
				<Grid sx={{ display: "flex", flexDirection: "column", gap: "20px", borderRadius: 4, padding: 2 }}>
					<Typography variant="body1">
						<strong>{question.question}</strong>
					</Typography>
					<Grid container direction="column" style={{ gap: 10 }}>
						{question.options.map((option, index) => {
							return (
								<Grid
									key={index}
									container
									alignItems="center"
									justifyContent="space-between"
									style={{
										border:
											answer?.answer === option && question.answer !== option
												? "2px solid #ce5c5c"
												: (answer?.answer === option && question.answer === option) || question.answer === option
												? "2px solid #55c24b"
												: "2px solid #F2F2F2",
										backgroundColor:
											answer?.answer === option && question.answer !== option
												? "#ce5c5c26"
												: (answer?.answer === option && question.answer === option) || question.answer === option
												? "#55c24b36"
												: "#ffffff",
										padding: "8px 16px",
										borderRadius: 20,
										gap: 10,
									}}>
									<Typography variant="body2" style={{ maxWidth: "90%" }}>
										{option}
									</Typography>
									{answer?.answer === option && question.answer !== option && <CancelOutlinedIcon color="error" />}
									{((answer?.answer === option && question.answer === option) || question.answer === option) && (
										<CheckCircleOutlineOutlinedIcon color="success" />
									)}
								</Grid>
							)
						})}
					</Grid>
				</Grid>
			</AccordionDetails>
		</Accordion>
	)
}

export default ResponseDetails
