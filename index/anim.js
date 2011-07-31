$(document).ready(function(){
    $(".idea:even").addClass('evens');
    $(".idea:odd").addClass('odds');
    
  /*   $('#container').masonry({
        // options
        itemSelector : '.idea',
        columnWidth : 100
      });
    */  

   $.localScroll({
         axis:'xy',
     //    hash: true,
     //    margin: true,
         offset: {left:-400, top:-250 }
         });
         
    $("a").click( function() {
        $('div.selected').removeClass('selected');
        anchor = $(this).attr("href").replace('#','');
        $('a[name="' + anchor + '"]').parent().toggleClass('selected', 200);
    });
      
});