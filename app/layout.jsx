// import "@styles/globals.css";
import NavBar from "@components/NavBar";

export const metadata = {
  title: "Next Blog",
  description: "Blog made using next js",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
