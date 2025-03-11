import nextJest from 'next/jest.js';

import type { Config } from 'jest';

const createJestConfig = nextJest({
  // next.config.jsと.envファイルを読み込むためのNext.jsアプリのパス
  dir: './',
});

// Jestに渡すカスタム設定
const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // テスト実行前の追加設定
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

// createJestConfigはNext.jsの設定を非同期で読み込めるようにエクスポートする必要があります
export default createJestConfig(config);
