// Include React
import React from 'react';

// Here we include all of the sub-components
import Search from './Search';
import Saved from './Saved';

// Requiring our helper for making API calls
import helpers from '../utils/helpers';

// Create the Main Component
class Main extends React.Component {
// Constructor
	constructor(){
    super();

    // Here we set our state variables
    this.state = {
      query: "",
      searchResults: [],
      savedArticles: [],
    };
  }

// These functions will give the Child components access to update parent states by passing the function as a prop
setQuery = (newQuery) => {
    this.setState({
      query: newQuery
    });
  }

  setSaved = (newSaved) => {
  	this.setState({
  		savedArticles: newSaved
  	});
  }

// Pull saved articles into page
componentDidMount() {
	helpers.getSaved().then(function(response) {

		if (response !== this.state.savedArticles) {
			this.setState({ savedArticles: response.data });
			}

	}.bind(this));
}

// Update to the search string
componentDidUpdate(prevProps, prevState) {

	if (prevState.query !== this.state.query) {

		helpers.makeRequest(this.state.query).then((data) => {
			if (data !== this.state.searchResults) {
				this.setState({ searchResults: data });
			};
		});
	}
}

// Save article is done on Results component


// Delete article is done on Saved component


// Render page
  render() {
    return (
      <div className="container">

	      <div className="jumbotron">
					<img src="/assets/images/nyt-logo-379x64.png" className="img-responsive center-block" alt="New York Times" />
					<p className="text-center">Search and save articles of interest.</p>
				</div>
				
				<div className="row">
					{/* Search component - searchString, article to save, saved articles, search results */}
					<Search setQuery={this.setQuery} setSaved={this.setSaved} query={this.state.query} searchResults={this.state.searchResults} />
				</div>

				<div className="row">
					{/* Saved component and delete article */}
					<Saved setSaved={this.setSaved} savedArticles={this.state.savedArticles} />
				</div>

      </div>
     )
  }


}; // End of component
// Export the component back for use in other files
export default Main;