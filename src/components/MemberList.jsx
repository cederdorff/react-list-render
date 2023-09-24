// Import the 'MemberItem' component from the "./MemberItem" file.
import MemberItem from "./MemberItem";

// This is a React component called MemberList that takes a 'listOfMembers' prop.
export default function MemberList({ listOfMembers }) {
    return (
        <section>
            {/* Create a table for displaying member information */}
            <table>
                <thead>
                    <tr>
                        <th>Navn</th>
                        <th>Aktiv</th>
                        <th>Fødselsdag</th>
                        <th>Alder</th>
                        <th>Gruppe</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the 'listOfMembers' array and render 'MemberItem' component for each member */}
                    {/* Pass 'member' data as a prop to 'MemberItem' */}
                    {listOfMembers.map(member => (
                        <MemberItem member={member} key={member.id} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}
