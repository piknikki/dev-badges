import React, { Component } from 'react';
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import Footer from "./Components/Footer";
import './App.css';

import badges from "./badges.json";
import BadgeCard from "./Components/BadgeCard/";

class App extends Component {

  render() {
      console.log(badges[0])
      console.log(badges[1])
    return (
        <div className="container">
          <Title />
          <Wrapper>
            {badges.map(badge => (
                <BadgeCard
                    key={badge.id}
                    id={badge.id}
                    name={badge.name}
                    image={badge.image}
                    description={badge.name}
                />
                // <h4>{badge.description}</h4>

            ))}

            <Footer />
          </Wrapper>
        </div>
    );
  }
}

export default App;
