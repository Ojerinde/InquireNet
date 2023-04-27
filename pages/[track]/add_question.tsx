import Header from "@/components/Header/Header";
import NewQuestion from "@/components/NewQuestion";
import { NextRouter, useRouter } from "next/router";
import React from "react";
const AddQuestionPage: React.FC = () => {
  const router: NextRouter = useRouter();
  const track: string | string[] | undefined = router?.query?.track;
  return (
    <section>
      <Header track={track} />
      <NewQuestion />
    </section>
  );
};
export default AddQuestionPage;
