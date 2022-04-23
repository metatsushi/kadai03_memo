//画面をロードすると、既存のメモがNavに格納される 
let itemLen = localStorage.length;
console.log(itemLen);
for(let i =0; i<itemLen; i++) {
    $('#navigation').append(`
        <div class="navList">
            <i id="navIcon" class="bi bi-triangle-fill"></i>
            <p id="navTitle${i}" class="navTitle"></p>
            <i id="navAddPage" class="bi bi-plus-square"></i>      
        </div>
        `);
    localStorage.getItem(localStorage.key(i))
    $(`#navTitle${i}`).html(localStorage.key(i));
}   
    
//New Pageボタンを押すと新しいメモ（タイトル・ノートが空に）になる
$('#new-page').on('click', function(){
    $('#title').val(''); //タイトルをNullに戻す
    $('#note').val('');  //ノートをNullに戻す
    $('#note').removeClass('existing') //もしその前が既存のメモならexistingクラスを外す
    $('#title').focus(function (e) {  //カーソルをタイトルに合わせる
        e.preventDefault();      
    });
})

// Saveを押した時のアクション
let j =itemLen;
$("#save").on("click",function(){ 
    let title =$("#title").val(); //タイトルの中身を取得
    let note =$("#note").val();    //ノートの中身を取得
    
    // 既存のメモの場合は、既存のIDに上書き保存する
    if($('#note').hasClass('existing')) {
        localStorage.setItem(title,note); //タイトル名でノートの中身を保存
        $('.editing').html(title); //ナビゲーション上の見出しを上書き
    } else {
    // 未Saveのメモの場合は新しいIDをつけてSaveする

    j++
    $('#navigation').append(`
        <div class="navList">
            <i id="navIcon" class="bi bi-triangle-fill"></i>
            <p id="navTitle${j}" class="navTitle"></p>
            <i id="navAddPage" class="bi bi-plus-square"></i>      
        </div>
        `); //ナビゲーション部分にタイトル行を追加
    localStorage.setItem(title,note);
    $(`#navTitle${j}`).html(title);
    }
})

// ナビゲーション上のタイトルを押した時のアクション
$(document).on('click','.navTitle',function(){
    let key   = $(this).html();
    let value = localStorage.getItem(key);

    $('#title').val(key);  //Local storageのタイトルをテキストエリアに展開
    $('#note').val(value); //Local storageのメモをテキストエリアに展開
    $(this).addClass('editing'); //上書き保存できるように呼び出したメモにEditing(編集中）タグをつける
    $('.navTitle').not(this).removeClass('editing'); //編集中以外のメモからEditingタグを外す
    $('#note').attr('class','existing'); //ナビゲーションから呼び出す場合は既存(existing)フラグつける

    })

//Deleteを押した時のアクション
$("#clear").on('click',function(){
    alert('クリックされました');
    localStorage.clear();
});

// ナビゲーション上のnavIcon(▶︎）を押した時のアクション
// $(document).on('click','.navIcon',function(){
//     $(this).addClass('active');
//     $(this).next('div').slideToggle();
//         });
    



	






