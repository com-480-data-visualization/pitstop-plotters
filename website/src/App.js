import style from "./Styles.module.css";
import WelcomePage from "./Welcome/WelcomePage";
import TemplatePage from "./Template/TemplatePage";

function App() {
  return (
      <div className={style.container}>
        <div className={style.section}><WelcomePage /></div>
        <div className={style.section}><TemplatePage /></div>
      </div>
  );
}

export default App;
