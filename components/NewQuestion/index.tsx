import { NextRouter, useRouter } from "next/router";
import React, { useState, ChangeEvent } from "react";

// Components
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewQuestion = () => {
  const router: NextRouter = useRouter();
  const pathname: string = router.pathname;
  const lastIndex: number = pathname?.lastIndexOf("/");
  const tab: string = pathname.slice(lastIndex + 1);

  // Managing the form Field
  const [title, setTitle] = useState<string | undefined>("");
  const [question, setQuestion] = useState<string | undefined>("");
  // const [images, setImages] = useState<string[]>([]);

  const titleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const questionChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
  };

  // const imagesChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  //   const images: string[] = [];
  //   const files: FileList | null = e.target.files;
  //   for (const file of files) {
  //     images.push(file.name);
  //   }
  //   setImages(images);
  // };

  const submitHandler = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      {/* {error.hasError && (
        <Error message={error.message} onClick={closeErrorHandler} />
      )} */}
      <Card className="new__question--card">
        <form onSubmit={submitHandler}>
          <Input
            label="Title"
            type="text"
            placeholder="Give your question a title"
            name="title"
            onChange={titleChangeHandler}
            value={title}
          />
          <Input
            field="textarea"
            label="Question"
            type="text"
            placeholder="Type your question here. Be detailed!"
            name="question"
            value={question}
            onChange={questionChangeHandler}
          />
          {/* <Input
            label="Upload file(s)"
            type="file"
            multiple
            name="images"
            onChange={imagesChangeHandler}
          /> */}

          <div className="new__question--box">
            <Button>Ask Now!</Button>
          </div>
        </form>
      </Card>
    </>
  );
};

export default React.memo(NewQuestion);
