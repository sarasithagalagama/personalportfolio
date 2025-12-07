import "./Stats.css";

const Stats = ({
  stats = [
    { value: "07", label: "YEARS\nEXPERIENCE" },
    { value: "+125", label: "CLIENTS\nWORLDWIDE" },
    { value: "+210", label: "TOTAL\nPROJECTS" },
  ],
}) => {
  return (
    <div className="about-client-box-wrap">
      <div className="about-client-box info-box shadow-box glass card h-full">
        <img src="/assets/images/bg1.png" alt="BG" className="bg-img" />

        <div className="clients d-flex align-items-start gap-24 justify-content-center">
          {stats.map((stat, index) => (
            <div key={index} className="client-item">
              <h2>{stat.value}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
