import style from "./Styles.module.css";
import WelcomePage from "./Welcome/WelcomePage";
import LeaderboardPage from "./Leaderboard/LeaderboardPage";
import HallOfFamePage from "./HallOfFame/HallOfFamePage";
import CircuitsPage from "./Circuits/CircuitsPage";
import SeasonsEvolutionPage from "./SeasonsEvolution/SeasonsEvolutionPage";
import DriverTeamRelationsPage from "./DriverTeamRelations/DriverTeamRelationsPage";
import SideMenu from './Menu/Menu';
import WelcomeDesc from "./Descriptions/WelcomeDesc";
import LeaderboardDesc from "./Descriptions/LeaderboardDesc";
import HallOfFameDesc from "./Descriptions/HallOfFameDesc";
import CircuitsDesc from "./Descriptions/CircuitsDesc";
import SeasonsEvolutionDesc from "./Descriptions/SeasonsEvolutionDesc";
import DriverTeamRelationsDesc from "./Descriptions/DriverTeamRelationsDesc";

function App() {
    return (
        <div className={style.container}>
            <SideMenu/>
            <div id="welcome" className={style.section}><WelcomePage/></div>
            <div id="welcome" className={style.section}><WelcomeDesc/></div>
            <div id="leaderboard" className={style.section}><LeaderboardDesc/></div>
            <div id="leaderboard" className={style.section}><LeaderboardPage/></div>
            <div id="halloffame" className={style.section}><HallOfFameDesc/></div>
            <div id="halloffame" className={style.section}><HallOfFamePage/></div>
            <div id="circuits" className={style.section}><CircuitsDesc/></div>
            <div id="circuits" className={style.section}><CircuitsPage/></div>
            <div id="seasons" className={style.section}><SeasonsEvolutionDesc/></div>
            <div id="seasons" className={style.section}><SeasonsEvolutionPage/></div>
            <div id="relations" className={style.section}><DriverTeamRelationsDesc/></div>
            <div id="relations" className={style.section}><DriverTeamRelationsPage/></div>
        </div>
    );
}

export default App;
