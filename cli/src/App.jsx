import logo from "./assets/yankee.png";

function App() {
  return (
    <main>
      <header>
        <a href="#" className="logo">
          <img src={logo} height="60px" alt="Yankee blog" />
        </a>
        <nav>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>
      </header>
    </main>
  );
}

export default App;
