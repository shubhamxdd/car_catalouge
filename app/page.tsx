import { Hero, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore latest cars</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">{/* filter */}</div>
        </div>
      </div>
    </main>
  );
}
