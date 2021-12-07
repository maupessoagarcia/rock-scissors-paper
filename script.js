const placarCpu = document.querySelector(".placar-cpu");
const placarYou = document.querySelector(".placar-you");
let score1 = 0;
let score2 = 0;
let choice, compChoice;
const conversion = { 1: "rock", 2: "scissors", 3: "paper" };
let whoWonRound;
const resultWrapper = document.querySelector(".result-wrapper");
const cpuOption = document.querySelector(".cpu-play");
const youOption = document.querySelector(".you-play");
const resultado = document.querySelector(".resultado");
const rock = "fa-hand-rock";
const paper = "fa-hand-paper";
const scissors = "fa-hand-peace";
const youLabel = document.querySelector(".you-label");

//Initial screen - Get Username and Open initial screen

document.querySelector(".name-btn").addEventListener("click", () => {
  const playerName = document.querySelector(".name-input").value;
  youLabel.textContent = playerName;
  document.querySelector(".subcontainer").classList.remove("reset");
  document.querySelector(".enter-name").classList.add("reset");
});

//Choose the play

document.querySelector(".rock").addEventListener("click", () => {
  choice = "rock";

  roundResult();
  changeDisplay();
  resultWrapper.classList.remove("reset");
  resultado.classList.remove("reset");
  console.log(choice, compChoice);
});
document.querySelector(".scissors").addEventListener("click", () => {
  choice = "scissors";

  roundResult();
  changeDisplay();
  resultWrapper.classList.remove("reset");
  resultado.classList.remove("reset");
  console.log(choice, compChoice);
});
document.querySelector(".paper").addEventListener("click", () => {
  choice = "paper";

  roundResult();
  changeDisplay();
  resultWrapper.classList.remove("reset");
  resultado.classList.remove("reset");
  console.log(choice, compChoice);
});

// Determining computer choice and round result

function roundResult() {
  compChoice = conversion[Math.floor(Math.random() * 3 + 1)];

  if (
    (choice === "rock" && compChoice === "scissors") ||
    (choice === "scissors" && compChoice === "paper") ||
    (choice === "paper" && compChoice === "rock")
  ) {
    score2++;
    placarYou.textContent = score2;
    whoWonRound = "You won!!!";
  } else if (
    (choice === "rock" && compChoice === "paper") ||
    (choice === "scissors" && compChoice === "rock") ||
    (choice === "paper" && compChoice === "scissors")
  ) {
    score1++;
    placarCpu.textContent = score1;
    whoWonRound = "CPU won :(";
  } else {
    whoWonRound = "It's a tie";
  }
}

//displaying result

const changeDisplay = () => {
  console.log(cpuOption, youOption);
  cpuOption.classList.remove(cpuOption.classList[2]);
  youOption.classList.remove(youOption.classList[2]);
  cpuOption.classList.add(
    compChoice === "scissors" ? scissors : `fa-hand-${compChoice}`
  );
  youOption.classList.add(
    choice === "scissors" ? scissors : `fa-hand-${choice}`
  );
  resultado.innerText = whoWonRound;
  console.log(cpuOption, youOption);
};

// reset game

document.querySelector(".new-game").addEventListener("click", () => {
  score1 = 0;
  score2 = 0;
  placarCpu.textContent = score1;
  placarYou.textContent = score2;
  resultWrapper.classList.add("reset");
  resultado.classList.add("reset");
});
