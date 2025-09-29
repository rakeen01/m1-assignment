// contact.js
const select = document.getElementById('contact-method');
const boxEmail = document.getElementById('box-email');
const boxPhone = document.getElementById('box-phone');

function hideAll() {
    boxEmail.classList.add('hidden');
    boxPhone.classList.add('hidden');
}
function onChange() {
    hideAll();
    if (select.value === 'email') boxEmail.classList.remove('hidden');
    else if (select.value === 'phone') boxPhone.classList.remove('hidden');
}

// init
hideAll();
select.addEventListener('change', onChange);
