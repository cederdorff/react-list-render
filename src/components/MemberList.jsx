import MemberItem from "./MemberItem";

export default function MemberList({ listOfMembers }) {
    return (
        <section>
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
                    {listOfMembers.map(member => (
                        <MemberItem member={member} key={member.id} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}
