var $ = jQuery;


$(window).on('scroll' , function(){
    if($(document).scrollTop() >= 130){
        $('.stickyHeaderParent').addClass('showStickyHeader');
    }
    else{
        $('.stickyHeaderParent').removeClass('showStickyHeader');
    }
});