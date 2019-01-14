import React, {Component} from "react";
import PropTypes from "prop-types";
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent.js";
import Home from "./HomeComponent.js";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactComponent.js";
import About from "./AboutCompnent";
import {Switch, Route, Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const DishWithId = ({match}) => (
      <DishDetail dish={this.props.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} />
    );

    const HomePage = () => (
      <Home dish={this.props.dishes.filter(dish => dish.featured)[0]}
        promotion={this.props.promotions.filter(promo => promo.featured)[0]}
        leader={this.props.leaders.filter(leader => leader.featured)[0]}
      />
    );

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

Main.propTypes = {
  dishes: PropTypes.array,
  comments: PropTypes.array,
  promotions: PropTypes.array,
  leaders: PropTypes.array
};

const mapStateToProps = state => ({
  dishes: state.dishes,
  comments: state.comments,
  promotions: state.promotions,
  leaders: state.leaders
});


export default withRouter(connect(mapStateToProps, null)(Main));
