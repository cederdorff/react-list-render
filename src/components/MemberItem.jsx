export default function MemberItem({ member }) {
    function getMemberBirthday() {
        const birthday = new Date(member.dateOfBirth);
        const formattedBirthday = birthday.toLocaleString("da", { month: "short", day: "numeric", year: "numeric" });
        return formattedBirthday;
    }

    function getAge() {
        const birthday = new Date(member.dateOfBirth);
        const diff = Date.now() - birthday.getTime();
        const years = Math.floor(diff / 1000 / 60 / 60 / 24 / 365);
        return years;
    }

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
