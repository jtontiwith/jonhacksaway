import React, { Component } from 'react';
import './App.css';

// NOTE: Please build this kanban board from scratch without pre-built components such as react-trello...

// 1. Create a list of 4 boards with 2 default items in each list.
// 2. Style boards according to the png provided.
// 3. Create the functionality to add a task to each list.
// 4. Create the buttons and functionality to move cards from one list to another.
// 5. Persist cards in the browser.

class App extends Component {
  state = {}

  render() {
    return (
      <div style={styles.app}>
        // 1. Create a list of 4 boards with 2 default items in each list. <br/>
        // 2. Style boards according to the png provided. <br/>
        // 3. Create the functionality to add a task to each list. <br/>
        // 4. Create the buttons and functionality to move cards from one list to another. <br/>
        // 5. Persist cards in the browser. <br/>
      </div>
    );
  }
}

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 25 / 2,
  },
}

export default App;
