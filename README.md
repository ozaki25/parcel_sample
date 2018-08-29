### Overview

- jquery + bootstrapを使ったアプリのjs/cssをES2015/SCSSで書きたい
- js/cssを各1つのファイルにまとめて出力し、それを別プロジェクトで取り込んで利用する

### Get Started

```bash
git clone https://github.com/ozaki25/parcel_sample
cd parcel_sample
yarn
// or
npm i
```

### CLI

#### dev

- devモードでbundleする
- 対象ファイルを監視するので、変更を検知して自動でbundleが実行される
- エントリーポイントとなるファイルはjsは`src/js`、cssは`src/css`直下に配置する
- アウトプットはdist配下

```bash
yarn dev
// or
npm run dev
```

#### build

- prodモードでbundleする
- エントリーポイントとなるファイルはjsは`src/js`、cssは`src/css`直下に配置する
- アウトプットはdist配下

```bash
yarn build
// or
npm run build
```

#### lint:css

- stylelintを実行する

```bash
yarn lint:css
// or
npm run lint:css
```

#### format:css

- cssに対してprettierを実行する

```bash
yarn format:css
// or
npm run format:css
```

#### lint:js

- eslintを実行する

```bash
yarn lint:js
// or
npm run lint:js
```

#### format:js

- jsに対してprettierを実行する

```bash
yarn format:js
// or
npm run format:js
```

### Improvement

- format -> lintの順に実行すると良い
- precommitを使って自動実行させてもいいかも

```bash
yarn add -D lint-staged husky
```

```json
{
  "scripts": {
    // ...
    "precommit": "lint-staged"
  },
  "lint-staged": {
    "src/**/*.js": [
      "prettier-eslint --write",
      "git add",
      "eslint"
    ],
    "src/**/*.scss": [
      "prettier-stylelint --write",
      "git add",
      "stylelint"
    ]
  },
}
```

### Example

- hello.html / world.htmlをブラウザで開くと動く
    - それぞれdist配下のファイルを読み込んでる

```bash
yarn dev
// or
npm run dev

npm i -g serve
serve .
// open http://localhost:5000/hello.html
```

### Customize

- package.jsonのscriptを好きなように変えて下さい
    - entry point とか output dir とか




