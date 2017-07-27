// Include React
import React from 'react';

class Saved extends React.Component {
	// initializes connection to parent
	constructor(){
    super();
	}

render() {
	return (
		<div className="Saved">
			<div className="panel panel-default">
					<div className="panel-heading">
						<h3 className="panel-title">Saved Articles</h3>
					</div>
					<div className="panel-body">
						
									<div className="panel panel-default">
										<div className="panel-heading">
											<div className="row">
												<div className="col-md-6">
													<h3 className="panel-title navbar-text"><a href="#">Article Headline</a></h3>
												</div>
												<div className="col-md-3"><small className="navbar-text">Date Saved: ?</small></div>
												<div className="col-md-3"><button type="button" className="pull-right btn btn-default navbar-btn">Delete</button></div>
											</div>
										</div>
										<div className="panel-body description">Snippet goes here.</div>
									</div>

					</div>
				</div>
		</div>

		);
	}
}; // End of component

// Export the component back for use in other files
export default Saved;
