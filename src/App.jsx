import reactLogo from "./assets/react.svg";
import MemberList from "./components/MemberList";

function App() {
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>React List Render Component</h1>
            </header>
            <MemberList />
        </>
    );
}

export default App;
