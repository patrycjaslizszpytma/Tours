## React Project Tours APP

An application created with the useState, and useeffect Hook. 

To run the application please:
1. download the file 
2. run in terminal npm install to install all the dependences
3. hit npm start. 
The application will run on the localhost:3000.

The app uses api from https://course-api.com/react-tours-project, from which are collected all data used in the project. 
Api and all basic functionallities are located in App.js in which is also located <Tours /> component. 

In Tours.js is coded main component of the site with the title and another div element provided for every <Tour /> component. I used map method to get every id and to add remove button to every tour component.

In Tour.js id, info, image, name, price, removeTour are passed as a prop based on which are created all the visual elements of each <Tour /> component. On click is made the read more section that is a substring of 2000 ch or it can be shown all. Also the delete button is created which functionallyty is set in App.js.

With the use of conditional redering is made loading effect with the use of <Loading /> component from Loading.js



![image](https://user-images.githubusercontent.com/62251596/215348193-eabdf93a-9496-463f-b3a7-a0072922f002.png)
