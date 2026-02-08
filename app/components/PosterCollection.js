import PosterCard from "./PosterCard";

const posters = [
  {
    title: "Deploy Poster",
    category: "Wall Art",
    image: "/images/poster-1.jpg",
  },
  {
    title: "Build Poster",
    category: "Wall Art",
    image: "/images/poster-2.jpg",
  },
  {
    title: "Ship Poster",
    category: "Wall Art",
    image: "/images/poster-3.jpg",
  },
];

export default function PosterCollection() {
  return (
    <section className="section collection">
      <div className="collection__header">
        <div className="collection__header-cell" />
        <div className="collection__header-cell">
          <p className="collection__header-text">
            And we&apos;re sure you&apos;ll need some for digitals.
          </p>
        </div>
        <div className="collection__header-cell" />
      </div>

      <div className="collection__grid">
        {posters.map((poster) => (
          <div key={poster.title} className="collection__item">
            <PosterCard
              title={poster.title}
              category={poster.category}
              image={poster.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
