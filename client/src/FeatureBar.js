import { connect } from "react-redux";
import { Link } from "react-router-dom";

const FeatureBar = (props) => {
  //find first items not caterogy men - i.e. and display
  const { list } = props;
  const { selectedCategory } = props;
  
  const findRandom = () => {
    const randomList = [];
    //Create list from caterogy not of the current selected category
    const otherList = list.filter((item) => {
      return item.category !== selectedCategory ? item : null;
    });
    //Generate random from number from this otherList
    const random1 = Math.round(Math.random() * otherList.length);
    //Push this selected item into array
    randomList.push(otherList[random1]);
    //Create 2 list from excluding first random number
    const newOtherList = otherList.filter((item, i) => {
      return i !== random1 ? item : null;
    });
    //Random pick and push 2 item to array
    randomList.push(
      newOtherList[Math.round(Math.random() * newOtherList.length)]
    );
    return randomList;
  };

  const featureList = (feature) => {
    return (
      <div className="item" key={feature._id}>
        <Link
          to={`/eapparel/${feature.category}/${feature._id}`}
        >
          <img
            className="item__image"
            src={`${feature.image}`}
            alt={`${feature.description}`}
          />
        </Link>
        <Link
          className="item__brand-link"
          to={`/eapparel/${feature.category}/${feature._id}`}
        >
          <p className="item__brand">{feature.title}</p>
        </Link>
        <Link
          className="item__description-link"
          to={`/eapparel/${feature.category}/${feature._id}`}
        >
          <p className="item__description">{feature.description}</p>
        </Link>
        <p className="item__price">
          <strong>${feature.price}</strong>
        </p>
      </div>
    );
  };

  if (list) {
    const feature = findRandom();
    return (
      <div className="feature">
        <h5 className="feature__title">Featured Items</h5>
        <div className="feature-wrapper">
        {feature.map((feature) => {
          return feature ? featureList(feature) : null;
        })}
      </div>
      </div>
    );
  }
  return <div></div>;
};

const mapStateToProps = (state) => {
  return {
    list: state.item.items,
    selectedCategory: state.item.category,
  };
};

export default connect(mapStateToProps)(FeatureBar);