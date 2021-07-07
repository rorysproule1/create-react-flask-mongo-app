import logo from "./logo.svg";
import "./App.css";
import User from "./User";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to this React-Flask-MongoDB demo.</h3>
        <p>
          This webapp provides some basic CRUD functionality to demonstrate how
          the frontend, backend and database interact.
        </p>
        {/* This custom component will hold all the functionality related to our Users */}
        <User />
      </header>
    </div>
  );
}

export default App;
