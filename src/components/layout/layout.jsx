import Header from "./Header/header";
import Title from "./Title/title";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Title />
      {children}
    </div>
  );
}
