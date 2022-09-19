import Router from "./pages/router";
import GlobalState from "./context/globalState"

function App() {

  return (
   <GlobalState>
    <Router/>
   </GlobalState>
  )
}

export default App;
