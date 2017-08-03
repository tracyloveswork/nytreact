// Include React
import React from 'react';

// Here we include all of the sub-components
import Query from './Query';
import Results from './Results';

class Search extends React.Component {
	// initializes connection to parent
	constructor(props){
    super(props);
	}

render() {
	return (
		<div className="Search">

			<Query setQuery={this.props.setQuery} makeQuery={this.props.makeQuery} query={this.props.query} />

			<Results searchResults={this.props.searchResults} setSaved={this.props.setSaved} savedArticles={this.props.savedArticles} />

		</div>

		);
	}
}; // End of component

// Export the component back for use in other files
export default Search;
