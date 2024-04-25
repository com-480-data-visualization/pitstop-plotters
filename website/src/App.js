import style from "./Styles.module.css";
import WelcomePage from "./Welcome/WelcomePage";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import HallOfFamePage from "./HallOfFame/HallOfFamePage";
import CircuitsPage from "./Circuits/CircuitsPage";
import SeasonsEvolutionPage from "./SeasonsEvolution/SeasonsEvolutionPage";
import DriverTeamRelationsPage from "./DriverTeamRelations/DriverTeamRelationsPage";
import SideMenu from './Menu/Menu';

function App() {
    return (
        <div className={style.container}>
            <SideMenu />
            <div id="welcome" className={style.section}><WelcomePage /></div>
            <div id="leaderboard" className={style.section}><LeaderboardPage /></div>
            <div id="halloffame" className={style.section}><HallOfFamePage /></div>
            <div id="circuits" className={style.section}><CircuitsPage /></div>
            <div id="seasons" className={style.section}><SeasonsEvolutionPage /></div>
            <div id="relations" className={style.section}><DriverTeamRelationsPage /></div>
        </div>
    );
}

export default App;
