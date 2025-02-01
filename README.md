# Next.js + TypeScript + Tailwind CSS スターターキット

他ツールとして以下

- ESLint
- Prettier
- Secretlint

## 環境設定の流れ

1. `git clone`

必要に応じて、

- .git
- .next
- .gitignore

あたりを削除

2. `npm install`

3. `npm run dev`

4. `npm outdated` `npm update`

必要に応じて

環境変数の調整、バージョン互換性の確認を行い、必要であればアップデート

```
// レジストリをチェックして、インストールされている（または特定の）パッケージが現在古くなっているかどうかを確認
npm outdated

// tagとsemverを尊重してすべてのpackageを最新バージョンに更新
npm update
```

## ポート番号変更

```
// プロジェクト/package.json

...
  "scripts": {
    "dev": "next dev -p 3335",
    ...
  },
...
```
