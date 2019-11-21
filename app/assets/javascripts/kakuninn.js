// $('#new_message').on('submit', function(e){
//   //id= new_message のHTML要素が送信アクションを行ったら
//   e.preventDefault();
//   var formData = new FormData(this);
//   //変数formDataに右側を代入してる
//   var url = $(this).attr('action');
//   //対象要素.attr( 属性, （変更する値）
//   $.ajax({     //非同期（Asynchronous）でページ内容を更新する技術
//     url: url,
//     method: "POST",
//     data: formData,  //フォームのデータの送信に使用 
//     dataType: "json",
//     processData: false,  //dataに指定したオブジェクトをクエリ文字列   formdataを使った時はfalseになる
//     contentType: false  //サーバにデータのファイル形式を伝えるヘッダ  formdataを使った時はfalseになる
//   })
//   .done(function(message){
//     var html = buildHTML(message);
//     $('.messages').append(html); //セレクタの中身を動かすをイメージして指定する
//     $('.messages').animate({scrollTop : $('.messages')[0].scrollHeight},'fast');
//     //スクロールする かセレクタ指定ミス $('要素名').animate({'動かすプロパティ' : '動かす縦横の幅'});
      
//         $('#new_message')[0].reset();

//       //送信した後に中身をからにする
//     $('.form__submit').prop('disabled', false);
//   })
//   .fail(function() {
//     alert("メッセージ送信に失敗しました");
// });
// })

// var reloadMessages = function() {
//   if (window.location.href.match(/\/groups\/\d+\/messages/)){
//     last_message_id = $('.message:last').data("id");
//     $.ajax({
//       url: "api/messages",
//       type: 'GET',
//       dataType: 'json',
//       data: {id: last_message_id}
//     })
//     .done(function(messages) {
//       var insertHTML = '';
//       messages.forEach(function (message) {
//       insertHTML = buildHTML(message);
//       $('.messages').append(insertHTML); 
//       $('div').animate({scrollTop: $('.messages').height()})
//       })
//     })
//     .fail(function() {
//       alert('更新に失敗しました');
//     });
//   };
// } 
// setInterval(reloadMessages, 5000); 




// .done(function (messages) {
//   if (messages.length) {
//     // サイドメニュー（グループ）の最新メッセージ更新
//     latestMessageBody = messages[messages.length - 1].body;
//     latestMessage = latestMessageBody.length ? latestMessageBody : "画像が投稿されています";
//     $("#group__" + groupId[0] + "> .chat-nav__group__list__new-message").html(latestMessage);
//     // 最新メッセージ・イメージの追加
//     messages.forEach(function (message) {
//       messageContent = buildHTML(message);
//       $(".chat__body").append(messageContent);
//     });
//     $(".chat__body").animate({ scrollTop: $(".chat__body")[0].scrollHeight }, "fast");
//   }
// })