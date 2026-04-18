import StatItem from "./StatItem";


function MissionStats() {
  const stats = [
    { value: "500K+", label: "Happy Customers" },
    { value: "120+", label: "Countries" },
    { value: "98%", label: "Satisfaction" },
  ];
  return (
    <div className="mission-stats">
      {stats.map((stat,i) => {
        return <StatItem key={i} statNumber={stat.value} statLabel={stat.label} />;
      })}
    </div>
  );
}

export default MissionStats;
