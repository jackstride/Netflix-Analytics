# netflixanalytics

## Introduction

There appears to be minimal statistics released by Netflix relating to their programming or viewship and most information released comes from their annual stakeholder report. This created an interest to determine how they have grown over the last five years and what factors may have influenced it's growth.
Datasets from Kaggle and Data.World appeared to be outdated but contained popular shows along with their IMDB rating, it was thought this could provide insight to see whther the content produced had increase their subscriptions or stock price. Further data was obtained from Wikipedia to find their subscription numbers and competition to see where they stand within todays market. All data combined would hopefully describe how they have grown over the last 5 years and if their choice of Netflix Original programs may have influnced that growth.

Using the data obtained, 6 indivual charts will be created. The type of metrics to be described are their subscription growth over the last 5 years. Their highest rated IMDB shows and if this has any correlation to their stock price or subscription growth. View and compare their competitors to see where they are placed within todays market,types of genres and if they score higher in IMDB ratings, the average show length for certain genres and lastly their stock price within the last 5 years where this can be used to compare an orignal show's release data and their subcription numbers.

1: WorldWide Users - https://en.wikipedia.org/wiki/Netflix
2: Competition - https://en.wikipedia.org/wiki/Streaming_services
3: Netflix Original Content and IMDB - https://data.world/mattschroyer/netflix-original-series/workspace/file?filename=Netflix_Original_Series_2013_2017.xlsx
4: Stock Price - https://www.kaggle.com/jainshukal/netflix-stock-price

## Design a Dashboard

## Personal Reflection

The dashboard produced uses D3.js and React(a JavaScript Framework) which gave alot more flexibility when it came to designing and implmenting different components which is why these technolgies were used instead of Tableau. The use of colour and placement can direct the user through the dashboard where they can understand different insights. There is also some functionality to view further information by using filers or hovering over an item. Weaknesses to this dashboard may be the lack of table types although this was difficult to incorperate given the limited timeframe to implement D3 to a high standard. The data also used wasn't as diverse enough due and lacked the ability to give a powerful insight however the data provided descirbes the growth of Netflix.

Other data sources such as how long the average viewer watches netflix a month, how many profiles are linked to a single account and the subscription tier customers pay could improve the dashboards analytics and further strenghten the argument given. Certain types of analytics such as customer watch time can also make the information appear more intersting but this is something Netflix would not release.

Main issues when creating this dashboard was learning D3.js and how this can be used within React. D3 is also SVG driven so this created a steap learning curve where SVG's have particular attribues and styling. Interactivity also proved difficult as D3 have their own way to create interactivity. If more time was given, exploration into the documentation, a stronger understanding of how methods and attribues work along with styling and placement would be used to increase the complexiity and present the data in a more efficient way.

## Conclustion

## Appendix

### Appendix One

#### Web scraping Wikipedia for Netflix Subscribers

![Web Scraping](https://i.imgur.com/baEItG9.png)

#### Web scraping Wikipedia for Streaming Services

![Imgur](https://i.imgur.com/BXak9Ts.png)

#### Filtering Data to find IMDB ratings above 89

![Imgur](https://i.imgur.com/Qt3bZlL.png)

#### Function to find the average length of a show based on genre

![Imgur](https://i.imgur.com/HATNbMd.png)

#### Fucntion to update Stock Chart based on year.

![Imgur](https://i.imgur.com/RptaKCE.png)
