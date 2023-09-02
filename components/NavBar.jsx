import Image from "next/image";

function NavBar() {
  let isUserLoggedIn = true;

  return (
    <nav>
      <div className="nav-left">
        <Image src="/logo.png" alt="logo" width={30} height={30} />
      </div>
      <div className="nav-title">NEXT BLOG</div>
      <div className="nav-right">
        {isUserLoggedIn ? (
          <div>
            <button className="nav-btn">Create Post</button>
            <Image src="/logo.png" alt="profile" width={30} height={30} />
          </div>
        ) : (
          <div>
            <button className="nav-btn">Sign In</button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
