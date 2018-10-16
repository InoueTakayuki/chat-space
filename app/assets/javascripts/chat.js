$(function(){
  function buildHTML(message){
　　　if (message.image !== null) {
      img = `<img src="${message.image}">`
    } else {
      img = ""
    }
    console.log(img)
    var html =`
    <div class="text-contents">
      <div class="name-day">
        <div class="name">
          <p>${message.name}</p>
        </div>
        <div class="day">
          <p>${message.time}</p>
        </div>
        <div class="text-form">
          <p class="lower-message__content">
          ${message.content}
          </p>
          ${img}
        </div>
      </div>
    </div>`
    return html;
  }
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html)
      $('.form__message').val('')
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(){
      alert('error')
    })
  })
});
