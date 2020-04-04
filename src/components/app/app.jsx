import React, {PureComponent} from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import PlaceCardDetails from '../place-card/place-card-details.jsx';
import PropTypes from "prop-types";

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
    this.state = {
      activeCard: null
    };
  }

  _handleOfferTitleClick(activeCard) {
    this.setState({activeCard});
  }

  _renderApp() {
    const {places} = this.props;
    if (this.state.activeCard) {
     // console.log(this.state.activeCard);
     // console.log(`---------------`);
    //  console.log(places[0]);
      return <PlaceCardDetails place={this.state.activeCard} />;
    }
    return <Main onOfferTitleClick={this._handleOfferTitleClick} places={places} />;
  }

  render() {
    const {places} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/dev-offer">
            <PlaceCardDetails place={places[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        amount: PropTypes.number,
        type: PropTypes.string
      })
  )
};

export default App;
