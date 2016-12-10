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
      $('.city-text').html('');
      var city = data.results;
      for (var i = 0; i < city.length; i++) {
        var place = city[i].city;
        $('.city-text').append('<p>' + place + '</p>')
      }
    },
    dataType: 'jsonp',
  });
})
