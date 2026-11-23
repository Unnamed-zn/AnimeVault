import { Logo } from "./components/logo";
import { Sidebar } from "./components/sidebar";
import { MainTemplate } from "./templates/mainTemplate";

function App() {
  return (
    <>
      <MainTemplate
        logo={<Logo />}
        sidebar={<Sidebar />}
      />
    </>
  )
}

export default App;