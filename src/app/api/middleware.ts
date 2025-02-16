import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken = req.headers.get('authorization');

  if (authToken !== 'Bearer mysecrettoken') {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
