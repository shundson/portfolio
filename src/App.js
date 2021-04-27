import "./reset.css";
import './App.css';
import { Router } from "./router/Router";
import { TabProvider } from "./provider/Tabprovider";
import { Monster } from "./components/atoms/monster";


function App() {
  return (
    <div className="App" >
    <TabProvider>
    <Router />
    </TabProvider>
    </div>
  );
}

export default App;
