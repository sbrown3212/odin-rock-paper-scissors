# Odin Rock Paper Scissors (JavaScript)

## Description

This is a simple game of rock, paper, scissors that is played using the browser's prompt feature and the console found in the developer tools. It was created to meet the requirements of the Project: Rock Paper Scissors of the Foundations Course of The Odin Project. The purpose of the assignment was to practice using the JavaScript principles and syntax learned in the last few lessons, but more importantly, to practice problem solving.

## Languages used
- HTML
- JavaScript

## How to play
- Open `index.html` (preferably in Chrome).
- Follow instructions to open dev tools console.
- Call the playGame() function in the console by typing `playGame();` and pressing enter.
- The user will be prompted to type "rock", "paper", or "scissors" in a text box. Pick one by typing it in the input box, then confirm choice by clicking "ok".
- Read the console to see if there was a tie, or to see who won that round.
- Continue following instructions given by the prompts.
- The game is best of five rounds, so the game ends once a player wins three rounds.

## Challenges

When making the game, most of the time the console was already open to see what was happening behind the scenes. So when I refreshed the page, and the game started over, everything worked as I expected. But I ran into issues when pretending I was a new user and opening `index.html` in a new browser. The JavaScript file calls the `playGame()` function, so when the page loads, the game begins with a prompt asking the user to pick "rock", "paper", or "scissors". The problem is that the user needs to open the console to see messages relevant to the game, but the user is unable to open the console when a prompt is active. After the user picks their turn and clicks the ok button, the next prompt immediately opens before the user has the opportunity to open the console. This repeats over and over again until the game ends, at which point they now have the ability to open the console, but would be a very poor user experience.

First off, I removed the code calling the `playGame()` function. Then I added instructions to `index.html` to show the user how to open console. Once the console is open, the user can see the instructions for how to start the game by calling the function in the console. The project intended for `index.html` to be blank, but I didn't know how else to explain to the user how to start the game. I imagine that designing the user experience and user interface is out of the scope of this project. But part of the purpose of this project was to learn how to work though problems. I am sure there are better solutions to this problem, some of which I could come up with on my own, but I think that is beyond the purpose of this project.

## Reflection

I really enjoy the problem solving aspect of programming. It can be challenging and frustrating at times, but being able to break the logic process down into the smallest pieces helps me understand better how things work and improves my decision making skills.