import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <h2 className="text-xl font-bold">⚠️ 페이지를 찾을 수 없습니다.</h2>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <Link href="/" className="m-5 rounded-xl bg-gray-200 px-4 py-2">
        홈으로 이동
      </Link>
    </div>
  );
};

export default NotFound;
