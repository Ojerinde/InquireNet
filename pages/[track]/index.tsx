import Header from "@/components/Header/Header";
import { NextRouter, useRouter } from "next/router";
import React from "react";

const Track: React.FC = () => {
  const router: NextRouter = useRouter();
  const track: string | string[] | undefined = router?.query?.track;
  console.log(router);
  return (
    <section>
      <Header track={track} />
    </section>
  );
};
export default Track;
