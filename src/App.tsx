import { Routes, Route, Navigate } from "react-router-dom"

import HomePage from "./pages/Home"
import QuizPage from "./pages/Quiz"
import ResultsPage from "./pages/Results"

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/quiz" element={<QuizPage />} />
			<Route path="/results" element={<ResultsPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	)
}

export default App
