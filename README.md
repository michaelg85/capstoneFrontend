# **CAPSTONE PROJECT - WHOSE MOVIE?** [Front-End]

[Back-End] (https://github.com/michaelg85/capstoneBackend)

## **DESCRIPTION**

I decided to create this app to help my wife and I, along with countless couples, pick whose movie will be watched! Too much time is spent trying to decide. That ends here.

There is also the ability to keep a list of movies you would like to watch, up to ten each.

Currently the status of the build is working...

I am pulling from the third party OMDBapi (https://www.omdbapi.com/)

*This is a Front-End React app*

## **PROCESS:**

### **Create a Front-End React App**

Installed: 
   -axios
   -react-router-dom

-Wrapped `<App />` in `<BrowserRouter>` in the main.jsx file

-Created a GitHub repo and committed the project 

-Created a .env file 

-Added .env to a .gitignore file

-Set up a folder within the src folder for pages

-Created page files:
   -AboutUs.jsx
   -Help.jsx
   -Home.jsx
   -NotFound.jsx
   -OneVOne.jsx
   -Search.jsx

-Created a utilities folder within the src folder

-Created a controller.mjs file inside the utilities folder

-Created a components folder within the src folder

-Created components:
   -**Nav.jsx** with page navigation
   -**Form.jsx** with movie search bar
   -**MovieDisplay.jsx** with  basic search results
   -**RedList.jsx** with list display
   -**RedActions.jsx** with list functions
   -**BlueList.jsx** eith list display
   -**BlueActions.jsx** with list functions
   -**SearchMovieForm** with movie searchbar
   -**SearchMovieDisplay** with comprehensive search results
      OneVOne [folder]
      -**OneForm** searchbar for 1v1
      -**OneMovieDisplay** basic search results for 1v1
      -**RedForm** red searchbar
      -**RedMovieDisplay** red search result
      -**BlueForm** blue searchbar
      -**BlueMovieDisplay** blue search result
      -**RandomChoice** random choice function
      -**RandomChoiceDisplay** random choice result

-Updated my styles inline as well as in the app.css file frequently

      *before building my Front-End*
### **Create a Back-End Express server**

Installed: 
    -express
    -nodemon
    -dotenv
    -morgan
    -cors
    -mongoose

-Created a GitHub repo and committed the project 

-Created a .env file 

-Added .env to a .gitignore file

-Created a server.mjs file

-Created models folder

-Created movieSchema.mjs in models folder

-Updated server file

-Created db.mjs in config folder

-Created data.mjs in data folder

-Updated server file

-Tested

-Created movieController.mjs in controllers folder

-Created movieRoutes.mjs in routes folder

-Tested

-Updated server file

-Tested

-All routes functioning!

### **DEVELOPER CONTACT INFO**
Michael A Gawrych
magawrych85@gmail.com
GitHub - michaelg85