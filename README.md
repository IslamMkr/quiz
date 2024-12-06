# Quiz Application

A responsive and interactive quiz application built using **React**, **TypeScript**, and **Material-UI**. This app lets users test their knowledge in **React** or **TypeScript** through a timed quiz experience.

---

## Features

### General Features

- **Subject Choice:** Select between React and TypeScript quizzes.
- **Dynamic Questions:** Questions are categorized by difficulty (easy, medium, hard).
- **Timer-Based Quiz:** Each question has a 30-second timer with a circular progress bar.
- **Real-Time Feedback:** Progress is displayed as users proceed through the quiz.
- **Results Page:** Detailed performance breakdown, including:
  - Correct and incorrect answers.
  - Statistics for each difficulty level.
  - User's answers compared to the correct answers.

### User Flow

1. **Home Page:**

   - Displays instructions and lets users select a quiz subject.
   - Includes playful card animations for subject choices.
   - Requires confirmation before proceeding.

2. **Quiz Page:**

   - Displays one question at a time with four answer options.
   - Tracks progress with a linear progress bar and timer.
   - Automatically advances to the next question when time runs out or the user submits an answer.
   - Records responses with feedback on completion.

3. **Results Page:**
   - Summarizes user performance with:
     - Number of correct and incorrect answers.
     - Performance breakdown by difficulty.
     - Detailed review of each question and answer.
   - Provides motivational messages based on performance.

---

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/IslamMkr/quiz.git
   cd quiz
   ```

2. Install Dependencies

   ```bash
   npm install
   ```

3. Start the Development Server
   ```bash
   npm run dev
   ```

## Usage

1. Navigate to the Home Page and select a quiz subject.
2. Answer the questions within the given time.
3. View your detailed results on the Results Page.

## Dependencies

- **React**
- **Typescript**
- **Material-UI**
- **React Router**
- **ESLint and Prettier** for code quality and formatting.
