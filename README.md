# ElderCards
A simple web application that accesses the Elder Cards API and presents the information in a virtual card form. <br>
## Given Information
API: https://api.elderscrollslegends.io/v1/cards <br>
Documentation:https://docs.elderscrollslegends.io <br>
The Endpoint IS v1/cards<br>

<br>

## Setup
In order to view this front End work all that is required is to download the gitHub folder and unzip. Then upon unzipping select the html file. <br>
<br>
This is not a deployed web page so this is the best way of viewing.<br>
<br>
If you would like to view code alongside the web page you may open up the project folder in VS Code and use the Live Server extension to view this. Simply install live server and then left click on the HTML file in the project and click “Open with Live Server”<br>
<br>
NodeJS is required as well as asynchronous functions were used when creating this project. <br>
If you do not have this already installed...<br>
 - Go to https://nodejs.org/en/
 - Download NodeJS and follow installation instructions for your OS

<br>

 ## Notes
 I changed the orientation/design of the card to what I believed was more visually appealing and added extra design elements. <br>
<br>
While I did intentionally try to design this so only 20 cards appeared at a time due to the nature of how the API was structured I was unsuccessful in this task. Usually when looking at the json data each card would be a separate data point. However, in this case all cards are one data point. I left in what I believed it would look like if the data was structured differently inside the code however. 
It is important to note that this also affects the infinite scroll. So while the functionality is built for it this does not appear as wanted.Due to time constraints I decided to leave this as is.

