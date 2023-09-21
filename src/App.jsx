import reactLogo from "./assets/react.svg";
import List from "./components/List";

function App() {
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>React List Render Component</h1>
            </header>
            <List />
        </>
    );
}

export default App;
