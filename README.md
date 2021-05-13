<h1>GiphyViewer</h1>
<h2>Introduction </h2>

This application is created for gif searching and it can also bookmark users’ favorite gifs. It pulls data from Giphy API. This application is built with jquery3.4 and bootstrap4.1 and written in Javascript and HTML

<h2>Application Design </h2>
<h3>Data flow</h3>
<img width="510" alt="Screen Shot 2021-05-13 at 5 59 04 PM" src="https://user-images.githubusercontent.com/11471832/118110477-066c3600-b415-11eb-8e1e-4026d900452b.png">


<h3>operation</h3>
<img width="495" alt="Screen Shot 2021-05-13 at 5 09 31 PM" src="https://user-images.githubusercontent.com/11471832/118108377-81801d00-b412-11eb-9715-e0556122828f.png">
enter the APIkey from Giphy (Not required in the latest version)

<img width="1193" alt="Screen Shot 2021-05-13 at 5 10 04 PM" src="https://user-images.githubusercontent.com/11471832/118108411-8a70ee80-b412-11eb-8523-01823403e038.png">
search a topic

<img width="236" alt="Screen Shot 2021-05-13 at 5 10 19 PM" src="https://user-images.githubusercontent.com/11471832/118108435-92309300-b412-11eb-83c1-7bf2861540ef.png">
bookmark the gif by clicking the heart

<img width="1185" alt="Screen Shot 2021-05-13 at 5 10 42 PM" src="https://user-images.githubusercontent.com/11471832/118108451-99f03780-b412-11eb-82f7-6635c9afd86e.png">
bookmarked gif will be show in "my favorite GIF"

<h2>Approach </h2>

Since the backend data is mostly provided by Giphy API, it only requires a well coded frontend. jQuary is one of the easiest libraries to handle the job, unlike reactJS and angularJS that requires express & nodeJS as a running server. This app only has 3 files and does not require a server to run, therefore, it is easier to host and go live. However, there is a trade off. Since it doesn’t require a running server, there isn't a secure way to hide the API key. In order to protect the API key, clients have to enter their own API key(In the lastest version of the app, clients do not need to enter the API key since they are already encrypted by a third party library(SJCL) and embedded in the script which greatly lower the chance of the key getting stolen by github scraper). Another advantage of this app is that it doesn't require a database, as the data is being stored in the local storage, which is faster to pull and cheaper to host. Yet, the trade off will be that users cannot share the information if they are using two devices. It is because the data is only stored locally.

<h2>Business Outcome  </h2>

Gif is fun to watch, can also send to others to explain a feeling. People can use this app to kill time and bookmark some gifs to enjoy. This app can have an area to show ads which can make profit. Furthermore, advertising companies can pay to prioritize gifs that are related to their business in the result if several keywords are being searched. 

<h2>Go Live  </h2>

It is live on <https://conradsze.github.io/giphyviewer/> already. If possible, will make it more mobile friendly and also find a way to hide the API key.

<h2>Source Code  </h2>

https://github.com/conradsze/giphyviewer

