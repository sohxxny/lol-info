import Image from 'next/image';
import Link from 'next/link';
import championsImage from '../../public/home-images/champions-image.webp';
import rotationImage from '../../public/home-images/rotation-image.webp';
import itemsImage from '../../public/home-images/items-image.webp';
import { LinkType } from '@/types/common-types';

// * 이미지 링크 컴포넌트
export const ImageLink = ({ type }: { type: LinkType }) => {
  return (
    <Link
      href={`/${type}`}
      className="flex max-w-[400px] flex-1 flex-col items-center gap-2"
    >
      <Image
        src={LINK_INFO[type].src}
        alt={`${type} link`}
        className="aspect-[16/9] object-cover"
      />
      {LINK_INFO[type].title}
    </Link>
  );
};

const LINK_INFO = {
  champions: {
    title: '챔피언 목록 보기',
    src: championsImage,
  },
  rotation: {
    title: '금주 로테이션 확인',
    src: rotationImage,
  },
  items: {
    title: '아이템 목록 보기',
    src: itemsImage,
  },
};
