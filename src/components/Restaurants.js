import React, { Component } from 'react';
import { connect } from 'react-redux';

class Restaurants extends Component {

  render() {

    let restaurants = this.props.restaurants.map((restaurant, index) => <li key={index}><p>Restaurant Name: {restaurant.name}</p><p>Restaurant Loction: {restaurant.location}</p></li>);

    return (
      <div>
        <ul>
          {restaurants}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return { restaurants: state.restaurants }
}

export default connect(mapStateToProps)(Restaurants);
