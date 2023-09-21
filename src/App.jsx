import "./App.css";
import reactLogo from "./assets/react.svg";
import List from "./components/List";

function App() {
    return (
        <>
            <header>
                <a href="https://react.dev" target="_blank" rel="noreferrer">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>React List Render Component</h1>
            </header>
            <List />
        </>
    );
}

export default App;
