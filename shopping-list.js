'use strict';
$(function() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const entryValue = $('.js-shopping-list-entry').val();

    $('.js-shopping-list-entry').val('');

    $('.shopping-list').append(
      `<li>
        <span class="shopping-item">${entryValue}</span>
        <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
                <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
                <span class="button-label">delete</span>
            </button>
        </div>
       </li>`);
    });
        $('.shopping-list').on('click','.shopping-item-delete',function(item){
            $(item.target).closest('li').remove()
           });

           $('.shopping-list').on('click','.shopping-item-toggle',function(item1){
               $(item1.target).closest('li').toggleClass('shopping-item__checked')
           })
    })

