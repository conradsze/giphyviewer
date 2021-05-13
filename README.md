<h2>GiphyViewer</h1>
<h3>Introduction </h3>

This application is created for gif searching and it can also bookmark users’ favorite gifs. It pulls data from Giphy API. This application is built with jquery3.4 and bootstrap4.1 and written in Javascript and HTML

<h3>Application Design </h4>
Data flow
<img width="467" alt="Screen Shot 2021-05-13 at 4 32 10 PM" src="https://user-images.githubusercontent.com/11471832/118108319-6f05e380-b412-11eb-84cd-d03a8ad3a812.png">

<h4>operation</h5>
<img width="495" alt="Screen Shot 2021-05-13 at 5 09 31 PM" src="https://user-images.githubusercontent.com/11471832/118108377-81801d00-b412-11eb-9715-e0556122828f.png">
enter the APIkey from Giphy

<img width="1193" alt="Screen Shot 2021-05-13 at 5 10 04 PM" src="https://user-images.githubusercontent.com/11471832/118108411-8a70ee80-b412-11eb-8523-01823403e038.png">
search a topic

<img width="236" alt="Screen Shot 2021-05-13 at 5 10 19 PM" src="https://user-images.githubusercontent.com/11471832/118108435-92309300-b412-11eb-83c1-7bf2861540ef.png">
bookmark the gif by clicking the heart

<img width="1185" alt="Screen Shot 2021-05-13 at 5 10 42 PM" src="https://user-images.githubusercontent.com/11471832/118108451-99f03780-b412-11eb-82f7-6635c9afd86e.png">
bookmarked gif will be show in "my favorite GIF"

<h3>Approach </h4>

Since the backend data is mostly provided by Giphy API, it only requires a well coded frontend. jQuary is one of the easiest libraries to handle the job, unlike reactJS and angularJS that requires nodeJS as a running service. This app only has 3 files at the end and does not require a server to run, therefore, it can be easiest to host and go live. However, there is a trade off. Since it doesn’t require a running server, there is no way to hide the API key, clients have to enter their own API key, but the audience of this application is also programmers, this should not be a problem. Another advantage of this app is that it doesn't require a database, as the data is being stored in the local storage, which is faster to pull and cheaper to host. Yet, the trade off will be that users cannot share the information if they are using two devices as the data is stored locally.

<h3>Business Outcome  </h4>

Gif is fun to watch, can also send to others to explain a feeling. People can use this app to kill time and bookmark some gifs to enjoy. This app can have an area to show ads which can make profit. Furthermore, advertising companies can pay to prioritize gifs that are related to their business in the result if several keywords are being searched. 

Potentially the business outcome and usability for this application. 

<h3>Go Live  </h4>

It is live on <https://conradsze.github.io/giphyviewer/> already. If possible, will make it mobile friendly and also find a way to hide the API key.

<h3>Source Code  </h4>

https://github.com/conradsze/giphyviewer

