//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}

//------------------------------------------------------------------------------------
function myFunction() {
	var x = document.getElementById("snackbar");
	x.className = "show";
	setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

//-----------------------------------------------------------------------------------------
function loadXMLDoc() {

	let url="https://www.nasa.gov/rss/dyn/breaking_news.rss";
	let proxy="https://cors-anywhere.herokuapp.com/";

	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo").innerHTML =
		this.responseText;
	  }
	};
	xhttp.open("GET", proxy + url, true);
	xhttp.send();
}

function loadXMLDoc2() {

	let url="https://www.nasa.gov/rss/dyn/educationnews.rss";
	let proxy="https://cors-anywhere.herokuapp.com/";

	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo2").innerHTML =
		this.responseText;
	  }
	};
	xhttp.open("GET", proxy + url, true);
	xhttp.send();
}

function loadXMLDoc3() {

	let url="https://www.nasa.gov/rss/dyn/lg_image_of_the_day.rss";
	let proxy="https://cors-anywhere.herokuapp.com/";

	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo3").innerHTML =
		this.responseText;
	  }
	};
	xhttp.open("GET", proxy + url, true);
	xhttp.send();
}

function loadXMLDoc4() {

	let url="https://www.nasa.gov/rss/dyn/onthestation_rss.rss";
	let proxy="https://cors-anywhere.herokuapp.com/";

	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		document.getElementById("demo4").innerHTML =
		this.responseText;
	  }
	};
	xhttp.open("GET", proxy + url, true);
	xhttp.send();
}

//-----------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------------------------------------------

//Data: assume we have a list of top 5 movies
let topMovies = [{id: 0, title: "ASUS Expertbook P2451FA-EB0321R Business Laptop", year: 1690, image_url: "MEDIA/NBKASU245102__1.webp"},
				         {id: 1, title: "HP Probook 450 G8 Business Laptop", year: 1534, image_url: "MEDIA/NBKHNB450852__1.webp"},
				         {id: 2, title: "HP Zbook Firefly 14 G8 business", year: 2072, image_url: "MEDIA/NBKHNB5192727__1.webp"},
			           	 {id: 3, title: "MSI Modern 15 A11MU Ultrabook", year: 1599, image_url: "MEDIA/NBKMSI1511879__1.webp"},
			           	 {id: 4, title: "Apple 16 Macbook Pro M1 Pro", year: 4199, image_url: "MEDIA/NBKAPP162151211__1.webp"},
						 {id: 5, title: "HP Probook 450 G9 Business Laptop", year: 1592, image_url: "MEDIA/NBKHNB450903__1.webp"},
				];


//-------------------------------------------------------------------------------------------------------------------
//EXERCISE 1: Two slideshows
//Manual Slideshow
let manualIndex = 0;
function nextMovie() {
	//Increase the index by 1 if the index <= the leght of topMovie array
	//If the index -- 4, move back to the first movie: index - 0
	if (manualIndex < topMovies.length - 1) {
		manualIndex++;
	} else {
		manualIndex = 0;
	}

	//Extract the title, image_url and display on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topMovies[manualIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[manualIndex].image_url;
}

function previousMovie() {
	//Decrease the index if the index is not 0
	if (manualIndex > 0 ) {
		manualIndex--;
	} else {
		manualIndex = topMovies.length - 1;
	}
	//Extract the title and url and display them on HTML elements
	document.getElementById("manual-slide-title").innerHTML = topMovies[manualIndex].title;
	document.getElementById("manual-slide-image").src = topMovies[manualIndex].image_url;
}


//Automatic Slideshow
let autoIndex = 0;
function autoSlideShow() {
	//Change the autoIndex
	if (autoIndex < topMovies.length - 1) {
		autoIndex++;
	} else {
		autoIndex = 0;
	}
	//Extract title and url and display them on HTML Elements
	document.getElementById("auto-slide-title").innerHTML = topMovies[autoIndex].title;
	document.getElementById("auto-slide-image").src = topMovies[autoIndex].image_url;
	//Wait 2 seconds and display next movie
	setTimeout(autoSlideShow, 2000);//wait 2s
}

//Execute the autoSlideShow() function when loading the website
autoSlideShow()

//------------------------------------------------------------------------------------------------------------
//Exercise 2: Dropdown menubar

//Populate the "select" element with all movies in the list
function loadMyMovies() {
	//Find the select Element
	let movieSelect = document.getElementById("my-movieList");
	//Loop through all movies is the list (array) and extract its title
	//and add to the select Element
	for(var i=0; i < topMovies.length ; i++) {
		//Extract title and add to select element
		//Create a new option
		let node = document.createElement("option");
		//Assign the option "value" & "textContent"
		node.value = topMovies[i].id.toString();
		node.textContent = topMovies[i].title.toString();
		//Append this option to the "select" element
		movieSelect.appendChild(node);
	}
	movieSelect.selectedIndex= "0";
}

//EVENT: Listed to the event "select an item"
loadMyMovies();
//When user select a particular movie, display title/url/year of that movie
function displayMyMovie() {
	//Get the selected movie "option value"
	let selectedMovieIndex = document.getElementById("my-movieList").value;
	document.getElementById("my-movieTitle").innerHTML = topMovies[selectedMovieIndex].title;
	document.getElementById("my-movieYear").innerHTML = topMovies[selectedMovieIndex].year;
	document.getElementById("my-movieImageURL").src = topMovies[selectedMovieIndex].image_url;
}

//---------------------------------------------------------------------------------------------------
//Add new movie to the list
//Add a new movie to the existing list
function AddItemToList() {
	let newItemTitle = document.getElementById("my-movie-title").value;
	let newItemYear = document.getElementById("my-movie-year").value;
	let newItemUrl = document.getElementById("my-movie-image-url").value;
	let newId = topMovies.length;

	if ((newItemTitle == "") || (newItemYear == "") || (newItemUrl == "")) {
		alert("Error. Data is incomplete!");
	} else {
		topMovies.push({id: newId, title: newItemTitle, year: parseInt(newItemYear), image_url: newItemUrl});
		alert("New item added successfully!");

		document.getElementById("my-movieList").options.length = 0;
		loadMyMovies();

		document.getElementById("my-movie-title").value == "";
		document.getElementById("my-movie-year").value == "";
		document.getElementById("my-movie-image-url").value == "";
	}
}

//------------------------------------------------------------------------------------------------------
//ADD NEW COMMENT
//Data: Assume we have a list of existing comments stored in an array "allComments"
let allComments = [{name: "Ian", comment: "Recommended, good one"},
	{name: "Aman", comment: "I don't like this movie"},
	{name: "John", comment: "Love it"},
	];
//----------
//Load all existing comments and display them on HTML
function loadComments() {
	//Loop through all comments in the array "allComments"
	for (var i=0; i < allComments.length; i++) {
		let name = allComments[i].name;
		let comment = allComments[i].comment;
		//
		//Create a new HTML node/element <P> to display this comment
		let node = document.createElement("P");
		let textnode = document.createTextNode(name + ": " + comment);
		node.appendChild(textnode);//Append the content (created TextNode) to the HTML Node (child)
		let parrent_node = document.getElementById("comment-list");//Get the id of parent node "commentlist"
		parrent_node.appendChild(node);//Append the above child HTML node to the parent node
	}
}

loadComments();

//----------
//Add a new comment
function addComment() {
	//Get entered value/data by user
	let enteredCommentName = document.getElementById("comment_name").value;
	let enteredCommentText = document.getElementById("comment_text").value;
	//Add this new comment to the array
	allComments.push({name: enteredCommentName, comment: enteredCommentText});
	alert("Thank you for your comment!");
	//Display this new comment on HTML page
	//Create a new child HTML node/element as "<p>" (paragraph) (as a child node)
	let node = document.createElement("P");
	//Create a new TextNode
	let textnode = document.createTextNode(enteredCommentName + ": " + enteredCommentText);
	//Append the content (created TextNode) to the HTML Node (child)
	node.appendChild(textnode);
	//Get the id of parent node "comment-list"
	let parrent_node = document.getElementById("comment-list");
	//Append the above child HTML node to the parent node
	parrent_node.appendChild(node);
	//Clear comment box
	document.getElementById("comment_name").value = "";
	document.getElementById("comment_text").value = "";
}

//------------------------------------------------------------------------------------------------------------
//Vote: like / dislike
//Assume the current votes are: 20 likes and 5 dislike
let currentVotes = {like: 20, dislike: 5};

//load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//variables to track the clicking status
//Rule: allow to vote only one: up or down
let voteStatus = {like: false, dislike: false};

//click like button
function like() {
	//check current status of "like" button (has been clicked or not)
	if (voteStatus.like == false) {
		//increase a "like": increase the like number by 1
		document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
		//change the background color of like button to green
		document.getElementById("likeButton").style.backgroundColor = "green";
		//change the current status of "like" button: has been clicked
		voteStatus.like = true;

		//Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
		if (voteStatus.dislike == true) {
			document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
			voteStatus.dislike = false;
			document.getElementById("dislikeButton").style.backgroundColor = "white";
		}
	} else {
		//Keep the current number of like
		document.getElementById("likeNumber").innerHTML = currentVotes.like;
		//change the background color of like button to white
		document.getElementById("likeButton").style.backgroundColor = "white"
		//change the current status of "like" button
		voteStatus.like = false;
	}
}

//click dislike button
function dislike() {
	//check current status of "like" button (has been clicked or not)
	if (voteStatus.dislike == false) {
		//increase a "like": increase the like number by 1
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
		//change the background color of like button to green
		document.getElementById("dislikeButton").style.backgroundColor = "green";
		//change the current status of "like" button: has been clicked
		voteStatus.dislike = true;

		//Check "dislike" status - if dislike has been voted, down it by one & change status to False & change background color to white
		if (voteStatus.like == true) {
			document.getElementById("likeNumber").innerHTML = currentVotes.like;
			voteStatus.like = false;
			document.getElementById("likeButton").style.backgroundColor = "white";
		}
	} else {
		//Keep the current number of like
		document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
		//change the background color of like button to white
		document.getElementById("dislikeButton").style.backgroundColor = "white"
		//change the current status of "like" button
		voteStatus.dislike = false;
	}
}

//-------------------------------------------------------------------------------------------------------------
