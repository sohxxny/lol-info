import { getRotation } from '@/api/riot-api';

// * getRotation로부터 로테이션 목록을 가져오는 라우트 핸들러 함수
export async function GET() {
  const data = await getRotation();
  return Response.json(data);
}
