import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";

function App() {
  return (
    <>
      <Head />
      <main className="body-class">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
