const themeBtn = document.getElementById('theme_btn');

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

const editJobBtn = document.getElementById('editJobBtn');

editJobBtn.addEventListener('click', function() {
    const newJobTitle = prompt('Enter new job title:');
    
    if (newJobTitle !== null) {
        document.querySelector('.job-title').textContent = newJobTitle;
    }
});

const toggleSkillsBtn = document.getElementById('toggleSkillsBtn');

toggleSkillsBtn.addEventListener('click', function() {
    const skillsBox = document.getElementById('Skills_box');
    
    if (skillsBox.style.display === 'none') {
        skillsBox.style.display = 'block';
        toggleSkillsBtn.textContent = 'Hide Skills';
    } else {
        skillsBox.style.display = 'none';
        toggleSkillsBtn.textContent = 'Show Skills';
    }
});

const msgBox = document.getElementById('msgBox');
const counter = document.getElementById('counter');

msgBox.addEventListener('keyup', function() {
    const remaining = 200 - msgBox.value.length;
    counter.textContent = remaining;
});

function validateForm() {
    const name = document.forms[0]["name"].value;
    const email = document.forms[0]["email"].value;
    
    if (name === '' || email === '') {
        alert('Please fill in all fields!');
        return false;
    }
    
    return true;
}

const today = new Date();
const dateString = today.toLocaleDateString('en-US');
document.getElementById('dateDisplay').textContent = dateString;

const hour = new Date().getHours();
let greeting;

if (hour < 12) {
    greeting = 'Good morning!';
} else if (hour < 18) {
    greeting = 'Good afternoon!';
} else {
    greeting = 'Good evening!';
}

document.getElementById('greeting').textContent = greeting;
