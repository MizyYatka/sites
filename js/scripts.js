const textarea = document.getElementById('Clickarea');
const button = document.getElementById('Buttonarea');

textarea.addEventListener('input', () => {
    if (textarea.value.trim() === '') {
        button.style.display = 'none';
    } else {
        button.style.display = 'inline'
    }

});

function createDiv() {
    const main_chat = document.getElementById('Mainchat');
    const message = textarea.value.trim()


    if (message !== '') {
        const div_user = document.createElement('div');
        div_user.classList.add('user__message')
        const area_text = textarea.value
        div_user.textContent = area_text;
        main_chat.appendChild(div_user);
        main_chat.scrollTop = main_chat.scrollHeight;
    }
    else {
        textarea.focus();
    }
}
const createDivButton = document.getElementById('Buttonarea');
createDivButton.addEventListener('click', createDiv);