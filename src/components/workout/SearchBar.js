import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {

    event.preventDefault();
    this.props.onFormSubmit(this.state.term);

  };

  render() {
    return (
      <div className="ui massive inverted input">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="ui inverted left icon input search-bar">
            <input type="text" placeholder="Search..." value={this.state.term} onChange={this.onInputChange} />
            <i className="search icon search-icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
