
$(document).ready(function() {
function layout() {
    var dayHeight = $('.day__body').height(),
      dayWidth = $('.day__body').width(),
      eventWidth = $('.event-item').width(),
      eventHeight = $('.event-item').height();

    $('.day').each(function() {
      var eventCount = $(this).find('.event-item').length;
      if (eventCount < 2) {
        for (var i = eventCount; i <= eventCount; i++) {
          $(this).find('.event-item').css({
            'width': ((dayWidth / 1) * 100) / dayWidth + "%",
            'height': ((dayHeight / 1) * 100) / dayHeight + "%",
            'font-size': parseInt(((dayWidth / 1) * 100) / dayWidth / 1.8)
          });
        }
      } else if (eventCount > 1 && eventCount <= 4) {
        for (var i = eventCount; i <= eventCount; i++) {
          $(this).find('.event-item').css({
            'width': ((dayWidth / 2) * 100) / dayWidth + "%",
            'height': ((dayHeight / 2) * 100) / dayHeight + "%",
            'font-size': parseInt(((dayWidth / 2) * 100) / dayWidth / 1.8)
          });
        }
      } else if (eventCount > 4) {
        for (var i = eventCount; i <= eventCount; i++) {
          $(this).find('.event-item').css({
            'width': ((dayWidth / 3) * 100) / dayWidth + "%",
            'height': ((dayHeight / 3) * 100) / dayHeight + "%",
            'font-size': parseInt(((dayWidth / 3) * 100) / dayWidth / 1.8)
          });
        }
      }
    });

  };
var de = JSON.parse($('textarea').val()); 
 
  $('.btn').on('click', function() {
    $('.event').empty();
    var cDate = new Date($('input').val());
    var cYear = cDate.getFullYear();
       console.log('Current: '+ cDate, cYear, isNaN(cYear));
    
       if(isNaN(cYear)){
        alert("Please enter a valid year");
        return;
       }

  
    for (var k in de) {
      var nd = de[k].birthday;
      var nn = de[k].name.replace(/[^A-Z]/g, '');
      var nDate = new Date(nd);
      var day = nDate.getDay();
      var date = nDate.getDate();
      var month = nDate.getMonth();
      nDate.setFullYear(cYear);
      var newDay = nDate.getDay();

      $('#day-' + newDay).find('.event').append('<div class="event-item">' + nn + '</div>')
      layout();
    }
    $('.event').each(function(){
      if($(this).children().length < 1) {
        $(this).addClass('day--empty');
      }       
    });
  });
});