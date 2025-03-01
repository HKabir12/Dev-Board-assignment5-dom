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

// Run function when page loads
document.addEventListener("DOMContentLoaded", updateDate);

// counding
document.querySelectorAll(".task-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Board Update Successfully");

    // Disable clicked button
    this.disabled = true;
    this.classList.add("opacity-50", "cursor-not-allowed");

    // Update counts
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
      "This is a new activity added dynamically! two"
    );
  });
  document.getElementById("task-btn-3").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Fix Mobile Button issue"
    );
  });
  document.getElementById("task-btn-4").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "This is a new activity added dynamically! two"
    );
  });
  document.getElementById("task-btn-5").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "You have completed the task Fix Mobile Button issue"
    );
  });
  document.getElementById("task-btn-6").addEventListener("click", function () {
    appendActivityToSpecificId(
      "activityLog",
      "This is a new activity added dynamically! two"
    );
  });
  