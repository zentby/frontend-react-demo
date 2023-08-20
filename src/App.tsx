import { PasswordResetForm } from "./ui/PasswordResetForm";

function App() {
  return (
    <div className="App">
      <PasswordResetForm onReset={(pass) => console.log(pass)} />
    </div>
  );
}

export default App;
