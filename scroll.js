// $('.snap-wrapper').on('scroll', function (e) {
//     var $this = $(this),
//         $items = $(".snap-wrapper"),
//         scrollPosition = $this.scrollTop();

//     // Scrolling down
//     if (scrollPosition > ($this.data('scroll-position') || 0)) {
//         var threshold = $items.height() - $this.height() - $('#media').height();
      
//       	if (scrollPosition > threshold) {
//           	var $firstResult = $('header');
//             $items.append($firstResult);
//           	scrollPosition -= $firstResult.height();
//             $this.scrollTop(scrollPosition);
//         }
//     }
//   	$this.data('scroll-position', scrollPosition)
// });