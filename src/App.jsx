// Import necessary React hooks and assets
import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import MemberList from "./components/MemberList";

// Define the main App component
function App() {
    // Initialize a state variable 'members' as an empty array
    const [members, setMembers] = useState([]);

    // Use the 'useEffect' hook to fetch member data when the component mounts
    useEffect(() => {
        async function getMembers() {
            const response = await fetch("https://raw.githubusercontent.com/cederdorff/dat-js/main/data/members.json");
            const data = await response.json();
            setMembers(data); // save data in the 'members' state
        }
        // Call the 'getMembers' function only once when the component mounts (empty dependency array)
        getMembers();
    }, []);

    // Render the component
    return (
        <>
            <header>
                <img src={reactLogo} className="logo react" alt="React logo" />
                <h1>React Member Component</h1>
            </header>

            {/* Render the 'MemberList' component and pass the 'members' state as a prop */}
            <MemberList listOfMembers={members} />
        </>
    );
}
export default App;
