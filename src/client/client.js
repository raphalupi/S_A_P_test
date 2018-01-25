import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AppPalindrome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      phrase: null,
      response: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.performSearch = this.performSearch.bind(this);
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  performSearch() {
    const { input } = this.state;

    // clears the response object
    this.setState({
      response: null,
    }, () => {
      // fetches is a phrase is a palindrome
      axios.get(`/api/palindrome?phrase=${input}`)
        .then(res => {
          const { status } = res;
          // store in state to render the result on screen
          this.setState({
            phrase: input,
            response: true,
          });
        }).catch(err => {
          // if the error status is 400
          if (err.response.status === 400) {
            // then it's not a palindrome phrase
            this.setState({
              phrase: input,
              response: false,
            });
          } else {
            // logs other errors
            console.error(err);
          }
        });
    });
  }

  render() {
    const { input, phrase, response } = this.state;

    const resultString = response ? `'${phrase}' IS A PALINDROME! :D` : `'${phrase}' is not a palindrome. :/`;

    return (
      <div>
        <h1>Palindrome check!</h1>
        <p>Type in a phrase and see if it's a palindrome.</p>

        <div>
          <input
            value={input}
            onChange={e => this.handleChange(e)} />
          <button onClick={() => this.performSearch()}>Check!</button>
        </div>
        <div style={{marginTop: '5px'}}>
          Result: {resultString}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <AppPalindrome/>,
  document.getElementById('root')
);
