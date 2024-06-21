# Odin Rock Paper Scissors (JavaScript)

## Description

The first portion of this project was to build a rock, paper, scissors game that was to be played using browser prompts and the developer console. This was prior to learning how to use JavaScript events and how to manipulate the DOM. Later in the foundations course, we learned about these subjects and were asked to update our original game with a user interface with these principles.

## Languages used
- HTML
- JavaScript
- CSS

## How to play

- Open `index.html` in your preferred web browser
- To begin the game, click one of the three buttons (rock, paper, or scissors)
- The page will update with the results of the last round and the score will update accordingly.
- Begin the next round, and all following rounds, by clicking you next pick of the three buttons.
- The game is won once one player has scored 5 points.
- Refresh the page if you would like to play again.

## Challenges

### Phase 1 (play using the console)
When making the game, most of the time the console was already open to see what was happening behind the scenes. So when I refreshed the page, and the game started over, everything worked as I expected. But I ran into issues when pretending I was a new user and opening `index.html` in a new browser. The JavaScript file calls the `playGame()` function, so when the page loads, the game begins with a prompt asking the user to pick "rock", "paper", or "scissors". The problem is that the user needs to open the console to see messages relevant to the game, but the user is unable to open the console when a prompt is active. After the user picks their turn and clicks the ok button, the next prompt immediately opens before the user has the opportunity to open the console. This repeats over and over again until the game ends, at which point they now have the ability to open the console, but would be a very poor user experience.

First off, I removed the code calling the `playGame()` function. Then I added instructions to `index.html` to show the user how to open console. Once the console is open, the user can see the instructions for how to start the game by calling the function in the console. The project intended for `index.html` to be blank, but I didn't know how else to explain to the user how to start the game. I imagine that designing the user experience and user interface is out of the scope of this project. But part of the purpose of this project was to learn how to work though problems. I am sure there are better solutions to this problem, some of which I could come up with on my own, but I think that is beyond the purpose of this project.

### Phase 2 (play using the user interface)

This was the first time that I have had to refactor code. Transitioning from using the console and prompts to creating a basic user interface required many changes. At first, it was very challenging. I often did not know which was next most important thing to change, and I found myself getting stuck in analysis paralysis.There were many times where I wanted to start fresh in a new document, but I decided not to because part of this portion of the project was to revise the old one, rather than starting over. As I revisited old code, I began to realize that I did not have as good a grasp on everything that was happening in the old version. But, having to change many parts of what I had previously written allowed me to better understand what was happening which allowed me to improve upon that old code.

## Reflection

I really enjoy the problem solving aspect of programming. It can be challenging and frustrating at times, but being able to break the logic process down into the smallest pieces helps me understand better how things work and improves my decision making skills.