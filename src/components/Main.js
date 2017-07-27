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
      searchString: "",
      startYear: "",
      endYear: "",
      searchResults: [],
      savedArticles: [],
      newArticle: {}
    };
  }

// Pull saved articles into page on load
componentDidMount() {
	helpers.getSaved().then(function(response) {
		if (response !== this.state.saved) {
			this.setState({ savedArticles: response.data });
			}
	}.bind(this));
}

// Update to the search string
componentDidUpdate(prevProps, prevState) {

	if (prevState.searchString !== this.state.searchString) {

		helpers.makeRequest(this.state.searchString, this.state.startYear, this.state.endYear).then((data) => {
			if (data !== this.state.searchResults) {
				this.setState({ searchResults: data });
			};
		});
	}
}

// Save article

// Delete article

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
					<Search searchString={this.state.searchString} startYear={this.state.startYear} endYear={this.state.endYear} makeRequest={this.makeRequest} searchResults={this.state.searchResults} newArticle={this.state.newArticle} saveArticle={this.saveArticle} />
				</div>

				<div className="row">
					{/* Saved component and delete article */}
					<Saved savedArticles={this.state.savedArticles} deleteArticle={this.deleteArticle} />
				</div>

      </div>
     )
  }


}; // End of component
// Export the component back for use in other files
export default Main;