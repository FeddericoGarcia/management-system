import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard.jsx";
import { RouteProvider } from "./routes/RouteContext.jsx";

function App() {
  const getComponent = () => {
    switch (window.location.pathname) {
      case "/dashboard":
        return (
          <RouteProvider>
            <Dashboard />
          </RouteProvider>
        );
      default:
        return <Login />;
    }
  };

  return <div className="App">{getComponent()}</div>;
}

export default App;
