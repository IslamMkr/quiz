// packages
import { useState } from "react"
import { Box, Grid2 as Grid } from "@mui/material"
import { useNavigate } from "react-router-dom"
// components
import Instructions from "../components/Instructions"
import RadioCard from "../components/RadioCard"
import CustomButton from "../components/CustomButton"

const HomePage = () => {
	const navigate = useNavigate()

	const [selectedSubject, setSelectedSubject] = useState<string | null>(null)

	const handleConfirm = () => {
		if (selectedSubject) {
			navigate("/quiz", { state: selectedSubject })
		}
	}

	return (
		<Box
			sx={{
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				padding: "50px 20px",
				boxSizing: "border-box",
			}}>
			<Instructions />

			<Grid container spacing={4} justifyContent="center" marginBottom={2}>
				<RadioCard value="React" selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
				<RadioCard value="TypeScript" selectedSubject={selectedSubject} setSelectedSubject={setSelectedSubject} />
			</Grid>

			<CustomButton onClick={handleConfirm} disabled={selectedSubject === null} text="Commencer le Quiz" />
		</Box>
	)
}

export default HomePage
