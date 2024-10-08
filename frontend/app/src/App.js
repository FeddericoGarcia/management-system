import './App.css';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard.jsx';

function App() {

  const getComponent = () => {
    switch(window.location.pathname) {
      case '/login':
        return <Login />;
      default:
        return <Dashboard />;
    }
  }


  return (
    <div className="App">
      {getComponent()}
    </div>
  );
}

export default App;
