import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import HelloWorld from '@/components/HelloWorld';

// 基本的なレンダリングテスト
// test('renders Hello, World!', () => {
//   render(<HelloWorld />); // コンポーネントを仮想 DOM にレンダリング
//   // screen.getByText 特定のテキストを持つ要素を検索
//   // toBeInTheDocument 要素がDOMに存在するか確認
//   expect(screen.getByText('Hello, World!')).toBeInTheDocument();
// });

// テストのグループ化
describe('Hello World レンダリングテスト', () => {
  // 基本的なレンダリングテスト
  test('要素がレンダリングされているか', () => {
    render(<HelloWorld />); // コンポーネントを仮想 DOM にレンダリング
    // screen.getByText 特定のテキストを持つ要素を検索
    // toBeInTheDocument 要素がDOMに存在するか確認
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});

describe('Hello World スナップショットテスト', () => {
  // コンポーネントの出力が期待通りかどうかを検証
  test('正しく出力されているか', () => {
    // レンダリングされたコンポーネントを DOM のフラグメントとして取得
    const { asFragment } = render(<HelloWorld />);
    // スナップショットテスト
    expect(asFragment()).toMatchSnapshot();
  });
});
