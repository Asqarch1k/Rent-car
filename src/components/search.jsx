import CarsInform from "../data.js/inform";
import Input from "./ui/input";

function Sidebar({ users, handleClickUserAccount, handleSearch, deleteUser }) {
  return (
    <div className="sidebar">
      <div className="d-flex s-between mb-1">
        <Input
          placeholder={"Search ..."}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      {!users.length
        ? "No Contact"
        : users.map((user) => (
            <CarsInform
              {...user}
              key={user.name}
              handleClickUserAccount={handleClickUserAccount}
              handleDelete={deleteUser}
            />
          ))}
    </div>
  );
}
export default Sidebar;
