import "./App.css";

function App() {
  const test = () => {
    console.log("test");
    fetch("api.php").then((response) => console.log(response));
  };
  return (
    <div className="App">
      <button onClick={test}>h</button>
    </div>
  );
}

export default App;
