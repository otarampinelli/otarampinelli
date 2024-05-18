import Header from "./Header";
import { BasicPageType } from "../types/common";


const BasicPage = ({ children }: BasicPageType) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default BasicPage;
