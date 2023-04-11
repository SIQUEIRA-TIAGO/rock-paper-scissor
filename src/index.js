let playerChoice = null;
let botChoice = null;
const playerImg = document.getElementById('playerImg')
const botImg = document.getElementById('botImg')
const gameArea = document.getElementById('gameArea');

const resetBot = () => {
  if(botChoice){
    botImg.setAttribute('src', '');
    botChoice = null;
  }
}

const aiChoice = () => {
  return new Promise((resolve, reject) => {
    const choice = Math.floor(Math.random() * 4)
    switch (choice){
      case 1:
        console.log('pedra')
        botImg.setAttribute('src', '../src/imgs/rock.png')
        botChoice = 'rock'
        break
      case 2:
        console.log('papel')
        botImg.setAttribute('src', '../src/imgs/paper.png')
        botChoice = 'paper'
        break
      case 3:
        console.log('tesoura')
        botImg.setAttribute('src', '../src/imgs/scissor.png')
        botChoice = 'scissor'
        break
    }
    botImg.onload = () => {
      resolve()
    }
  })
}

const winner = async () => {
  await aiChoice()
  switch(playerChoice){
    case 'rock':
      if(botChoice == 'rock'){
        alert('Draw')
      } else if(botChoice == 'paper'){
        alert('You LOSE')
      } else{
        alert('You WIN')
      }
      break
    case 'paper':
      if(botChoice == 'rock'){
        alert('You WIN')
      } else if(botChoice == 'paper'){
        alert('Draw')
      } else{
        alert('You LOSE')
      }
      break
    case 'scissor':
      if(botChoice == 'rock'){
        alert('You LOSE')
      } else if(botChoice == 'paper'){
        alert('You WIN')
      } else{
        alert('Draw')
      }
      break
  }
}

document.getElementById('rock').addEventListener('click', () => {
  resetBot()
  playerImg.setAttribute('src', '../src/imgs/rock.png')
  playerChoice = 'rock'
})
document.getElementById('paper').addEventListener('click', () => {
  resetBot()
  playerImg.setAttribute('src', '../src/imgs/paper.png')
  playerChoice = 'paper'
})
document.getElementById('scissor').addEventListener('click', () => {
  resetBot()
  playerImg.setAttribute('src', '../src/imgs/scissor.png')
  playerChoice = 'scissor'
})

document.getElementById('startGame').addEventListener('click', () => {
  if(playerChoice && !botChoice){
    winner()
  } else{
    alert(`click on text to choose your position`)
  }
})