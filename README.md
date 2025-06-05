### Rock, Paper, Scissors Game

This project is a simple **Rock, Paper, Scissors** game implemented in JavaScript, designed to be played entirely via the browser console. The goal is to create an engaging and interactive game while practicing fundamental JavaScript concepts such as input handling, randomization, decision-making, and score tracking.

---

### Objective

The objective of the game is to simulate a classic match of Rock, Paper, Scissors between a human player and the computer. The player and the computer make their choices, and the game determines the winner based on the traditional rules:

* **Rock beats Scissors**
* **Scissors beat Paper**
* **Paper beats Rock**

The game keeps track of scores across multiple rounds and announces the final winner at the end of the match.

---

### Description

The game is built with the following features:

1. **Computer Choice Generation**:
   The computer makes its choice randomly using a function that selects between "rock," "paper," and "scissors." This randomness is achieved through JavaScript’s `Math.random()` method.

2. **Human Input Handling**:
   The human player provides their choice using a prompt, which is validated to ensure it matches one of the acceptable inputs ("rock," "paper," or "scissors").

3. **Game Logic**:
   A function compares the choices of the player and the computer to determine the winner of each round. The logic handles ties and updates scores for both the player and the computer.

4. **Scoring System**:
   Two score variables, `humanScore` and `computerScore`, keep track of the number of rounds won by each participant.

5. **Multi-Round Gameplay**:
   The game is played over five rounds, with the scores logged after each round. At the end of the game, the overall winner is determined and announced in the console.

---

### Learnings

This project provides an opportunity to practice and reinforce key JavaScript concepts:

* **Randomization**: Using `Math.random()` to generate unpredictable outcomes.
* **Input Validation**: Ensuring user input matches predefined acceptable values.
* **Decision-Making**: Implementing game rules with conditional statements to compare player and computer choices.
* **Score Tracking**: Maintaining and updating variables to reflect game progress.
* **Console Interaction**: Executing and debugging code through the browser's developer tools.

---

### How to Play

1. Open the game in a browser with developer tools enabled.
2. Start the game by calling the `playGame()` function in the console.
3. Follow the prompts to input your choices for each round.
4. View the results of each round and the final scores in the console.

Enjoy this simple yet engaging game and have fun improving your JavaScript skills! 🎮
