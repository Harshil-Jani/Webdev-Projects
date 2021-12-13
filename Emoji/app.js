const before = document.querySelectorAll('.closed');
const after = document.querySelectorAll('.open');

for (let i = 0; i < before.length; i++) {
    before[i].addEventListener('click', () => {
        if (after[i].classList.contains('open')) {
            after[i].classList.add('active');
            before[i].classList.remove('active');
        }
    });

    after[i].addEventListener('click', () => {
        if (before[i].classList.contains('closed')) {
            before[i].classList.add('active');
            after[i].classList.remove('active');
        }
    });

}