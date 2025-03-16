import { getRotation } from '@/api/riot-api';

export async function GET() {
  const data = await getRotation();
  return Response.json(data);
}
