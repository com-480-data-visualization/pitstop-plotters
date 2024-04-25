import style from "./Styles.module.css";
import WelcomePage from "./Welcome/WelcomePage";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import HallOfFamePage from "./HallOfFame/HallOfFamePage";
import CircuitsPage from "./Circuits/CircuitsPage";
import SeasonsEvolutionPage from "./SeasonsEvolution/SeasonsEvolutionPage";
import DriverTeamRelationsPage from "./DriverTeamRelations/DriverTeamRelationsPage";

function App() {
  return (
      <div className={style.container}>
        <div className={style.section}><WelcomePage /></div>
        <div className={style.section}><LeaderboardPage /></div>
        <div className={style.section}><HallOfFamePage /></div>
        <div className={style.section}><CircuitsPage /></div>
        <div className={style.section}><SeasonsEvolutionPage /></div>
        <div className={style.section}><DriverTeamRelationsPage /></div>
      </div>
  );
}

export default App;
