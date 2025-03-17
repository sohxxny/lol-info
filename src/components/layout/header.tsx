import Link from 'next/link';

export const Header = () => {
  return (
    <nav className="mx-[40px] flex justify-between py-[20px] font-semibold">
      <Link href="/">홈</Link>
      <Link href="/champions">챔피언 목록</Link>
      <Link href="/items">아이템 목록</Link>
      <Link href="/rotation">챔피언 로테이션</Link>
    </nav>
  );
};
