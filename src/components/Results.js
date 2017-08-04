// Include React
import React from 'react';

// Requiring our helper for making API calls
import helpers from '../utils/helpers';

class Results extends React.Component {
	// initializes connection to parent
	constructor(props){
    super(props);

    this.state = {	
      article: {
        title: " ",
        date: " ",
        url: " ",
        snippet: " "
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
	}

// Pick up values of article and use helper to save to database
handleSubmit (index, title, date, url, snippet) {

	let dateString = date.slice(0,10);

	console.log(`Date: ${dateString}\nTitle: ${title}`)

	const newState = this.state.article;

	newState.title = title;
	newState.date = dateString;
	newState.url = url;
	newState.snippet = snippet;

	this.setState({
		article: newState
	})

	helpers.saveArticle(newState)

	this.props.setSaved()

	let newResults = this.props.searchResults
	newResults.splice(index, 1)

}

render() {
	return (
		<div className="Results">
		{this.props.searchResults.length > 0 && 

	      <div className="panel panel-default">
	        <div className="panel-heading">
	          <h3 className="panel-title">Search Results</h3>
	        </div>
	        		<div className="panel-body">
	        		{this.props.searchResults.map((obj, index) => {
	        			return (
									<div key={index} className="panel panel-default" onClick={() => this.handleSubmit(index, obj.headline.main, obj.pub_date, obj.web_url, obj.snippet)}>
										<div className="panel-body">
											<div className="row">
												<div className="col-md-9">
													<h3 className="panel-title navbar-text"><a href={obj.web_url}>{obj.headline.main}</a></h3>
												</div>
												<div className="col-md-3"><button type="button" className="pull-right btn btn-default navbar-btn">Save</button></div>
											</div>
										</div>

									</div>

									)
	        		})}
	
	        		</div>
	      </div>

	      }
		</div>

		);
	}
}; // End of component

// Export the component back for use in other files
export default Results;