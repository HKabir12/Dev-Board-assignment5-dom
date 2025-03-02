document.getElementById("discover").addEventListener("click", function (event) {
  event.preventDefault();

  window.location.href = "./deb-board2.html";
});

function updateDate() {
  const dateCurrent = document.getElementById("current-date");

  const today = new Date();
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const formattedDate = today
    .toLocaleDateString("en-US", options)
    .replace(/,/g, "");

  dateCurrent.textContent = formattedDate;
}


document.addEventListener("DOMContentLoaded", updateDate);


document.querySelectorAll(".task-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board Update Successfully");

    this.disabled = true;
    this.classList.add("opacity-50", "cursor-not-allowed");

    const taskCount = getInnerTextValueByID("task-count");
    const navCount = getInnerTextValueByID("nav-count");

    if (taskCount > 0) {
      const sub = taskCount - 1;
      setInnerTextByIDValue("task-count", sub);
      if (sub === 0) {
        alert("Successful! All Board completed.");
      }
    }

    if (navCount >= 0) {
      setInnerTextByIDValue("nav-count", navCount + 1);
    }

  });
});

document.getElementById("task-btn-1").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Fix Mobile Button issue"
    );
  });
  document.getElementById("task-btn-2").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task add dark mode  Button"
    );
  });
  document.getElementById("task-btn-3").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Optimize Home page  Button"
    );
  });
  document.getElementById("task-btn-4").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Add new emoji  Button"
    );
  });
  document.getElementById("task-btn-5").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Integrate OpenAI API Button "
    );
  });
  document.getElementById("task-btn-6").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task improve job searching Button"
    );
  });
  