// Load Font Awesome icons
document.write('<script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"><\/script>');

function showService(index) {
    const buttons = document.querySelectorAll('.tab-button');
    const panels = document.querySelectorAll('.panel');
    const line = document.querySelector('.tabs .line');

    buttons.forEach(button => button.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    buttons[index].classList.add('active');
    panels[index].classList.add('active');

    const activeButton = buttons[index];
    const buttonHeight = activeButton.offsetHeight;
    const buttonTop = activeButton.offsetTop;

    line.style.height = `${buttonHeight}px`;
    line.style.top = `${buttonTop}px`;
    line.style.backgroundColor = '#64ffda';
}

function activateTab(clickedTab) {
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');  // Remove active class from all buttons
    });
    clickedTab.classList.add('active');  // Add active class to clicked button
}




