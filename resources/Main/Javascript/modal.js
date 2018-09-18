//CONTACT MODAL

// open contact modal/////////////////////////////////////////////////////////////////////////////

document.getElementById('contactModalBtn').addEventListener('click', function (e) {
    document.querySelector('.modal-contact').style.display = 'flex';
    e.preventDefault;

});


document.getElementById('contactModalBtn2').addEventListener('click', function (e) {
    document.querySelector('.modal-contact').style.display = 'flex';
    e.preventDefault;
});



// close contact modal
document.querySelector('.closeBtn').addEventListener('click', function () {
    document.querySelector('.modal-contact').style.display = 'none';

});

///////////////////////////////////////////////////////////////////////////////////////////////////////
//BARRY HOLLAND REVCORDS MODAL/////////////////////////////////////////////////////////////////////////

document.getElementById('barryModalBtn').addEventListener('click', function (e) {
    document.querySelector('.modal-barry').style.display = 'flex';
    e.preventDefault;

});

document.querySelector('.closeBtn-barry').addEventListener('click', function () {
    document.querySelector('.modal-barry').style.display = 'none';

});
 


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//BARRY HOLLAND REVCORDS MODAL/////////////////////////////////////////////////////////////////////////

document.getElementById('bruceModalBtn').addEventListener('click', function (e) {
    document.querySelector('.modal-bruce').style.display = 'flex';
    e.preventDefault;

});

document.querySelector('.closeBtn-bruce').addEventListener('click', function () {
    document.querySelector('.modal-bruce').style.display = 'none';

});

///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//SIGN UP  MODAL/////////////////////////////////////////////////////////////////////////

document.getElementById('signUpModalBtn').addEventListener('click', function (e) {
    document.querySelector('.modal-signup').style.display = 'flex';
    e.preventDefault;

});

document.querySelector('.closeBtn-signup').addEventListener('click', function () {
    document.querySelector('.modal-signup').style.display = 'none';

});

///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////