//Get all the required elements
const form = document.getElementById("checkInForm");
const nameInput = document.getElementById("attendeeName");
const teamSelect = document.getElementById("teamSelect");

//track attendence
let count = 0;
const maxCount = 50;

// handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // get form values
  const name = nameInput.value;
  const team = teamSelect.value;
  const teamName = teamSelect.selectedOptions[0].text;

  console.log(name, teamName);

  //increment
  count++;
  // Update total attendee count on page
  const attendeeCount = document.getElementById("attendeeCount");
  attendeeCount.textContent = count;

  //update progress bar
  const percentage = Math.round((count / maxCount) * 100);
  const progressBar = document.getElementById("progressBar");
  progressBar.style.width = `${percentage}%`;

  //update team bar
  const teamCounter = document.getElementById(team + "Count");
  teamCounter.textContent = parseInt(teamCounter.textContent) + 1;

  //show welcome message
  const greeting = document.getElementById("greeting");
  greeting.textContent = `Welcome, ${name} from ${teamName}!`;

  form.reset();
});
