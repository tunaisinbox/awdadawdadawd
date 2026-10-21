// 設定ファイル。index.html(年齢確認)と links.html(リンク集)の両方がここを読みます。
// ※このファイルは公開されます。パスワードやクライアントシークレットは書かないでください。
window.CONFIG = {

  // ===== 年齢確認ページ(index.html) =====

  // 「いいえ」を押したときの移動先
  exitUrl: "https://www.google.com/",

  // URLの # 以降が無い・不正なときの移動先
  noDestUrl: "https://l.tnct.f5.si/",

  // 年齢確認のあとに移動してよいドメイン。空 [] なら http/https の任意のURLを許可。
  // 例: ["example.com", "www.example.com"]
  allowedHosts: [],

  // true にすると、PCのマウスでもスライダーを押さえ続ける必要がある
  // (マウスは1つなので、PCからは「はい」を押せなくなります)
  holdOnMouse: false,


  // ===== リンク集(links.html) =====

  // 年齢確認ページのファイル名(リンク集から飛ぶ先)
  gate: "index.html",

  // Google OAuth のクライアントID(公開されても問題ない値です)
  googleClientId: "1646281798-plm66a2jrrnq0b7o6nm052ospuhaqb3u.apps.googleusercontent.com",

  // リンク集を見られるGoogleアカウントのメールアドレス(大文字小文字は区別しません)
  // ここに書いたアカウントだけが、ログイン後にリンクを見られます。
  allowedEmails: [
    "you@gmail.com"
  ],

  // リンク集に並べるリンク。追加するときは { ... }, の1行をコピーして書き換える。
  // note(説明)は省略できます。
  links: [
    { title: "サイトA", url: "https://example.com/", note: "ここに説明を書けます" },
    { title: "サイトB", url: "https://example.org/", note: "" },
    { title: "サイトC", url: "https://example.net/path/to/page", note: "" }
  ]
};
