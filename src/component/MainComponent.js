import React, {Component} from "react";
import Header from "./HeaderComponent.js";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent.js";
import Home from "./HomeComponent.js";
import DishDetail from "./DishdetailComponent";
import Contact from "./ContactComponent.js";
import About from "./AboutCompnent";
import {DISHES} from "../shared/dishes.js";
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import {Switch, Route, Redirect} from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      comments: COMMENTS,
      leaders: LEADERS
    };
  }

  render() {
    const DishWithId = ({match}) => (
      <DishDetail dish={this.state.dishes.filter(dish => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.state.comments.filter(comment => comment.dishId === parseInt(match.params.dishId, 10))} />
    );

    const HomePage = () => (
      <Home dish={this.state.dishes.filter(dish => dish.featured)[0]}
        promotion={this.state.promotions.filter(promo => promo.featured)[0]}
        leader={this.state.leaders.filter(leader => leader.featured)[0]}
      />
    );

    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage}/>
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes}/>} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route exact path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
