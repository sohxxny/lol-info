import { ClipLoader } from 'react-spinners';

export const LoadingSpinners = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <ClipLoader size={30} />
    </div>
  );
};
