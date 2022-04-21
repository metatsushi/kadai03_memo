# kadai03_memo
# 課題3 メモ帳アプリ

## ①課題内容（どんな作品か）
- シンプルなメモ帳を作成

## ②工夫した点・こだわった点
- メモをLocal Storageに保存すると、ナビゲーション側にタイトルのリストが動的に作成されるようにし、
- そのナビゲーションのタイトルリストをクリックすると、Local Storageから呼び出しTextareaに展開されるようにした
- 一度作って保存したメモは、その後更新した場合、新規保存されるのではなく上書きされるようにした
　 （リストから呼び出す際に、リスト側に「編集中」クラスををつけると共に、Textarea側に「既存」クラスをつけることで実現）
- 新しいPageをクリックするとTextareaが今編集中のメモから、新しい空白メモに置き換わるようにした
   
## ③質問・疑問（あれば）
- 特になし

## ④その他（感想、シェアしたいことなんでも）
- CSSはBootstrapを入れるのと、grid形式で記述するとかなり楽になる
- Notionっぽいものを目指したが色々時間切れになってしまったので引き続き作成したい
- ・メモをフォルダ形式でカテゴリごとに下層階層に格納することができるようにする
- ・Bold、Italic、Underline、Hタグ、引用、ハイライトなど、リッチテキスト形式、タブ、インテンドの編集機能
