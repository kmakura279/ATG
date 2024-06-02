document.querySelectorAll('.close').forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.parentElement.style.display = 'none';
    });
});


document.querySelector('#signupBtn').addEventListener('click', () => {
    document.querySelector('#signupModal').style.display = 'flex';
});
