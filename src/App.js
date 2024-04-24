import { useAuth0 } from "@auth0/auth0-react";
import './App.css';

function App() {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  return (
    <div className="App">
      <div className="login-card">
        <h1 className="title">SSO Application</h1>
        <img className="user" src={'https://cdn-icons-png.flaticon.com/512/9131/9131529.png'}/>
        <div className="greeting">
          {isAuthenticated && <h2>Welcome, {user.name}!</h2>}
        </div>
        <div className="button-container">
          {
            isAuthenticated ? (
              <button className="logout-btn" onClick={logout}>Logout</button>
            ) : (
              <button className="login-btn" onClick={loginWithRedirect}>Login</button>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
