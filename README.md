# Next.js 学習用

## 各ディレクトリ、ファイル

- **src/app**
  - **layout.tsx:** アプリケーション全体のレイアウトを定義。ナビゲーションバーやフッターなど、共通のUIコンポーネントをここに配置
  - **page.tsx:** ルートパス（/）に対応するページコンポーネント
  - **about/ や dashboard/:** サブディレクトリごとにページコンポーネントを配置。これにより、ネストされたルートを簡単に構築できる
- **public/**
  - 静的ファイル（画像、フォント、アイコンなど）を配置。/public フォルダ内のファイルは、ルートパスから直接アクセス可能
- **styles/**
  - グローバルなスタイルシートや CSS モジュールを配置
- **next.config.js:**
  - Next.js の設定ファイル。カスタム設定やプラグインの導入に使用
- **tsconfig.json:**
  - TypeScript の設定ファイル。プロジェクト全体の TypeScript の設定を管理
- **package.json:**
  - プロジェクトの依存関係やスクリプトを管理

## Tailwind CSS

[Install Tailwind CSS with Create React App](https://tailwindcss.com/docs/guides/create-react-app)
