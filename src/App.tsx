import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ConferenceTicker, MenConference } from "./components/MenConference";
import { About } from "./components/About";
import { MainMentor } from "./components/MainMentor";
import { GuestSpeakers } from "./components/GuestSpeakers";
import { Pricing } from "./components/Pricing";
import { Registration } from "./components/Registration";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

function App() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header onSelectTier={setSelectedTier} />
      <ConferenceTicker />
      <Hero onSelectTier={setSelectedTier} />
      <MenConference />
      <About onSelectTier={setSelectedTier} />
      <MainMentor />
      <GuestSpeakers />
      <Pricing onSelectTier={setSelectedTier} />
      {selectedTier && <Registration onClose={() => setSelectedTier(null)} />}
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
