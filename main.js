$('.alert-btn').click(function(){
  var name = $('.name-input').val();
  $('.name-output').text(name);
  $('.name-input').val('');
});


$('.cities-btn').click(function(){
  $('.city-text').text('loading....');
  $.ajax({
    type: 'GET',
    url: 'https://api.meetup.com/2/cities',
    success: function(data){
      $('.city-text').text(JSON.stringify(data));
    },
    dataType: 'jsonp',
  });
})
