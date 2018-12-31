import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer.js'
import CardContainer from './components/CardComponents/CardContainer.js'
import Footer from './components/FooterComponents/Footer.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
      retweets: 0
    }
  }

  handleLike = () => {
    this.setState({
      likes: this.state.likes + 1
    });
  };

  handleRetweet = () => {
    this.setState({
      retweets: this.state.retweets + 1
    });
  };

  render() {
    return (
      <div className="app">
        <HeaderContainer />
        <CardContainer />
        <Footer 
          handleLike={this.handleLike} 
          likes={this.state.likes}
          handleRetweet={this.handleRetweet}
          retweets={this.state.retweets}
        />
      </div>
    );
  }
};

export default App;
