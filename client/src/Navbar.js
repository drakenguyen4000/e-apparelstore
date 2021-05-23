import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { cartCount } from "./components/ExportVar";
import RegisterModal from "./components/auth/RegisterModal";
import Logout from "./components/auth/Logout";
import { getList } from "./action/index";

const Navbar = (props) => {
  const { isAuthenticated, user } = props.auth;

  const authLinks = (
    <>
      <li className="nav__welcome">{user ? `Welcome ${user.name}!` : null}</li>
      <li className="nav__item nav__item-right">
        <Link className="nav__item-right-color" to={user ? `/eapparel/orderhistory/${user._id}` : "#"} replace>
          History
        </Link>
      </li>
      <li className="nav__item nav__item-right">
        <Logout />
      </li>
    </>
  );

  const guestLinks = (
    <>
      <li className="nav__item">
        <RegisterModal />
      </li>
      <li>
        <Link className="nav__item" to={`/eapparel/login`} replace>
          Login
        </Link>
      </li>
    </>
  );

  return (
    <nav className="nav">
      <ul className="navbars nav__top">
        {isAuthenticated ? authLinks : guestLinks}
        <li className="nav__item shopping__cart__btn">
          <Link
            
            to={`/eapparel/shoppingcart`}
            replace
          >
            <span className="shopping-cart-btn">
              <span className="fa-layers fa-fw fa-lg">
                <i className="fas fa-shopping-cart fa-lg"></i>
                <span
                  className="fa-layers-counter fa-inverse fa-2x"
                  style={{ background: "none", fontWeight: "800" }}
                >
                  {cartCount(props)}
                </span>
              </span>
            </span>
          </Link>{" "}
        </li>
      </ul>
      <ul className="navbars nav__bottom">
        <li>
          <Link className="nav__item" to={`/eapparel`} replace>
            eApparel
          </Link>
        </li>
        <li>
          <Link className="nav__item" to={`/eapparel/men`} replace>
            Men
          </Link>
        </li>
        <li>
          <Link className="nav__item" to={`/eapparel/women`} replace>
            Women
          </Link>
        </li>
        <li>
          <Link className="nav__item" to={`/eapparel/boys`} replace>
            Boys
          </Link>
        </li>
        <li>
          <Link className="nav__item" to={`/eapparel/girls`} replace>
            Girls
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    auth: state.auth,
  };
};

export default connect(mapStateToProps, { getList })(Navbar);
