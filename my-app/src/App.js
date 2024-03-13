function Header() {
  return <h1>React ComponentS</h1>;
}
function SubHeader() {
  return <b>I'm Creating React Components</b>;
}

function App() {
  return (
    <div className="App">
      This is the starting code for my first component
      <Header />
      <SubHeader />
    </div>
  );
}

export default App;
