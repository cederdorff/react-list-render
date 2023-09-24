export default function MemberItem({ member }) {
    // Member's date of birth as JS Date Object
    const dateOfBirth = new Date(member.dateOfBirth);

    // Function to get formatted member birthday
    function getMemberBirthday() {
        const formattedBirthday = dateOfBirth.toLocaleString("da", { month: "short", day: "numeric", year: "numeric" });
        return formattedBirthday;
    }

    // Function to calculate member's age
    function getAge() {
        const ageInMilliseconds = Date.now() - dateOfBirth.getTime();
        const ageInYears = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24 * 365));
        return ageInYears;
    }

    // This is the JSX code for rendering the member information in a table row.
    return (
        <tr>
            <td>
                {member.firstName} {member.lastName}
            </td>
            <td>{member.isActiveMember ? "aktiv" : "ikke aktiv"}</td>
            <td>{getMemberBirthday()}</td>
            <td>{getAge()}</td>
            <td>{getAge() < 18 ? "Junior" : "Senior"}</td>
        </tr>
    );
}
