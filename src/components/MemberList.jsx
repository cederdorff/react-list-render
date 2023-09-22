import { useEffect, useState } from "react";
import MemberItem from "./Member";

export default function MemberList() {
    const [members, setMembers] = useState([]);

    useEffect(async () => {
        const response = await fetch(
            "https://raw.githubusercontent.com/petlatkea/JSOOP/main/list_renderer/data/members.json?token=GHSAT0AAAAAACHIZNBM3S5LGPOH2S3HZAHIZINGLZQ"
        );
        console.log(response);
        const data = await response.json();
        console.log(data);

        setMembers(data);
    }, []);

    return (
        <section>
            <table id="members" class="hide">
                <thead>
                    <tr>
                        <th data-action="sort" data-sort-by="name">
                            Navn
                        </th>
                        <th data-action="sort" data-sort-by="active">
                            Aktiv
                        </th>
                        <th data-action="sort" data-sort-by="birthday">
                            Fødselsdag
                        </th>
                        <th data-action="sort" data-sort-by="age">
                            Alder
                        </th>
                        <th data-action="sort" data-sort-by="isJunior">
                            Gruppe
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {" "}
                    {members.map(member => (
                        <MemberItem member={member} />
                    ))}
                </tbody>
            </table>
        </section>
    );
}
