import React from "react";
import PropTypes from "prop-types";
import {Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link} from "react-router-dom";

const RenderMenuItem = prop => (
  <Link to={`menu/${prop.dish.id}`}>
    <Card>
      <CardImg width="100%" src={prop.dish.image} alt={prop.dish.name} />
      <CardImgOverlay>
        <CardTitle>{prop.dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  </Link>
);
const Menu = props => {
  const menu = props.dishes.map(dish => (
    <div className="col-12 col-md-5 m-1" key={dish.id}>
      <RenderMenuItem dish={dish} />
    </div>
  ));

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">
        {menu}
      </div>
    </div>
  );
};

Menu.propTypes = {
  dishes: PropTypes.array,
  onClick: PropTypes.func
};

export default Menu;
