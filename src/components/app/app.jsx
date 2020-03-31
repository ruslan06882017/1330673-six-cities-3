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
      return <PlaceCardDetails places={places} />;
    }
    return <Main places={places} />;
  }

  render() {
    const {places} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/place">
            <PlaceCardDetails places={places}/>
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
