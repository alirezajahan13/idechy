var $ = jQuery;

let functionIsRan = false;

function stepCounter(elementSelector , currentNumber ,endNumber , stepNumber , totalTime){
    let theIntervals = Math.round(totalTime/(endNumber/stepNumber));
    let mainAction = setInterval(() => {
        if(currentNumber<endNumber){
            $(elementSelector).text(currentNumber);
            currentNumber+=stepNumber;
        }
        else{
            $(elementSelector).text(endNumber);
            clearInterval(mainAction);
        }
    }, theIntervals);

}

$(document).ready(function(){
    $('p:empty').remove();

    if($("#counterNumbers").length) {
        // console.log('counter');
        $(window).scroll(function(){
            let windowBottom = $(window).scrollTop() + $(window).outerHeight(true);
            let objectCenter = $('#counterNumbers').offset().top + ($('#counterNumbers').outerHeight(true)/2);
            if(windowBottom > objectCenter && functionIsRan==false){
                stepCounter('#counter-1', 1 , 10 , 1 , 800);
                stepCounter('#counter-2', 1 , 420 , 40 , 1200);
                stepCounter('#counter-3', 1 , 55 , 5 , 1000);
                stepCounter('#counter-4', 1 , 410 , 40 , 1200);
                functionIsRan = true;
            }
        });    
    };

    $('.searchIcon').click(function(){
        $('.searchParent').slideDown(300);
        $('.searchOverlay').slideDown(300);
        });
        $('.closeIcon').click(function(){
            $('.searchParent').slideUp(300);
            $('.searchOverlay').slideUp(300);
        });
        $('.closeBtn').click(function(){
            $('.searchParent').slideUp(300);
            $('.searchOverlay').slideUp(300);
        })
        $('.searchOverlay').click(function(){
            $('.searchParent').slideUp(300);
            $('.searchOverlay').slideUp(300);
        });
        let currentUrl = window.location.href;
        $('.categoryItem').each(function() {
            let categoryUrl = $(this).attr('href');
            if (currentUrl === categoryUrl) {
            $(this).addClass('activeCategory');
            return false;
            }
        });
        
});