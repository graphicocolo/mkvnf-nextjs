import { render, screen, fireEvent } from '@testing-library/react';

import Counter from '@/components/Counter';

describe('Counter component', () => {
  test('renders Counter and interacts with buttons', () => {
    render(<Counter />); // テスト対象のコンポーネントを仮想的に DOM に描画

    // Count 初期状態をチェック
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument(); // screen: テスト対象から要素を選択するためのユーティリティ

    // Increment ボタンをクリック
    // fireEvent: ユーザー操作（クリック、キー入力など）をシミュレート
    // getByText: テキストに基づいて要素を選択
    // i: 大文字小文字を区別しない
    fireEvent.click(screen.getByText(/Increment/i));
    expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    // Decrement ボタンをクリック
    fireEvent.click(screen.getByText(/Decrement/i));
    expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  });
});
