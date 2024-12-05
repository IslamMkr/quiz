import { StrictMode } from "react"
import { BrowserRouter } from "react-router"
import { createRoot } from "react-dom/client"
import { createTheme, ThemeProvider } from "@mui/material/styles"

import App from "./App.tsx"

import "./index.css"

import "@fontsource/roboto-mono/400.css" // Regular
import "@fontsource/roboto-mono/700.css" // Bold

const theme = createTheme({
	typography: {
		fontFamily: "'Mona Sans', 'Roboto Mono', sans-serif",
	},
})

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>
)
