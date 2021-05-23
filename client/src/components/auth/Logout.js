import { connect } from "react-redux";
import { logout } from "../../action/authActions";
import { Link } from "react-router-dom";

const Logout = (props) => {
  return (
    <>
      <Link className="nav__item-right-color" onClick={props.logout} to="#" replace>
        Logout
      </Link>
    </>
  );
};

export default connect(null, { logout })(Logout);
