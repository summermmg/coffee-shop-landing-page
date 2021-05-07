;(function ($) {
    $(function () {
      // DOM Ready
      // Insert all scripts here
      $('#toggle-open').click(function () {
        $('.nav-mobile-header , .nav-menu').addClass('active')
        
      })
      
      $('#toggle-close').click(function () {
        $('.nav-mobile-header , .nav-menu').removeClass('active')
      })

      $('.navigation a').click(function () {
        $('.nav-mobile-header , .nav-menu').removeClass('active')
      }) 
    })
  })(jQuery)
