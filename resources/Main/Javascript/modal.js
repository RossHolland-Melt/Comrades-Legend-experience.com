// open contact modal
document.getElementById('contactModalBtn').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'flex';

});

// close contact modal
document.querySelector('.closeBtn').addEventListener('click', function () {
    document.querySelector('.modal').style.display = 'none';
});
