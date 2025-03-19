'use client';

import { useTheme } from 'next-themes';
import { IoIosMoon } from 'react-icons/io';
import { IoSunny } from 'react-icons/io5';
import { IoIosSettings } from 'react-icons/io';

// * 다크/라이크 모드 토글 버튼
export const ThemeButton = ({ className }: { className: string }) => {
  const { theme, setTheme } = useTheme();

  const handleClick = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-xl bg-secondary shadow-xl ${className}`}
      onClick={handleClick}
    >
      <ThemeIcon theme={theme as string} />
    </button>
  );
};

const ThemeIcon = ({ theme }: { theme: string }) => {
  if (theme === 'light')
    return <IoIosMoon className="text-2xl text-yellow-400" />;
  else if (theme === 'dark')
    return <IoIosSettings className="text-2xl text-gray-400" />;
  else return <IoSunny className="text-2xl text-yellow-400" />;
};
