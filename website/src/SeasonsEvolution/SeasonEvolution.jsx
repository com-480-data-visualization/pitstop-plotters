import styles from "./SeasonsEvolution.module.css";
import { useEffect, useState } from "react";
import Plot from 'react-plotly.js';
import data from './season_evolution.json';

const SeasonEvolution = () => {
  const years = [...new Set(data.map(row => row.year))];
  const [currentYear, setCurrentYear] = useState(years[0]);
  const [traces, setTraces] = useState([]);

  // List of cool colors
  const coolColors = [
    '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FF8C33',
    '#33FFF0', '#8D33FF', '#FF3333', '#33FF33', '#FF33FF'
  ];

  const assignTeamColors = () => {
    const teamColors = {};
    let colorIndex = 0;

    data.forEach(row => {
      if (!teamColors[row.teamId]) {
        teamColors[row.teamId] = coolColors[colorIndex % coolColors.length];
        colorIndex += 1;
      }
    });

    return teamColors;
  };

  useEffect(() => {
    const teamColors = assignTeamColors();

    const filteredData = data.filter(row => row.year === currentYear);
    const driverIds = [...new Set(filteredData.map(row => row.driverId))];
    const yearTraces = driverIds.map(driverId => {
      const driverRes = filteredData.filter(d => d.driverId === driverId);
      const teamColor = teamColors[driverRes[0].teamId];
      return {
        x: driverRes.map(d => d.gp_name),
        y: driverRes.map(d => d.points),
        mode: 'lines+markers',
        name: `${driverRes[0].forename} ${driverRes[0].surname} (${currentYear})`,
        line: { color: driverRes[0].color || teamColor },
      };
    });

    setTraces(yearTraces);
  }, [currentYear]);

  const handleSliderChange = (e) => {
    setCurrentYear(Number(e.target.value));
  };

  return (
    <div className={styles.plotContainer}>
      {/* Graph */}
      <Plot
        data={traces}
        layout={{
          title: `Points of drivers in ${currentYear}`,
          xaxis: { title: 'Circuit', linecolor: 'white', linewidth: 2 },
          yaxis: { title: 'Points', linecolor: 'white', linewidth: 2 },
          paper_bgcolor: 'rgba(40,40,40,0)',
          plot_bgcolor: 'rgba(40,40,40,0)',
          font: { color: 'white' },
          margin: { l: 50, r: 50, t: 50, b: 50 }, // Added margin to ensure border visibility
          width: '100%',
          height: '100%',
          mode: 'lines',
          grid: { color: 'white', width: 1 },
        }}
        useResizeHandler
        style={{ width: '100%', height: '100%' }}
      />

      {/* slider */}
      <div className={styles.sliderContainer}>
        <input
          type="range"
          min={Math.min(...years)}
          max={Math.max(...years)}
          value={currentYear}
          onChange={handleSliderChange}
          className={styles.slider}
        />
        <div className={styles.yearLabel}>{currentYear}</div>
      </div>
    </div>
  );
};

export default SeasonEvolution;
