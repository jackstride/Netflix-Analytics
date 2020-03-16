# netflixanalytics

## Introduction

There appears to be minimal statistics released by Netflix relating to their programming or viewship and most information released comes from their annual stakeholder report. This created an interest to determine how they have grown over the last five years and what factors may have influenced it's growth.
Datasets from Kaggle and Data.World appeared to be outdated but contained popular shows along with their IMDB rating, it was thought this could provide insight to see whther the content produced had increase their subscriptions or stock price. Further data was obtained from Wikipedia to find their subscription numbers and competition to see where they stand within todays market. All data combined would hopefully describe how they have grown over the last 5 years and if their choice of Netflix Original programs may have influnced that growth.

Using the data obtained, 6 indivual charts will be created. The type of metrics to be described are their subscription growth over the last 5 years. Their highest rated IMDB shows and if this has any correlation to their stock price or subscription growth. View and compare their competitors to see where they are placed within todays market,types of genres and if they score higher in IMDB ratings, the average show length for certain genres and lastly their stock price within the last 5 years where this can be used to compare an orignal show's release data and their subcription numbers.

In total six graphs have been created. The first graph details the subscription growth Netflix has gained within the last five years. To obtain this data from Wikipedia (Appendix One), different JavaScript libraries were used to scrape the page. ‘Request-promise’ was used to obtain the page in html, ‘cheerio’ to search for the data and ‘fs’ which is a node module was used to write that data into a CSV format which can be saved and later used. The same concept was used (Appendix Two) to obtain streaming competition for Netflix, further data cleansing was used to remove empty columns and convert strings to ints when needed.

Next, a donut chart was made to display Netflix original shows with a rating of 89 or higher. Netflix Original show data was obtained from Data.World. After reading the data, a filter was needed in the IMDB_Rating column for shows 89 or above(Appendix Three)

Both average rating and average length of a show based on genre used the same Data set from Data.World. A function was used to generate the average rating (Appendix Four) by passing the genre type.

The last graph shows the a stock chart which can be filtered based on the year (Appendix Five). To cleanse the data and return what year the user wanted to select, a data range was used from the start and finish of the selected year, one set, this would reset data and show what is requested.

1: WorldWide Users - https://en.wikipedia.org/wiki/Netflix
2: Competition - https://en.wikipedia.org/wiki/Streaming_services
3: Netflix Original Content and IMDB - https://data.world/mattschroyer/netflix-original-series/workspace/file?filename=Netflix_Original_Series_2013_2017.xlsx
4: Stock Price - https://www.kaggle.com/jainshukal/netflix-stock-price

## Design a Dashboard

## Personal Reflection

The dashboard produced uses D3.js and React(a JavaScript Framework) which gave alot more flexibility when it came to designing and implmenting different components which is why these technolgies were used instead of Tableau. The use of colour and placement can direct the user through the dashboard where they can understand different insights. There is also some functionality to view further information by using filers or hovering over an item. Weaknesses to this dashboard may be the lack of table types although this was difficult to incorperate given the limited timeframe to implement D3 to a high standard. The data also used wasn't as diverse enough due and lacked the ability to give a powerful insight however the data provided descirbes the growth of Netflix.

Other data sources such as how long the average viewer watches netflix a month, how many profiles are linked to a single account and the subscription tier customers pay could improve the dashboards analytics and further strenghten the argument given. Certain types of analytics such as customer watch time can also make the information appear more intersting but this is something Netflix would not release.

Main issues when creating this dashboard was learning D3.js and how this can be used within React. D3 is also SVG driven so this created a steap learning curve where SVG's have particular attribues and styling. Interactivity also proved difficult as D3 have their own way to create interactivity. If more time was given, exploration into the documentation, a stronger understanding of how methods and attribues work along with styling and placement would be used to increase the complexiity and present the data in a more efficient way.

## Conclusion

During planning, it was apparent that finding sources of data to support the growth of Netflix was going to be difficilt due to the lack and quality of datasets, other websites not citing their sources or the lack of information actually given by Netflix themselves (so secretive) however sources on Wikipedia proved to be useful. It is my opinion that a conclusion can be reached based on viewing the subscription and stock chart combined with shows thst suggest Netflix is either at their peak, or have passed it due to the steady rate of both subscribers and stock price compared to that of the last four years.

## Appendix

### Appendix One

#### Web scraping Wikipedia for Netflix Subscribers

![Web Scraping](https://i.imgur.com/baEItG9.png)

### Appendix Two

#### Web scraping Wikipedia for Streaming Services

![Imgur](https://i.imgur.com/BXak9Ts.png)

### Appendix Three

#### Filtering Data to find IMDB ratings above 89

![Imgur](https://i.imgur.com/Qt3bZlL.png)

### Appendix Four

#### Function to find the average length of a show based on genre

![Imgur](https://i.imgur.com/HATNbMd.png)

### Appendix Five

#### Fucntion to update Stock Chart based on year.

![Imgur](https://i.imgur.com/RptaKCE.png)
