import { TabButtonChild } from "../atoms/tabbuttonChild";

export const TabButton = () => {
  return (
    <ul className="flex">
      <TabButtonChild name="自己紹介" tabNo={1} />
      <TabButtonChild name="Github" tabNo={2} />
      <TabButtonChild name="コンタクト" tabNo={3} />
    </ul>
  );
};
