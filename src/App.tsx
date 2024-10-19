import "./App.css";
import Container from "./components/Container";
import { ModalState } from "./context/ModalContext";
import QueryState from "./context/QueryContext";

function App() {
  return (
    <>
      <ModalState>
        <QueryState>
          <Container />
        </QueryState>
      </ModalState>
    </>
  );
}

export default App;
