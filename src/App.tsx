import { PomodoroTimer } from "./components/PomodoroTimer";

function App(): JSX.Element {
  return (
    <div className="App">
      <PomodoroTimer defaultPomodoroTimer={1500} />
    </div>
  );
}

export default App;
