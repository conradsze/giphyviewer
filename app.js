// apikey will be provided by client
const apikey = (typeof api_key === 'undefined') ? prompt("Please enter the API key from https://developers.giphy.com/"):api_key ;
const search_url = "https://api.giphy.com/v1/gifs/search"
let offset
// getting favioute list from local storage
let favList = localStorage.getItem('favList')|| ""
	favList = favList.split(",")
let append = function(g){
//append the gif and also indicate if the gif is on the favioute list
			let isFav = (favList.indexOf(g.id) == -1)? "":"animate"
			$("#result").append( "<div><img src='"+ g.images.fixed_height.url 
				+"'> <h3><div id='"+g.id+"' class='HeartAnimation "
				+ isFav +"'></div></h3></div>" )

// handle clicking on the like button
		    $(".HeartAnimation").last().click(function(e){
		 	$(this).toggleClass("animate");
		  	likeBtn(g)
		  });
		}
// add/remove gif id on the list
let likeBtn = function(g) {
		    console.log(g);
		    if(favList.indexOf(g.id) !== -1){
		    	// alert("GIF(#"+ g.id + ") is removed")
		    	favList.splice( $.inArray(g.id, favList), 1 )
		    } else{
		    	favList.push(g.id);
		    }
		    console.log(favList);
		    localStorage.setItem('favList', favList);
		  }

//function that handle the search result
$("#search").click(function(){
	offset = 0
	$.get( search_url, { api_key: apikey, q: $("#query").val(), offset: offset } )
	.done(function( data ) {
		offset = data.pagination.count + data.pagination.offset
		console.log(data)
		$("#result").empty()
		data.data.map(function(g){
			append(g)
		}) 
	});
	console.log("clicked")
	console.log($("#query").val() )

})
//function that handle scroll for more result
$(window).scroll(function(){
    if($(window).scrollTop() == $(document).height() - $(window).height()) {
    	$.get( search_url, { api_key: apikey, q: $("#query").val(), offset: offset } )
    	.done(function( data ) {
    		offset = data.pagination.count + data.pagination.offset
    		if(offset==data.pagination.total_count){
    			console.log("bottom of the page")
    		}
    		console.log(data)
    		data.data.map(function(g){
    			append(g)
    		})
    	});
	console.log("scrolled")
    }
});
//function that manage gif on the fav list
$("#fav").click(function(){
	if(favList.length >=1 && favList != ""){
		$.get( "https://api.giphy.com/v1/gifs", { api_key: apikey, ids:localStorage.getItem('favList')} )
		.done(function( data ) {
			console.log(data)
			$("#result").empty()
			data.data.map(function(g){
	    			append(g)
	    	}) 
		});		
	}else{
		console.log("the favioute list is empty")
		$("#result").empty()
		$("#result").append("<p>Seem like your favioute list is empty</p>")
	}

	console.log("clicked")
	console.log($("#query").val() )

})

