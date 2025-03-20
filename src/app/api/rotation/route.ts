export const dynamic = 'force-dynamic';

import { getRotation } from '@/services/riot-api';
import { NextResponse } from 'next/server';

// * getRotation로부터 로테이션 목록을 가져오는 라우트 핸들러 함수
export async function GET() {
  const data = await getRotation();
  return NextResponse.json(data);
}
