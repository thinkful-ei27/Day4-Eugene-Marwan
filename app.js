function catClicks() {
    $('.thumbnail').on('click',function(event) {
      const targetCat = $(event.currentTarget).find('img').attr('src');
      const otherCat = $(event.currentTarget).find('img').attr('alt');
      $('.hero img').attr('src', targetCat).attr('alt', otherCat);
    });
  }
  
  $(catClicks)