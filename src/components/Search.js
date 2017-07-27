// Include React
import React from 'react';

// Here we include all of the sub-components
import Query from './Query';
import Results from './Results';

class Search extends React.Component {
	// initializes connection to parent
	constructor(){
    super();
	}

render() {
	return (
		<div className="Search">
				<Query searchString={this.state.searchString} startYear={this.state.startYear} endYear={this.state.endYear} makeRequest={this.makeRequest} />

				<Results searchResults={this.state.searchResults} newArticle={this.state.newArticle} saveArticle={this.saveArticle} />

		</div>

		);
	}
}; // End of component

// Export the component back for use in other files
export default Search;
