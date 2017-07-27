// Include React
import React from 'react';

class Query extends React.Component {
	// initializes connection to parent
	constructor(){
    super();

    this.state ={
    	searchString: "",
    	startYear: "",
      endYear: ""
    }
	}


handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault()
		console.log('handleSubmit called')

		this.props.makeRequest(searchString, startYear, endYear);

	};

render() {
	return (
		<div className="Query">

						<div className="text-center">
					<form className="form-inline">
						<div className="form-group">
							<label className="sr-only" for="topic">Topic</label>
							<input 
							type="text" 
							className="form-control" 
							id="searchString" 
							placeholder="Topic"
							value={this.state.searchString}
							onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<label className="sr-only" for="startYear">Start Year</label>
							<input 
							type="number" 
							className="form-control" 
							id="startYear" 
							placeholder="Start Year: 1999"
							value={this.state.startYear}
							onChange={this.handleChange}
							/>
						 </div>
						<div className="form-group">
							<label className="sr-only" for="endYear">End Year</label>
							<input type="number" 
							className="form-control" 
							id="endYear" 
							placeholder="End Year: 1999"
							value={this.state.endYear}
							onChange={this.handleChange}
							/>
						</div>
						<button type="submit" className="btn btn-primary" onClick={this.handleSubmit(searchString, startYear, endYear)}>Search</button>
					</form>
				 </div>

		</div>

		);
	}
}; // End of component

// Export the component back for use in other files
export default Query;