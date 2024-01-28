

function diceRoller() {
  document.getElementById("diceRoller").addEventListener("click", diceRoller);
  const rolldice = document.getElementById("rolldice").value;
  const Diceresult = document.getElementById("Diceresult");
  const diceimages = document.getElementById("diceimages");
  const values = [];
  const images = [];
  for (let i = 0; i < rolldice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(
      `<img src="diceimages/${value}.png" alt = "Dice ${value}">`
    );
  }
  Diceresult.textContent = `dice: ${values.join(`, `)}`;
  diceimages.innerHTML = images.join(``);
}

