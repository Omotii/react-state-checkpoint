import React from 'react';
import Heading from './component/heading';
import './App.css';

class App extends React.Component {
  state = {
    user: {
      name: "Anthony Oluwafemi Olaseni Joshua",
      bio: "Anthony Oluwafemi Olaseni Joshua OBE is a British professional boxer. He is a two-time former unified world heavyweight champion, having held the World Boxing Association, International Boxing Federation, and World Boxing Organization titles twice between 2016 and 2021.",
      profession: "boxing",
      imgSrc: "/image/images.jpg"
    },
      show: true,
      timeSinceMount: 0
    }

    componentDidMount() {
      this.interval = setInterval( () => {
        this.setState({timeSinceMount: this.state.timeSinceMount + 1});
      }, 1000)
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

  render() {
    return (
      <div className="App"> 
      {this.state.show && <Heading name={this.state.user.name} bio={this.state.user.bio} profession={this.state.user.profession} imgSrc={this.state.user.imgSrc} />}        
      <div className='button-container'>
      <button onClick={() => this.setState({show: !this.state.show})}>Toggle Show State</button>
      <p>Time since mount: {this.state.timeSinceMount}</p>
      </div>
      </div>
    );
  }
}

// The App function component was transformed into a class component.
// the div with the className button-container is used to style and hold the button and Time Mount Count Paragraph.

export default App;
