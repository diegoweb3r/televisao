const turnOnOffButton = document.getElementById("turnOnOffButton");
const chPlusButton = document.getElementById("chPlusButton");
const chMinusButton = document.getElementById("chMinusButton");
const screenRemoteControl = document.getElementById("screenRemoteControl");
const volPlusButton = document.getElementById("volPlusButton");
const vilMinusButton = document.getElementById("vilMinusButton");
const oneButton = document.getElementById("oneButton");
const twoButton = document.getElementById("twoButton");
const threeButton = document.getElementById("threeButton");
const fourButton = document.getElementById("fourButton");
const fiveButton = document.getElementById("fiveButton");
const sixButton = document.getElementById("sixButton");
const sevenButton = document.getElementById("sevenButton");
const eigthButton = document.getElementById("eigthButton");
const nineButton = document.getElementById("nineButton");
const zeroButton = document.getElementById("zeroButton");
const lightModeButton = document.getElementById("lightModeButton");
const darkModeButton = document.getElementById("darkModeButton");
const tvScreen = document.getElementById("tvScreen");
const onOffLight = document.getElementById("onOffLight");
let isTVOn = false;
let chanel = 1;
let volume = 10;

function isTVOnorOff() {
  isTVOn = !isTVOn;

  if (onOffLight.classList.contains("offLight")) {
    onOffLight.classList.remove("offLight");
    onOffLight.classList.add("onLight");
    tvScreen.innerHTML = '<img src="./assets/Globo.webp" alt="">';
    screenRemoteControl.innerHTML = chanel;
    screenRemoteControl.style.backgroundColor = "gray";
  } else {
    onOffLight.classList.remove("onLight");
    onOffLight.classList.add("offLight");
    tvScreen.innerHTML = " ";
    screenRemoteControl.innerHTML = "";
    screenRemoteControl.style.backgroundColor = "#222";
  }
}

function turnOnOffTV() {
  isTVOnorOff();
  chanel = 1;
  volume = 10;
}

function changeChanel(){
    
}

function changeChanelPlus() {
  if (isTVOn) {
    chanel++;
    screenRemoteControl.innerHTML = chanel;
    wichChannel(chanel);
  } else {
    alert("TV Desligada");
  }
}

function changeChanelMinus() {
  if (isTVOn) {
    if (chanel > 1) {
      chanel--;
      screenRemoteControl.innerHTML = chanel;
      wichChannel(chanel);
    }
  } else {
    alert("TV Desligada");
  }
}

function wichChannel() {
  switch (chanel) {
    case 1:
      tvScreen.innerHTML = '<img src="./assets/Globo.webp" alt="">';
      break;
    case 2:
      tvScreen.innerHTML = '<img src="./assets/SBT.jpeg" alt="">';
      break;
    case 3:
      tvScreen.innerHTML = '<img src="./assets/Record.png" alt="">';
      break;
    case 4:
      tvScreen.innerHTML = '<img src="./assets/Band TV.webp" alt="">';
      break;
    case 5:
      tvScreen.innerHTML = '<img src="./assets/Cultura.webp" alt="">';
      break;
    case 6:
      tvScreen.innerHTML = '<img src="./assets/Netflix.webp" alt="">';
      break;
    default:
      tvScreen.innerHTML = '<img src="./assets/semsinal.jpg" alt="">';
  }
}

function volumeUp() {
  if (isTVOn) {
    volume++;
    screenRemoteControl.innerHTML = volume;
    screenRemoteControl.innerHTML = volume;
    setTimeout(() => {
      screenRemoteControl.innerHTML = chanel;
    }, 1000);
  } else {
    alert("TV Desligada");
  }
}

function volumeDown() {
  if (isTVOn) {
    if (volume > 1) {
      volume--;
    }
    screenRemoteControl.innerHTML = volume;
    setTimeout(() => {
      screenRemoteControl.innerHTML = chanel;
    }, 1000);
  } else {
    alert("TV Desligada");
  }
}

turnOnOffButton.addEventListener("click", turnOnOffTV);
chPlusButton.addEventListener("click", changeChanelPlus);
chMinusButton.addEventListener("click", changeChanelMinus);
volPlusButton.addEventListener("click", volumeUp);
vilMinusButton.addEventListener("click", volumeDown);
