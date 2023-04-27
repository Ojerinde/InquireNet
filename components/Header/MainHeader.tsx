import { auth, signOut } from "@/config";
import Button from "@/components/UI/Button";

import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

const MainHeader = () => {
  const router = useRouter();
  const SignOutHandler = () => {
    signOut(auth)
      .then(() => {
        router.push("/");
      })
      .catch((error) => {
        alert("Alert: " + error.message);
      });
  };

  return (
    <header className="flex p-8 justify-between items-center border-b border-primary_light">
      <figure className="rounded-lg  cursor-pointer shadow-black shadow-sm">
        <Image
          src="/assets/homeLogo.png"
          alt="JSchool"
          width={200}
          height={300}
          className="rounded-lg"
        />
      </figure>
      <nav>
        <ul className="flex justify-end text-3xl font-medium tracking-widest">
          <li className="mx-6 border-transparent border-b-2 border-r-2 hover:border-b-2 hover:border-r-2 hover:border-slate-300 rounded p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="mx-6 border-transparent border-b-2 border-r-2  cursor-pointer hover:border-b-2 hover:border-r-2 hover:border-slate-300 rounded p-2">
            <Button onClick={SignOutHandler}>Logout</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainHeader;
