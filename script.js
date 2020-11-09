const countdownForm = document.getElementById('countdownForm');
const inputContainer = document.getElementById('input-container');
const dateEl = document.getElementById('date-picker');

let countdownTitle = '';
let countdownDate = '';
let countdownValue = Date;
let countdownActive;
let savedCountdown;


// Set Date Input Min & Value with Today's Date
const today = new Date().toISOString().split('T')[0];
dateEl.setAttribute('min', today);


// Take values from Form Input
function updateCountdown(e) {
    e.preventDefault();
    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value

    console.log(countdownTitle, countdownDate)
    // Get number version of current Date, updateDome
    countdownValue = new Date(countdownDate).getTime();
    console.log('countdown value', countdownValue)

}

// Event Listener
countdownForm.addEventListener('submit', updateCountdown)