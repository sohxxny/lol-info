import { useRouter } from 'next/navigation';
import { startTransition } from 'react';

export const ErrorComponent = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  const { refresh } = useRouter();
  console.error(`에러 발생: ${error.message}`);

  return (
    <div className="flex w-full flex-col items-center justify-center gap-3">
      <h2 className="text-xl font-bold">⚠️ 문제가 발생했습니다.</h2>
      <p>페이지를 로드하는 도중 오류가 발생했습니다.</p>
      <button
        onClick={() =>
          startTransition(() => {
            refresh();
            reset();
          })
        }
        className="m-5 rounded-xl bg-gray-200 px-4 py-2"
      >
        다시 시도
      </button>
    </div>
  );
};
