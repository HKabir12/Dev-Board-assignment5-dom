function getInnerTextValueByID(id) {
  const value = document.getElementById(id).innerText;
  const convertValue = parseFloat(value);
  return convertValue;
}

function setInnerTextByIDValue(id, value) {
  document.getElementById(id).innerText = value;
}


//append
function appendActivityToSpecificId(id, text) {
  const newText = document.createElement("p");
  const currentTime = new Date().toLocaleTimeString([], { hour12: true });
  newText.textContent = `
  ${text} at ${currentTime}`;
  newText.classList.add("bg-red-400", "p-2", "rounded-lg", "shadow-md",  "mt-2","font-sm");
  

  const container = document.getElementById(id);
  if (container) {
    container.appendChild(newText);
  } else {
    console.log(`Element with id "${id}" not found.`);
  }
}

// hirtory clear
document
  .getElementById("historyClear")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const historyContent = document.getElementById("activityLog");

    while (historyContent.firstChild) {
      historyContent.removeChild(historyContent.firstChild);
    }
  });
