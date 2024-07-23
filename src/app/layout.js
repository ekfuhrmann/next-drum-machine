import React from "react";

import Header from "../components/Header";
import MutableProvider from "../components/MutableProvider";

import "./styles.css";

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MutableProvider>
          <Header />
          {children}
          <footer>
            <img src="/ie-badge.gif" width={100} />
            <span>Thanks for visiting!</span>
          </footer>
        </MutableProvider>
      </body>
    </html>
  );
}

export default RootLayout;
