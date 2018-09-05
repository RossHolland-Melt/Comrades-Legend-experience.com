
$(document).ready(function () {


    //SCROLLING NAVIGATION
    var scrollLink = $('.scroll');


    //Smooth scrolling
    scrollLink.click(function (e) {
        e.preventDefault;
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 2000)

    });

//////////////////////////////////////////////////////////////////////////////
    //STICKY NAV///////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////
    $(window).scroll(function () { 

      //  console.log($(window).scrollTop());
    
        if ($(window).scrollTop() > 899) {
          $('nav').addClass('sticky');
        }
    
        if ($(window).scrollTop() < 899) {
          $('nav').removeClass('sticky');
        }
      });
///////////////////////////////////////////////////////////////////////
//IMAGE GALLARY SLIDER ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
$('.next').on('click',function(){

var currentImg = $('.active');
var  nextImg = currentImg.next();

if(nextImg.length){
currentImg.removeClass('active').css('z-index',-10);
nextImg.addClass('active').css('z-index',10);

}


});

 
$('.prev').on('click',function(){

var currentImg = $('.active');
var  prevImg = currentImg.prev();

if(prevImg.length){
currentImg.removeClass('active').css('z-index',-10);
prevImg.addClass('active').css('z-index',10);

}


});










$('.next-bruce').on('click',function(){

    var currentImg = $('.active-bruce');
    var  nextImg = currentImg.next();
    
    if(nextImg.length){
    currentImg.removeClass('active-bruce').css('z-index',-10);
    nextImg.addClass('active-bruce').css('z-index',10);
    
    }
    
    
    });
    
     
    $('.prev-bruce').on('click',function(){
    
    var currentImg = $('.active-bruce');
    var  prevImg = currentImg.prev();
    
    if(prevImg.length){
    currentImg.removeClass('active-bruce').css('z-index',-10);
    prevImg.addClass('active-bruce').css('z-index',10);
    
    }
    
    
    });






////////////////////////////////////////////////////////////////////////////////
// ITEN SLIDER///////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////


// next slide
$('#right-arrow').click(function(){
var currentSlide =$('.slide.active-slide');
var nextSlide = currentSlide.next();

currentSlide.fadeOut(500).removeClass('active-slide');
nextSlide.fadeIn(500).addClass('active-slide');

if(nextSlide.length==0){
$('.slide').first().fadeIn(500).addClass('active-slide');

}



});

// Previous slide
$('#left-arrow').click(function(){
var currentSlide =$('.slide.active-slide');
var prevSlide = currentSlide.prev();

currentSlide.fadeOut(500).removeClass('active-slide');
prevSlide.fadeIn(500).addClass('active-slide');

if(prevSlide.length==0 ){
$('.slide').last().fadeIn(500).addClass('active-slide');

}



});



});

