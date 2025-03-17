'use client';

import { ErrorComponent } from '@/components/common/error-component';

const GlobalError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <html>
      <body>
        <div>글로벌 에러</div>
        <ErrorComponent error={error} reset={reset} />
      </body>
    </html>
  );
};

export default GlobalError;
