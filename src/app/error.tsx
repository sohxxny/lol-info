'use client';

import { ErrorComponent } from '@/components/common/error-component';

const HomePageError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <ErrorComponent error={error} reset={reset} />;
};

export default HomePageError;
