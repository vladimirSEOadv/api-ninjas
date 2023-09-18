import "./App.css";
import { IpForm } from "./components/IpForm/IpForm";
import { envCheck } from "./utils/envCheck";

function App() {
  envCheck();
  return (
    <>
      <IpForm />
    </>
  );
}

export default App;
