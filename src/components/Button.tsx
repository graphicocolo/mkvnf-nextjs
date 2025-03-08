interface ButtonProps {
  /** ボタンに表示するラベル */
  label: string;
  /** ボタンがクリックされたときに実行される関数 */
  onClick: () => void;
  /** ボタンのバリエーション */
  variant?: 'primary' | 'secondary';
}

/**
 * シンプルなボタンコンポーネント
 * @param label ボタンに表示するテキスト
 * @param onClick ボタンがクリックされたときに実行されるコールバック
 * @param variant ボタンのバリエーション
 */
export const Button = ({ label, onClick, variant = 'primary' }: ButtonProps) => {
  const baseStyle = 'p-2 rounded';
  const variantStyle = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-300 text-black hover:bg-gray-400',
  };
  return (
    <button className={`${baseStyle} ${variantStyle[variant]}`} onClick={onClick}>
      {label}
    </button>
  );
};
