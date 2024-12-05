export interface Response {
	questionIndex: number
	answer: string
}

export interface Question {
	question: string
	options: string[]
	answer: string
	difficulty: "easy" | "medium" | "hard"
}
