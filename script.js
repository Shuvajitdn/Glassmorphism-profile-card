document.querySelector('.message-btn').addEventListener('click', () => {
    document.getElementById('contactModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('contactModal').style.display = 'none';
});
