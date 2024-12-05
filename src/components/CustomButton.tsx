import { FC } from "react"
import { Button } from "@mui/material"

interface CustomButtonProps {
	onClick: () => void
	text: string
	disabled: boolean
	Icon?: React.ReactElement
}

const CustomButton: FC<CustomButtonProps> = ({ onClick, text, disabled, Icon }) => {
	return (
		<Button
			variant="contained"
			color="primary"
			onClick={onClick}
			disabled={disabled}
			sx={{
				display: "flex",
				alignItems: "center",
				gap: 1,
				marginTop: "20px",
				borderRadius: 100,
				padding: "8px 30px",
			}}>
			<p>{text}</p>
			{Icon !== undefined && Icon}
		</Button>
	)
}

export default CustomButton
