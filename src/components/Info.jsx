const STATS_DATA = [
  { value: "10k+", label: "companies" },
  { value: "314", label: "templates" },
  { value: "12M+", label: "queries" },
];

const Info = () => {
  return (
    <section className="card__content">
      <h1 className="card__title">
        Get <em className="card__title--highlight">insights</em> that help your business grow.
      </h1>
      <p className="card__description">
        Discover the benefits of data analytics and make better decisions
        regarding revenue, customer experience, and overall efficiency.
      </p>
      <ul className="card__stats" role="list">
        {STATS_DATA.map((stat) => (
            <Stat key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </ul>
    </section>
  );
};

export default Info;

const Stat = ({ label, value }) => {
  return (
    <li className="card__stat">
      <strong className="card__stat-value">{value}</strong>
      <span className="card__stat-label">{label}</span>
    </li>
  );
};
