/** @format */

function nextHandler() {
  if (
    document.getElementById("name").value === "" ||
    document.getElementById("contact").value === "" ||
    document.getElementById("email").value === ""
  ) {
    document.getElementById("next1").disabled = true;
  } else {
    document.getElementById("next1").disabled = false;
  }
}

function slideHandler(cnt) {
  const val = -10 * cnt;
  document.querySelector(".slide").style.marginLeft = `${val}%`;
}

// SUCCESS FUNCTION ....

function successFunction() {}

// FAILURE FUCNTION ....

function failiurFunction() {
  window.location.reload();
}

document.getElementById("main_form").addEventListener("submit", (e) => {
  e.preventDefault();
});
