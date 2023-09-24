import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import MemberList from "./components/MemberList";

function App() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        async function getMembers() {
            const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json");
            const data = await response.json();
            setMembers(data);
        }
        getMembers();
    }, []);
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>React Member Component</h1>
            </header>
            <MemberList listOfMembers={members} />
        </>
    );
}

export default App;
