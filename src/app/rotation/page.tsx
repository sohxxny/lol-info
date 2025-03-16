'use client';

import { useGetRotation } from '@/tanstack/queries';

const RotationPage = () => {
  const { data: rotation, isLoading, error } = useGetRotation();

  if (isLoading) return <div>로딩중입니다...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return <></>;
};

export default RotationPage;
