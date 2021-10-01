var date = moment().format( 'dddd MMM Do, YYYY' );
$('#currentDay').text(date);

var storedEvent = JSON.parse(localStorage.getItem('storedEvent')) || [];
var indexTime;
var eventBlock;
var time;

function init() {

    timeColor();

    for ( var i=9; i<=17; i++) {

        indexTime = '#' + [i];
    
        $(indexTime).on('click', function(event) {
          if (event.target.className == 'material-icons unsaved') {
            event.target.className = 'material-icons saved';
            eventBlock =  $(event.target).parent().siblings().children().val();
            time = $(event.target).parent().parent().attr('id');
            localStorage.setItem(time, eventBlock);
          } else if (event.target.className == 'material-icons saved') {
            event.target.className = 'material-icons unsaved';
            eventBlock =  $(event.target).parent().siblings().children().val();
            time = $(event.target).parent().parent().attr('id');
            localStorage.removeItem(time);
          };
        });

        $(indexTime).children().siblings().eq(2).children('.description').val(localStorage.getItem(i));
        
        if (localStorage.getItem(i) != null) {

            $(indexTime).children().siblings().eq(3).children(i).removeClass('material-icons unsaved');
            $(indexTime).children().siblings().eq(3).children(i).addClass('material-icons saved');
            console.log($(indexTime).children().siblings().eq(3).children(i));
        };
    };

};

// Couldn't figure out how to get the background to display different colors depending on the time