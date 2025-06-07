import { Link, useLocation } from "@tanstack/react-router";
import { ArrowRightIcon, MenuIcon, UserIcon } from "lucide-react";
import { useMemo } from "react";
import { twMerge } from "tailwind-merge";
import type { Outputs } from "@/server/types";
import { config } from "@/config";

type NavbarProps = {
  user: NonNullable<Outputs["auth"]["getSession"]>["user"] | null;
};

export function Navbar(props: NavbarProps) {
  const { user } = props;
  const { pathname } = useLocation();

  const menu = useMemo(() => {
    if (user) {
      return (
        <>
          <li>
            <Link
              to="/app"
              className={twMerge(pathname === "/app" && "menu-active")}
            >
              Home
            </Link>
          </li>

          <li>
            <details>
              <summary>
                <UserIcon className="size-5" />
              </summary>
              <ul className="w-max md:top-5 md:right-0">
                <li>
                  <Link to="/sign-out">Sign Out</Link>
                </li>
              </ul>
            </details>
          </li>
        </>
      );
    }

    return (
      <>
        <li>
          <Link to="/" className={twMerge(pathname === "/" && "menu-active")}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/get-started"
            className={twMerge(pathname === "/get-started" && "menu-active")}
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </li>
      </>
    );
  }, [pathname, user]);

  return (
    <div className="border-b-base-300 border-b">
      <div className="container mx-auto">
        <div className="navbar p-0">
          <div className="navbar-start gap-4">
            <Link to={user ? "/app" : "/"} className="text-xl font-bold">
              {config.name}
            </Link>
          </div>

          <div className="navbar-end">
            <div className="hidden md:flex">
              <ul className="menu menu-horizontal space-x-2">{menu}</ul>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <MenuIcon className="size-5" />
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content rounded-box bg-base-100 text-base-content border-base-300 z-[1] mt-1 w-max min-w-52 gap-1 border"
              >
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
