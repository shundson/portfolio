import "./reset.css";
import "./App.css";
import { Router } from "./router/Router";
import { TabProvider } from "./provider/Tabprovider";

function App() {
  return (
    <div className="App">
      <TabProvider>
        <Router />
      </TabProvider>
    </div>
  );
}

export default App;
