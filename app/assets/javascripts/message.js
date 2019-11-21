$(function(){

  function buildHTML(message){
    var addImage = message.image? `<img class ="lower-message__image", src="${message.image}">`: '' ;
    var html = `<div class="message" data-message_id="${message.id}">
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

  // var buildMessageHTML = function(message) {
  //   if (message.content && message.image.url) {
  //     //data-idが反映されるようにしている
  //     var html = `<div class="message" data-id= "${message.id}>
  //                   <div class="upper-message">
  //                     <div class="upper-message__user-name">
  //                       ${message.user_name}
  //                     </div>
  //                     <div class="upper-message__date">
  //                       ${message.created_at}
  //                     </div>
  //                   </div>
  //                   <div class="lower-message">
  //                     <p class="lower-message__content">
  //                       ${message.content}
  //                     </p>
  //                     <img src="${message.image.url}" class="lower-message__image" >
  //                   </div>
  //                 </div>`
  //   } else if (message.content) {
  //     //同様に、data-idが反映されるようにしている
  //     var html = `<div class="message" data-id=${message.id}>
  //                 <div class="upper-message">
  //                   <div class="upper-message__user-name">
  //                     ${message.user_name}
  //                   </div>
  //                   <div class="upper-message__date">
  //                     ${message.created_at}
  //                   </div>
  //                 </div>
  //                 <div class="lower-message">
  //                   <p class="lower-message__content">
  //                     ${message.content}
  //                   </p>
  //                   </div>
  //               </div>`
  //   } else if (message.image.url) {
  //     //同様に、data-idが反映されるようにしている
  //     var html = `<div class="message" data-id=${message.id} >
  //                 <div class="upper-message">
  //                   <div class="upper-message__user-name">
  //                     ${message.user_name}
  //                   </div>
  //                   <div class="upper-message__date">
  //                     ${message.created_at}
  //                   </div>
  //                 </div>
  //                 <div class="lower-message">
  //                   <img src="${message.image.url}" class="lower-message__image" >
  //                 </div>
  //               </div>`
  //   };
  //   return html;
  // };

    var reloadMessages = function() {
      if (window.location.href.match(/\/groups\/\d+\/messages/)){
      //カスタムデータ属性を利用し、ブラウザに表示されている最新メッセージのidを取得
       var last_message_id = $('.message').last().data('message_id');
      $.ajax({
        //ルーティングで設定した通り/groups/id番号/api/messagesとなるよう文字列を書く
        url: "api/messages",
        //ルーティングで設定した通りhttpメソッドをgetに指定
        type: 'GET',
        dataType: 'json',
        //dataオプションでリクエストに値を含める
        data: {id: last_message_id}
      
      })
      .done(function(messages) {
        //追加するHTMLの入れ物を作る
        var insertHTML = '';
        // console.log(messages)
        //配列messagesの中身一つ一つを取り出し、HTMLに変換したものを入れ物に足し合わせる
        messages.forEach(function (message) {
          // メッセージが入ったHTMLを取得
          
          // console.log(message);
          insertHTML = buildHTML(message);
          $('.messages').append(insertHTML);
        //メッセージを追加
        $('.messages').animate({scrollTop : $('.messages')[0].scrollHeight},'fast');
        })
      })
      .fail(function() {
          alert("失敗しました")
    });
  }
  }
  setInterval(reloadMessages, 5000);
});




