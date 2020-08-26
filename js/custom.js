
$(document).ready(function(){
	const show= document.querySelector('.js-count'),
    number= Number(show.innerHTML)+1;
    var counter=0,
    delay=5,
    x=number/2,
    y=0;
    counter_js();
    function counter_js(){
        y++;
        delay=(x-y);
        show.innerHTML=counter.toString();
        counter++;
        if(counter<number){
            setTimeout(function(){
                counter_js();
            },delay)
        }
}
	counter_js();
    $('.accordions_faq').click(function(){
        $('.accordions_faq').parent().find('.active_paraghraph').css('display','none');
    });
    $("#header .top_header .bar_button i").click(function(){
        $(this).css('color','#F00').parents().find("#header .header_nav")
        .addClass('navbar_small_header');
        $('#close_icon').click(function(){
            $(this).css('color','#F00').parents().find("#header .header_nav")
            .removeClass('navbar_small_header');
        })
    }) 
    
   /* $("#header #barButton").click(function(){
        $("#header #barButton").parents().find("#header .header_nav")
        .css("opacity:1","top: -90px;")
    })
*/


$(document).on('scroll', function()
	{
        setHeader();
    });
    function setHeader(){
        if( $(window).scrollTop() > 91 ){
            $(".header_nav").addClass('nav_fixed');
        }
        else{
            $(".header_nav").removeClass('nav_fixed');
        }
    }
    
$("#owl-demo").owlCarousel({
    navigation:true
});
initDeptSlider();
function initDeptSlider()
{
    if($('.dept_slider').length)
    {
        var deptSlider = $('.dept_slider');
        deptSlider.owlCarousel(
        {
            items:4,
            autoplay:true,
            loop:true,
            nav:false,
            dots:false,
            margin:30,
            smartSpeed:1200,
            responsive:
            {
                0:{items:1},
                768:{items:2},
                992:{items:3},
                1200:{items:4}
            }
        });

        if($('.dept_slider_nav').length)
        {
            var next = $('.dept_slider_nav');
            next.on('click', function()
            {
                deptSlider.trigger('next.owl.carousel');
            });
        }
    }
}


})