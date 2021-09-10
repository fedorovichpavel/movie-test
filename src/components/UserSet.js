import user from "../assets/images/user.svg";
import arrow from "../assets/images/arrow.png";

const UserSet = () => {
  return (
    <div className="user">
      <img src={user} alt="user" />
      <span>UserName</span>
      <img src={arrow} alt="user" />
    </div>
  );
};

export default UserSet;
