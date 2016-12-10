$('.alert-btn').click(function(){
  var name = $('.name-input').val();
  alert("Hey " + name);
  $('.name-input').val('');
});
