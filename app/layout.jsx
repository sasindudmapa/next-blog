// import "@styles/globals.css";
import NavBar from "@components/NavBar";

import Provider from "@components/Provider";

export const metadata = {
  title: "Next Blog",
  description: "Blog made using next js",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <main>
            <NavBar />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
