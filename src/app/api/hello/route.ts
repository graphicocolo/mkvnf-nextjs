// import { NextRequest, NextResponse } from 'next/server';
import { NextResponse } from 'next/server';

// export const GET = async (req: NextRequest) => {
export const GET = async () => {
  // 非同期処理をシミュレーションする（1秒待機）
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json({ message: 'Api Component Hello World' });
};
