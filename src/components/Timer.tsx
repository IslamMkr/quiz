import { CircularProgress, Box, Typography } from "@mui/material"

const Timer = ({ timeLeft }: { timeLeft: number }) => {
	return (
		<Box
			sx={{
				position: "relative",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}>
			<CircularProgress variant="determinate" value={(timeLeft / 30) * 100} size="100px" />
			<Typography
				variant="h6"
				sx={{
					position: "absolute",
					color: "black",
				}}>
				{timeLeft}s
			</Typography>
		</Box>
	)
}

export default Timer
