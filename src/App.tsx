import "./App.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Technologies />
    </>
  );
};
