// Here we will utilize the axios library to perform GET/POST requests
import axios from 'axios';

// New York Times API Key
const authKey = "ae5d8eebadae4ccd996c3845a2402a6e";

// Exporting an object with methods for retrieving and posting data to our API
const helper = {

	// Make request
	makeRequest: (searchTopic, startYear, endYear) => {

	// Build query URL
		const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTopic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "1231&page=5";

	// Make request to NYT with search parameters
		return axios.get(queryURL).then((response) => {

      console.log(response);

      if(response.data.response.docs[0]) {
      	return response.data.response.docs;
      } else {
      	return "";
      }
    });
	}, // end of makeRequest

	// Get saved articles
	getSaved: () => {
  	return axios.get("/api/saved");
	}, // End of getSaved

	// Save article
	saveArticle: (articleTitle, articleDate, articleURL, articleSnippet) => {

  	return axios.post("/api/saved",
  		{
  			title: articleTitle,
  			date: articleDate,
        url: articleURL,
        snippet: articleSnippet
  		}
  	);
  }, // End of saveArticle

	// Delete article
	deleteArticle: (articleId) => {

  	return axios.delete("/api/saved/" + articleId)

  	.then(res =>  {
  		console.log(res);
  	})
  	.catch(err => {
  		console.log(err);
  	});

  } // end of deleteArticle

};

export default helper;