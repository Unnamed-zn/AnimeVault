import { MainTemplate } from "./templates/mainTemplate";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <>
      <MainTemplate
        sidebar={<Sidebar />}
      />
    </>
  )
}

export default App;