import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="flex w-full max-w-[800px] justify-between bg-background px-[40px] py-[20px] font-semibold">
      <Link href="/">홈</Link>
      <Link href="/champions">챔피언</Link>
      <Link href="/items">아이템</Link>
      <Link href="/rotation">로테이션</Link>
    </nav>
  );
};
