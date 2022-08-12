const randomDice = () => {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
}
const dice = [randomDice(), randomDice()]

const winner = () => {
    if (dice[0] > dice[1]) return "🚩 Player 1 Wins!"
    else if (dice[0] === dice[1]) return "Draw"
    else return "Player 2 Wins! 🚩"
}


document.querySelector(".img1").setAttribute("src", "images/dice" + dice[0] + ".png")
document.querySelector(".img2").setAttribute("src", "images/dice" + dice[1] + ".png")

document.querySelector("h1").innerText = winner()