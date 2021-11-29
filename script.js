var date = moment().format( 'dddd MMM Do, YYYY' );
$('#currentDay').text(date);

var storedEvent = JSON.parse(localStorage.getItem('storedEvent'));
var actTime;
var stopEvent;
var time;

function init() {

    for ( var i=9; i<=17; i++) {

        actTime = '#' + [i];
    
        $(actTime).on('click', function(event) {
          if (event.target.any == 'material-icons unsaved') {
            event.target.any = 'material-icons saved';
            stopEvent =  $(event.target).parent().siblings().children().val();
            time = $(event.target).parent().parent().attr('id');
            localStorage.setItem(time, stopEvent);
          } 
          else if (event.target.any == 'material-icons saved') {
            event.target.any = 'material-icons unsaved';
            stopEvent =  $(event.target).parent().siblings().children().val();
            time = $(event.target).parent().parent().attr('id');
            localStorage.removeItem(time);
          };
        });

        $(actTime).children().siblings().eq(2).children('.description').val(localStorage.getItem(i));
        
        if (localStorage.getItem(i) != null) {

            $(actTime).children().siblings().eq(3).children(i).removeClass('material-icons unsaved');
            $(actTime).children().siblings().eq(3).children(i).addClass('material-icons saved');
            console.log($(actTime).children().siblings().eq(3).children(i));
        };
    };

};

// Couldn't figure out how to get the background to display different colors depending on the time