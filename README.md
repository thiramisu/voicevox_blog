# VOICEVOX BLOG

VOICEVOX の公式サイトのリポジトリです。  
https://voicevox.hiroshiba.jp/

## 環境構築

Node v18.13.0、npm v8.19.3 を用いて開発されています。

```bash
npm ci
```

## ローカル環境でチェック

```bash
npm run develop
```

もしくは

```bash
npm run build && npm run serve
```

### 実験モード

コードは実装したいけど、デザインや調整などの課題があってまだサイトに反映できていない実験的なコードがいくつかあります。
実験的なコードを反映した見た目を確認する際は、`.env.development`ファイルで`GATSBY_VOICEVOX_EXPERIMENTS=true`を指定してください。

## deploy

```bash
npm run deploy
```

### プレビュー版

[プレビュー版ページ](https://preview--voicevox.netlify.app/)

Netlify を使ってプレビュー環境デプロイを行っています。
`preview`ブランチに push すると、Netlify のプレビュー環境にデプロイされます。

```bash
# ビルド
npm run preview-build
```

## add resource

```bash
editor_tag="0.14.7"
editor_url="https://raw.githubusercontent.com/VOICEVOX/voicevox/$editor_tag"

resource_tag="0.14.3"
resource_url="https://raw.githubusercontent.com/VOICEVOX/voicevox_resource/$resource_tag"

# 規約
curl -s "$resource_url/editor/README.md" > src/markdowns/softwareReadme.md

# 使い方
curl -s "$editor_url/public/howtouse.md" > src/markdowns/howToUse.md
sed -r 's|src="([^"]+?)"|src="'$editor_url'/public/\1"|g' -i src/markdowns/howToUse.md

# Q&A
curl -s "$editor_url/public/qAndA.md" > src/markdowns/qAndA.md

# 変更履歴
curl -s "$editor_url/public/updateInfos.json" > src/data/updateInfos.json
```

## 音量に関して

ffmpeg で音量を調べて、だいたい LUFS 値が -20~-23 になるように調整しています。

```bash
# 音量を調べる
audio_file=audio.wav
ffmpeg -nostats -i $audio_file -filter_complex ebur128 -f null - </dev/null 2>&1 |
  grep -3 "Integrated loudness:" |
  grep "I:" |
  tail -n1

# 音量を調整する（例えば -17 LUFS を -20 LUFS くらいにしたい場合は volume=-3dB にする）
audio_file=audio.wav
output_file=output.wav
ffmpeg -i $audio_file -af volume=-3dB $output_file
```

## サムネイル生成

一部のサムネイルは HTML をレンダリングしたものを画像化しています。
次のコマンドで更新してください。

```bash
# 起動
npm run develop

# しばらくしてから実行
cd generateThumb
npm ci
npm run generateThumb
```

## タイポチェック

[typos](https://github.com/crate-ci/typos) を使ってタイポのチェックを行っています。
[typos をインストール](https://github.com/crate-ci/typos#install) した後

```bash
typos
```

## LICENSE

VOICEVOX の開発のための利用のみ許可されます。  
異なるライセンスを取得したい場合は、ヒホ（twitter: @hiho_karuta）に求めてください。

## 謝辞

`src/images/nc238325.jpg` ･･･ https://commons.nicovideo.jp/material/nc238325
