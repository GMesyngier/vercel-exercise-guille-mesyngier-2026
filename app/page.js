import Header from "./components/Header";
import Hero from "./components/Hero";
import PosterCollection from "./components/PosterCollection";
import BackgroundCollection from "./components/BackgroundCollection";

export default function Home() {
  return (
    <div className="collection-site page">
      <Header />
      <main className="section-container">
        <Hero />
        <PosterCollection />
        <BackgroundCollection />
      </main>
    </div>
  );
}
