"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";

function NavBar() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  let isUserLoggedIn = true;

  useEffect(() => {
    async function setProvider() {
      const res = await getProviders();
      setProviders(res);
    }

    setProvider();
  }, []);

  return (
    <nav>
      <div className="nav-left">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={30} height={30} />
        </Link>
      </div>
      <div className="nav-title">NEXT BLOG</div>
      <div className="nav-right">
        {session?.user ? (
          <div>
            <Link href="/create-post">
              <button className="nav-btn">Create Post</button>
            </Link>
            <Link href="/user/profile">
              <Image
                src={session?.user.image}
                alt="profile"
                width={30}
                height={30}
              />
            </Link>
          </div>
        ) : (
          <div>
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <button
                    className="nav-btn"
                    key={provider.id}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                  >
                    Sign In
                  </button>
                );
              })}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
