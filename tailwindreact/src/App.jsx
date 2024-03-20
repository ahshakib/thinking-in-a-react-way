import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h2 className="font-serif text-lg mb-4 bg-slate-500 p-4 rounded-md">Tailwind CSS and React Props</h2>
      <Card name="Aftab Hossain Shakib"/>
      <br />
      <Card />
    </>
  );
}

export default App;
