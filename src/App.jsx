import Contact from "./components/contact";
import FAQ from "./components/faq";
import Footer from "./components/footer";
import Hero from "./components/hero";
import Industries from "./components/industry";
import Navbar from "./components/navBar";
import Problem from "./components/problem";
import Results from "./components/result";
import Solution from "./components/solution";
import Stakeholders from "./components/stakeHolder";
import Stats from "./components/stat";

function App() {
  return (
    <div className="bg-[#F9F5ED] min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Stakeholders />
      <Solution />
      <Stats />
      <Industries />
      <Results />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
