let buttons = document.querySelectorAll("button");

for(let i=0; i<buttons.length; i++) {
  let button = buttons[i];
  button.addEventListener("click", function() {
    let text = document.querySelector("#current-device span").innerHTML = this.innerHTML;
    let device = document.querySelector("#device-screen");
    device.className = `${this.dataset.type} ${this.dataset.mode}`;
    let space = document.querySelector("#device-screen .space");
    space.style.paddingBottom = `${this.dataset.space}%`;
  });
}