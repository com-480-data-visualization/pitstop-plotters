import style from "./Styles.module.css";
import WelcomePage from "./Welcome/WelcomePage";

function App() {
  return (
      <div className={style.container}>
        <div className={style.section}><WelcomePage /></div>
      </div>
  );
}

export default App;
