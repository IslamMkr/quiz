import { FC } from "react"
import { Typography } from "@mui/material"
import Grid from "@mui/material/Grid2/Grid2"

interface RadioCardProps {
	value: string
	selectedSubject: string | null
	setSelectedSubject: React.Dispatch<React.SetStateAction<string | null>>
}

const RadioCard: FC<RadioCardProps> = ({ value, selectedSubject, setSelectedSubject }) => {
	return (
		<Grid
			container
			justifyContent="center"
			alignItems="center"
			style={{ width: 120, padding: "16px 32px" }}
			sx={{
				color: "#17183b",
				borderRadius: 4,
				border: selectedSubject === value ? "2px solid #2196f3" : "2px solid #fff",
				transition: "transform 0.3s ease, box-shadow 0.3s ease",
				transform: selectedSubject === value ? "scale(1.05)" : "scale(1)",
				cursor: "pointer",
				boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 16px 0px",
				"&:hover": { border: "2px solid #2196f3" },
			}}
			onClick={() => setSelectedSubject(value)}>
			<Typography variant="body1" fontWeight="bold" textAlign="center">
				{value}
			</Typography>
		</Grid>
	)
}

export default RadioCard
