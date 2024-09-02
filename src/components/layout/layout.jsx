import Header from "./header";
import Title from "./title";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <Title />
      {children}
    </div>
  );
}
