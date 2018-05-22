# todoapp-angular-electron  
angular + electronでtodoアプリを作りました。

<img src="https://lh3.googleusercontent.com/0uCaGshs8nix05k9ULbUJHa1nYoeaYcLMypYgxomdB99JtEn8DeKwpjZg_nFYsKCTxicFnL1VSgtbHDF5hsMNI8z89yurcKpPXVXngQy-AL7Op_3z9W-Fyhs-nbKfkdqMMFl28kBHk_JhRHWxxALIjAqavPwG0ITU5NRFukrWWk54kV8kjJnRE2KIYGTO_Cl1zRe3v4WkTFnbJAXFpVpjnwda3Wo-kamhvLaQYzEw6sAG_a6MHsJGDeuh9LHHxECiIxvpxa-sxEeRZsZp7y3ajU6qBmya_BUMQ7T9ISXbiM5PTRlL1ij3QkLSerODefS1ZBA2gLBYTNCoRgS4WagD2BOgemjWguMcQbNVI4v-l7XSf_M35A_ba3_Us0zR-lYfhFwEB2yzh2lmUqoHfUM4CfPhOYI1Ys1qFNIwrc6xx3IsRiUM5RUqqfypFBVtHNrzvr9JWSaf5sIb3PXyCER3qHr_UHdXkIBTFj5s1dUR5uGirzALQ8LtVcwUdPlPiozQJO0QKQxyUk4zICMsBN9p7PzZmqZnf-PdjKiRUX0605S2AS3TFAJv_Zre1bcdwEYLmaEKn0tH4eO6_CXlFxGIPWsDxnqdnmBwQjobdMGX2echJC1zwuEYoWY6DuRo-F_dNJB2Uoce1P5pLmRNymaIX4QhiANaUIT=w479-h733-no" width="300">

## 機能
タスクを書いて、ボタンを押すと下の一覧に追加されます。
一覧項目は×で消して、左のチェックボタンで終わったものを閉じて取り消し線をつけとけます。
localstrageを使用しているので、タスクは半永久的に残ります。

### ファイル出力
デスクトップ版のみoutfileボタンで todo_yyyymmdd.txt ファイルがexeと同じ階層に作られます。

## webで動かす
ソースのカレントディレクトリに移動して、 `ng serve` を実行します。
通常のangularで動かす時と同じように動きます。

## desktopで動かす
ソースのカレントディレクトリに移動して、下記コマンドを実行後 `electron .` を実行します。
詳しくはangular-electronのリポジトリを参照ください。

linux
```
npm run electron:mac
```

windows
```
npm run electron:windows
```

mac
```
npm run electron:mac
```
