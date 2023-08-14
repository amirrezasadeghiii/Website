const counters = document.querySelectorAll(".counter");

counters.forEach((counters1) => {
  counters1.innerText = "0";

  function updateCounter() {
    let firstNum = +counters1.innerText;
    const dataCounter = counters1.getAttribute("data");

    const stepCounter = dataCounter / 10;
    firstNum = Math.ceil(stepCounter + firstNum);

    console.log(stepCounter);
    if (firstNum < dataCounter) {
      counters1.innerText = firstNum;
      setTimeout(updateCounter, 60);
    } else {
      counters.innerText = dataCounter;
    }
  }
  updateCounter();
});
