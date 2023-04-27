import React from "react";
import { MdError } from "react-icons/md";

interface Props {
  message: string;
}

const InputError: React.FC<Props> = ({ message }) => {
  return (
    <p className="mb-4 -mt-6 flex">
      <span>
        <MdError className="h-8 w-8 text-red-800 mr-1" />
      </span>
      <span className="text-2xl text-red-800 tracking-wider">{message}</span>
    </p>
  );
};
export default InputError;
