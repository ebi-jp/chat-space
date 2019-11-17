$(function(){
  function buildHTML(message){
    var addImage = message.image? `<img class ="lower-message__image", src="${message.image}">`: '' ;
    var html = `<div class="message">
                  <div class="upper-message">
                  <div class="upper-message__user-name">
                  ${message.user_name}
                  </div>
                  <div class="upper-message__date">
                  ${message.created_at}
                  </div>
                  </div>
                  <div class="lower-message">
                  ${addImage}
                  <p class="lower-message__content">
                  ${message.content}
                  </p>
                  </div>
                  </div>`
                return html;
                
  }

  $('#new_message').on('submit', function(e){
    //id= new_message のHTML要素が送信アクションを行ったら
    e.preventDefault();
    var formData = new FormData(this);
    //変数formDataに右側を代入してる
    var url = $(this).attr('action');
    //対象要素.attr( 属性, （変更する値）
    $.ajax({     //非同期（Asynchronous）でページ内容を更新する技術
      url: url,
      method: "POST",
      data: formData,  //フォームのデータの送信に使用 
      dataType: "json",
      processData: false,  //dataに指定したオブジェクトをクエリ文字列   formdataを使った時はfalseになる
      contentType: false  //サーバにデータのファイル形式を伝えるヘッダ  formdataを使った時はfalseになる
    })
    .done(function(message){
      var html = buildHTML(message);
      $('.messages').append(html); //セレクタの中身を動かすをイメージして指定する
      $('.messages').animate({scrollTop : $('.messages')[0].scrollHeight},'fast');
      //スクロールする かセレクタ指定ミス $('要素名').animate({'動かすプロパティ' : '動かす縦横の幅'});
        
          $('#new_message')[0].reset();

        //送信した後に中身をからにする
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
  });
  })
})




