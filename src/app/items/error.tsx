'use client';

import { ErrorComponent } from '@/components/common/error-component';

const ItemPageError = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return <ErrorComponent error={error} reset={reset} />;
};

export default ItemPageError;
