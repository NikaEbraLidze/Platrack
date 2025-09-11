import { Outlet } from "react-router-dom";
import { Header } from "../components/molecules/Header";
import { Footer } from "../components/organisms/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
