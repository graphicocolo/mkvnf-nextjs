// テストのために、ユーザー名を返す関数を作成しました。
// この関数は、ユーザーIDを受け取り、そのユーザーの名前を返します。
// ユーザーIDが '123' の場合、'John Doe' を返します。
// それ以外の場合、エラーをスローします。
export const getUserName = (userId: string): string => {
  if (userId === '123') {
    return 'John Doe';
  }
  throw new Error('User not found');
};
