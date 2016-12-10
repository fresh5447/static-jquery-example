$('.alert-btn').click(function(){
  var name = $('.name-input').val();
  $('.name-output').text(name);
  $('.name-input').val('');
});
