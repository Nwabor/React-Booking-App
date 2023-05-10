import data from "../../static.json";

export default function UserPicker1() {
  const { users } = data;
  console.log(users);
  return (
    <select className="users">
      {users.map((a) => (
        <option key={a.id}>{a.name}</option>
      ))}
    </select>
  );
}
