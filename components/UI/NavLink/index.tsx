import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
  href: { pathname: string; query?: { track: string } };
  exact: Boolean;
  children: React.ReactNode;
  className: string;
}

const NavLink: React.FC<Props> = ({ href, exact, children, ...others }) => {
  const { pathname } = useRouter();
  const isActive = exact
    ? pathname === href.pathname
    : pathname.startsWith(href.pathname);

  if (isActive) {
    others.className += " activeNav";
  }

  return (
    <Link href={href} legacyBehavior>
      <a {...others}>{children}</a>
    </Link>
  );
};
export default NavLink;
