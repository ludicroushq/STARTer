import { Link } from '@tanstack/react-router';
import type { User } from 'better-auth';
import { ArrowRightIcon, MenuIcon, UserIcon } from 'lucide-react';
import { useMemo } from 'react';
import { config } from '@/config';

type NavbarProps = {
  user: User | undefined;
};

export function Navbar(props: NavbarProps) {
  const { user } = props;

  const menu = useMemo(() => {
    if (user) {
      return (
        <>
          <li>
            <Link
              activeProps={{
                className: 'menu-active',
              }}
              to="/app"
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
                <li className="pointer-events-none">
                  <div className="flex flex-col items-start gap-0">
                    <div className="font-bold">{user.name}</div>
                    <div className="text-xs">{user.email}</div>
                  </div>
                </li>
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
          <Link
            activeOptions={{
              exact: true,
            }}
            activeProps={{
              className: 'menu-active',
            }}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeProps={{
              className: 'menu-active',
            }}
            to="/get-started"
          >
            Get Started
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </li>
      </>
    );
  }, [user]);

  return (
    <div className="border-b border-b-base-300">
      <div className="container mx-auto">
        <div className="navbar p-0">
          <div className="navbar-start gap-4">
            <Link className="font-bold text-xl" to={user ? '/app' : '/'}>
              {config.name}
            </Link>
          </div>

          <div className="navbar-end">
            <div className="hidden md:flex">
              <ul className="menu menu-horizontal space-x-2">{menu}</ul>
            </div>
            <div className="dropdown dropdown-end">
              {/** biome-ignore lint/a11y/useSemanticElements: daisyui */}
              <div
                className="btn btn-ghost md:hidden"
                role="button"
                tabIndex={0}
              >
                <MenuIcon className="size-5" />
              </div>
              <ul className="menu dropdown-content z-[1] mt-1 w-max min-w-52 gap-1 rounded-box border border-base-300 bg-base-100 text-base-content">
                {menu}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
