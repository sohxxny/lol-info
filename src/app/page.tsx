import { ImageLink } from '@/components/home/image-link';

const Home = () => {
  return (
    <div className="flex flex-col items-center p-[50px] gap-5">
      <h1 className="text-3xl font-bold">리그 오브 레전드 가이드</h1>
      <p className="text-sm">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>
      <div className="flex md:flex-row flex-col gap-5 font-semibold">
        <ImageLink type="rotation" />
        <ImageLink type="champions" />
        <ImageLink type="items" />
      </div>
    </div>
  );
};

export default Home;
