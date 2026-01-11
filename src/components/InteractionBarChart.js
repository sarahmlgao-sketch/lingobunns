function InteractionBarChart({ data, title }) {
  const maxValue = Math.max(...data.map(d => d.minutes), 1);

  return (
    <div className="bar-chart">
      {title && <h3 className="chart-title">{title}</h3>}
      <div className="chart-bars">
        {data.map((item, index) => (
          <div key={index} className="chart-bar-item">
            <div className="chart-bar-wrapper">
              <div
                className="chart-bar"
                style={{ height: `${(item.minutes / maxValue) * 100}%` }}
              ></div>
            </div>
            <span className="chart-label">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractionBarChart;
