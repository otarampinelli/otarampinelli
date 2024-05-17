import { useEffect } from "react";
import Header from "./Header";
import { useLocation } from "react-router-dom";
import { BasicPageType } from "../types/common";


const BasicPage = ({ children }: BasicPageType) => {
  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    if (path == "/") {
      document.title = "home";
    }

    if (path == "/experiences") {
      document.title = "experiences";
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default BasicPage;
