

// 1- to choose randomly from an array
const Choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  var Choice = Choices[Math.floor(Math.random() * Choices.length)];

  return Choice;
}
