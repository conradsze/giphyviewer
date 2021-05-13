<h1>GiphyViewer</h1>
<h4>Introduction  

This application is created for gif searching and it can also bookmark users’ favorite gifs. It pulls data from Giphy API. This application is built with jquery3.4 and bootstrap4.1 and written in Javascript and HTML

<h4>Application Design </h4>

A component design graph is required for this section, also the data flow for read and write operation. 

<img src="https://imgur.com/iQNn3wr">

<img src="https://imgur.com/UO8d6P1">
enter the APIkey from Giphy

<img src="https://imgur.com/9KdcKUd">
search a topic

<img src="https://imgur.com/RnlMHNr">
bookmark the gif by clicking the heart

<img src="https://imgur.com/hIZcVeE">
bookmarked gif will be show in "my favorite GIF"

<h4>Approach </h4>

Since the backend data is mostly provided by Giphy API, it only requires a well coded frontend. jQuary is one of the easiest libraries to handle the job, unlike reactJS and angularJS that requires nodeJS as a running service. This app only has 3 files at the end and does not require a server to run, therefore, it can be easiest to host and go live. However, there is a trade off. Since it doesn’t require a running server, there is no way to hide the API key, clients have to enter their own API key, but the audience of this application is also programmers, this should not be a problem. Another advantage of this app is that it doesn't require a database, as the data is being stored in the local storage, which is faster to pull and cheaper to host. Yet, the trade off will be that users cannot share the information if they are using two devices as the data is stored locally.

<h4>Business Outcome  </h4>

Gif is fun to watch, can also send to others to explain a feeling. People can use this app to kill time and bookmark some gifs to enjoy. This app can have an area to show ads which can make profit. Furthermore, advertising companies can pay to prioritize gifs that are related to their business in the result if several keywords are being searched. 

Potentially the business outcome and usability for this application. 

<h4>Go Live  </h4>

It is live on <https://conradsze.github.io/giphyviewer/> already. If possible, will make it mobile friendly and also find a way to hide the API key.

<h4>Source Code  </h4>

https://github.com/conradsze/giphyviewer

