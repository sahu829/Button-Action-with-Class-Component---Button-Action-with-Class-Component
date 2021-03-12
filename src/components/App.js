import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { paragraph: "" };
  }

  render() {
    return (
      <div id="main">
        {/* Do not remove this main div!! */}
        <paragraph id="para">{this.state.paragraph}</paragraph>

        <button
          id="click"
          onClick={() => {
            this.setState({
              paragraph:
                "Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
            });
          }}
        >
          btn
        </button>
      </div>
    );
  }
}

export default App;
