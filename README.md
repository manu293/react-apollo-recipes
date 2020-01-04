# Welcome to NewRecipes!

**React Recipes** is a fully-featured react graphql project that is deployed on heroku. You can check out the project by heading over to https://gentle-hollows-45761.herokuapp.com/ 

>Head over to the login section which has been pre-populated with the default userName and password for ease of testing.

# Overview of the Recipes App

## Header Component 

It displays the logo, a search component and conditionally renders 
>The signin and singup tabs when the user is not logged in.
> The AddRecipe, Profile and Logout sections when the user is not logged in. 


## Home Page [ Route ( / ) ]

The home page displays the list of available recipes that are stored in the **mongodb database** by performing a **getAllRecipes** query.

>You can click on the title to view the individual recipes as well.

## Profile Page [ Route ( /profile ) ]

The profile has the following sections :

1. Profile : which shows all the relevant user details
2. Favorites: which shows the list of recipes the user has liked
3. Your Recipes: which shows the list of recipes which have been added by the user

>The profile page is available to the user only when he is logged in and is redirected to the home page is tried accessing it from the url via authRoutes.

## Add Recipe Page [ Route ( /recipe/add ) ]

Allows only authenticated users to add recipes and is visible to only authenticated users.

## Search Recipe Component [ Route ( /search ) ]

Is displayed after the **searchRecipes query** is executed.

The query is executed once the user enters a search term in the search-bar or clicks on the category in the home page.

## Recipes/_id Page [ Route ( /recipes/_id ) ]

Is displayed when you click on the title of the recipe you want to view.

Displays the title , description , instructions and gives the user to live and add the recipes to their favorite section.

# Running the project on local-machine

Step 1: **Clone or Download the Repository**

Step 2: **npm install** all the necessary dependency.

Step 3:  In the root folder of the directory add a **variables.env** file and add the following lines to it:
	*MONGO_URI = mongo_uri _from_mongodb_atlas *
	*SECRET = your_secret_key *

Step 4: To run the project just type **npm run dev** in the command line 

By default your **react application will be served on localhost:3000** and your **express-apollo server on localhost:4444**. 

You can use graphiql by heading over to **localhost:4444/graphiql**

**Happy Coding**
