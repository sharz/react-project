import React from "react";
import PropTypes from "prop-types";
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from "reactstrap";

const RenderCard = prop => (<Card>
  <CardImg src={prop.item.image} alt={prop.item.name} />
  <CardBody>
    <CardTitle>{prop.item.name}</CardTitle>
    {prop.item.designation ? <CardSubtitle>{prop.item.designation}</CardSubtitle> : null }
    <CardText>{prop.item.description}</CardText>
  </CardBody>
</Card>
);

const Home = props => (
  <div className="container">
    <div className="row align-items-start">
      <div className="col-12 col-md m-1">
        <RenderCard item={props.dish} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.promotion} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.leader} />
      </div>
    </div>
  </div>
);

Home.propTypes = {
  dish: PropTypes.object,
  promotion: PropTypes.object,
  leader: PropTypes.object
};
export default Home;
