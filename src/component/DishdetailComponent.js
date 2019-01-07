import React from "react";
import PropTypes from "prop-types";
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from "reactstrap";
import moment from "moment";
import {Link} from "react-router-dom";

const RenderDish = dishProp => {
  if (dishProp.dish !== null) {
    return (
      <Card>
        <CardImg width="100%" src={dishProp.dish.image} alt={dishProp.dish.name} />
        <CardBody>
          <CardTitle>{dishProp.dish.name}</CardTitle>
          <CardText>{dishProp.dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  return (
    <div />
  );
};

const RenderComments = prop => {
  if (prop.comments !== null) {
    const commentsList = prop.comments.map(comment => (
      <div key={comment.id} className="">
        <li className="list-unstyled mb-4"> {comment.comment}</li>
        <li className="list-unstyled mb-4">-- {comment.author}, {moment(comment.date).format("ll")}</li>
      </div>

    )
    );

    return (
      <div>
        <h4> Comments </h4>
        {commentsList}
      </div>
    );
  }

  return (
    <div />
  );
};

const DishDetail = props => (
  <div className="container">
    <div className="row">
      <Breadcrumb>
        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
        <h3>{props.dish.name}</h3>
        <hr />
      </div>
    </div>
    <div className="row">
      <div className="col-12 col-md-5 m-1">
        <RenderDish dish={props.dish} />
      </div>
      <div className="col-12 col-md-5 m-1">
        <RenderComments comments={props.comments} />
      </div>
    </div>
  </div>
);

DishDetail.propTypes = {
  dish: PropTypes.object,
  comments: PropTypes.array
};

export default DishDetail;
