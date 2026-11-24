import { MainTemplate } from "./templates/mainTemplate";
import { Sidebar } from "./components/sidebar";
import Secoes from "./components/generos";

function App() {
  return (
    <>
      <MainTemplate
        sidebar={<Sidebar />}
        content={
          <Secoes capa="/Posters/Akame_ga_Kill.png" titulo="Destaques" />
        }
      />
    </>
  );
}

export default App;
