var words = [
  'bananas',
  'grapes',
  'carousel',
  'milkshake',
  'javascript',
  'limousine',
  'chocolate',
  'programming',
  'meatloaf',
  'ukulele',
  'mango'
]

var previousWord = ""
var remainingGuessesLeft = 10   
var incorrectLettersGuesses = []
var wins = 0
var losses = 0
var correctLetters = []
var answer = false

var wordToGuess = document.getElementById('word-to-guess')
wordToGuess.textContent = ""
var previousWord = document.getElementById('previous-word')
var incorrectLetters = document.getElementById('incorrect-letters')
var remainingGuesses = document.getElementById('remaining-guesses')
remainingGuesses.textContent = remainingGuessesLeft
var showWins = document.getElementById('wins')
var showLosses = document.getElementById('losses')
var correctWord = words[Math.floor(Math.random() * words.length)]
var lettersGuessed = correctWord.length

var solution = correctWord.split('')
for (i = 0; i < correctWord.length; i++){
  solution[i] = '_'
}

var displayWord = solution.join("")
console.log(correctWord)
wordToGuess.textContent = displayWord

document.body.onkeyup = function(e){
  var key = e.key.toLowerCase()
  console.log(e.key)
  if (incorrectLettersGuesses.includes(key) == false && correctLetters.includes(key) == false){
  for (i = 0; i < correctWord.length; i++){
    if (correctWord[i] == key){
      answer = true
      lettersGuessed-- 
      correctLetters.push(key)
      solution[i] = key
    }
  }
  if (answer == true){
    displayWord = solution.join("")
    wordToGuess.textContent = displayWord
    if (lettersGuessed == 0){
      wins++         
      showWins.textContent = wins
      previousWord.textContent = correctWord
      wordToGuess.textContent = ""
      correctWord = words[Math.floor(Math.random() * words.length)]
      solution = correctWord.split('')
      for (i = 0; i < correctWord.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        remainingGuessesLeft = 10
        displayWord = solution.join("")
        console.log(correctWord)
        correctLetters = []
        incorrectLettersGuesses = []
        lettersGuessed = correctWord.length
        incorrectLetters.textContent = ""
        remainingGuesses.textContent = remainingGuessesLeft
        wordToGuess.textContent = displayWord
      }
      }
  }else{
    incorrectLettersGuesses.push(key)
    remainingGuessesLeft--
    remainingGuesses.textContent = remainingGuessesLeft
    incorrectLetters.textContent = incorrectLettersGuesses 
    }
    if (remainingGuessesLeft == 0){
      losses++               
      showLosses.textContent = losses
      previousWord.textContent = correctWord
      wordToGuess.textContent = ""
      correctWord = words[Math.floor(Math.random() * words.length)]
      solution = correctWord.split('')
      for (i = 0; i < correctWord.length; i++){
        wordToGuess.textContent = wordToGuess.textContent + "_"
        solution[i] = '_'
        remainingGuessesLeft = 10
        displayWord = solution.join("")
        console.log(correctWord)
        correctLetters = []
        incorrectLettersGuesses = []
        lettersGuessed = correctWord.length
        incorrectLetters.textContent = ""
        remainingGuesses.textContent = remainingGuessesLeft
        wordToGuess.textContent = displayWord
      }
    }
  }
  var answer = false
}

