import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import AvailableSites from "./components/AvailableSites";
import WhyChooseUs from "./components/WhyChooseUs";
import PaymentSection from "./components/PaymentSection";
import WaysToBetID from "./components/WaysToBetID";
import Instagramsec from "./components/InstagramSec";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="page-wrapper">
      <Header />
      <HeroBanner />
      <AvailableSites />
      <WhyChooseUs />
      <PaymentSection />
      <WaysToBetID />
      <Instagramsec />
    </div>
  );
}

export default App;
