// Click for left menu
$('.global_block').find('.left_sitebar a').on('click', function () {
   $(this).parent().toggleClass('active');
});
// Click for 2 ul left menu
$('.global_block').find('.left_sitebar a').find('a').on('click', function () {
    $('.global_block').find('.left_sitebar a').find('a').parent().removeClass('active');
    $(this).parent().toggleClass('active');
});
// Click for paginator
$('.global_block').find('.right_block').find('.paginator a').on('click', function () {
    $('.paginator a').removeClass('active');
   $(this).toggleClass('active')
});
// Click for modal popap
$('.header').find('.conection').on('click', function () {
   $('.modal').toggleClass('active');
   $('body').addClass('no_scroll');
   $('.popap').addClass('active');
});
// Click for mask
$('.mask').on('click', function () {
   $(this).parent().removeClass('active');
    $('body').removeClass('no_scroll');
    $('.popap').removeClass('active');
});
// Click for button exit popap
$('.exit').on('click', function () {
    $(this).parent().parent().removeClass('active');
    $('.popap').removeClass('active');
});

// Slider

let array_images = $('.slider').find('.images img');
let left_button = $('.slider').find('.buttons #left_button');
let right_button = $('.slider').find('.buttons #right_button');
let number_slide_active = 0;
array_images[number_slide_active].className += 'active';
if(array_images.length >= 1) {
    for (let i = 1; i < array_images.length; i++) {
        array_images[i].className += 'hide';
    }
}
setInterval(function () {
    if(number_slide_active === array_images.length -1) {
        array_images[array_images.length - 1].classList.remove('active');
        array_images[array_images.length - 1].className += 'hide';
        number_slide_active = 0;
        array_images[number_slide_active].classList.remove('hide');
        array_images[number_slide_active].className += 'active';
        return;
    }
    number_slide_active += 1;
    array_images[number_slide_active -1].classList.remove("active");
    array_images[number_slide_active -1].className += 'hide';
    array_images[number_slide_active].classList.remove('hide');
    array_images[number_slide_active].className += 'active';
}, 4000);
right_button.on('click', function () {
    if(number_slide_active === array_images.length -1) {
        array_images[array_images.length - 1].classList.remove('active');
        array_images[array_images.length - 1].className += 'hide';
        number_slide_active = 0;
        array_images[number_slide_active].classList.remove('hide');
        array_images[number_slide_active].className += 'active';
        return;
    }
    number_slide_active += 1;
    array_images[number_slide_active -1].classList.remove("active");
    array_images[number_slide_active -1].className += 'hide';
    array_images[number_slide_active].classList.remove('hide');
    array_images[number_slide_active].className += 'active';
});

left_button.on('click', function () {
    if(number_slide_active === 0) {
        array_images[array_images.length - 1].classList.remove('hide');
        array_images[array_images.length - 1].className += 'active';
        number_slide_active = array_images.length - 1;
        array_images[0].classList.remove('active');
        array_images[0].className += 'hide';
        return
    }
    number_slide_active -= 1;
    array_images[number_slide_active].classList.remove("hide");
    array_images[number_slide_active].className += 'active';
    array_images[number_slide_active + 1].classList.remove('active');
    array_images[number_slide_active + 1].className += 'hide';
});

