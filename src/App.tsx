import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { MainMentor } from "./components/MainMentor";
import { GuestSpeakers } from "./components/GuestSpeakers";
import { Pricing } from "./components/Pricing";
import { PricingOld } from "./components/PricingOld";
import { Benefits } from "./components/Benefits";
import { Registration } from "./components/Registration";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

function App() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero onSelectTier={setSelectedTier} />
      <About />
      <MainMentor />
      <GuestSpeakers />
      <Pricing onSelectTier={setSelectedTier} />
      {selectedTier && <Registration tier={selectedTier} onClose={() => setSelectedTier(null)} />}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
