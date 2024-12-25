var container = document.getElementById("dice-container");
function generatenum() {
  container.innerHTML = "";

  let randomnumber = Math.random() * 6;
  newrandomnumber = Math.ceil(randomnumber);
  console.log(newrandomnumber);

  if (newrandomnumber == 1) {
    container.innerHTML = `
        <div class="dice dice-1 animate__animated animate__flipInX" id="dice-1">
        <span class="dot center"></span>
      </div>`;
  } else if (newrandomnumber == 2) {
    container.innerHTML = `
        <div class="dice dice-2 animate__animated animate__flipInX" id="dice-2">
        <span class="dot top-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (newrandomnumber == 3) {
    container.innerHTML = `
      <div class="dice dice-3 animate__animated animate__flipInX" id="dice-3">
        <span class="dot top-left"></span>
        <span class="dot center"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (newrandomnumber == 4) {
    container.innerHTML = `      
                <div class="dice dice-4 animate__animated animate__flipInX" id="dice-4">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (newrandomnumber == 5) {
    container.innerHTML = `      <div class="dice dice-5 animate__animated animate__flipInX" id="dice-5">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot center"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else if (newrandomnumber == 6) {
    container.innerHTML = `      <div class="dice dice-6 animate__animated animate__flipInX" id="dice-6">
        <span class="dot top-left"></span>
        <span class="dot top-right"></span>
        <span class="dot middle-left"></span>
        <span class="dot middle-right"></span>
        <span class="dot bottom-left"></span>
        <span class="dot bottom-right"></span>
      </div>`;
  } else {
    alert("Error");
  }
}
