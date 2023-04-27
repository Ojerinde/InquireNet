import { useRouter } from "next/router";

import NavLink from "../UI/NavLink";
import { ImHome } from "react-icons/im";

interface Props {
  track: string | string[] | undefined;
}

const Header: React.FC<Props> = ({ track }) => {
  const router = useRouter();
  const goHomeHandler = () => {
    router.push("/home");
  };
  return (
    <header className="main__header">
      <div className="main__header--logo">
        <ImHome className="main__header--icon" onClick={goHomeHandler} />
        <h3>{track}</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              href={{
                pathname: `/${track}/all_question`,
                // query: { track: `${track}` },
              }}
              exact
              className=""
            >
              All Questions
            </NavLink>
          </li>
          <li>
            <NavLink
              href={{
                pathname: `/${track}/add_question`,
              }}
              exact
              className=""
            >
              Add Question
            </NavLink>
          </li>
          <li>
            <NavLink
              href={{
                pathname: `/${track}/answered_question`,
              }}
              exact
              className=""
            >
              Answered Questions
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
