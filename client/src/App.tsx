import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="body-class">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
