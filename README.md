# Welcome to this React-Flask-Mongo Quickstart Repo!

Hi! This repository was largely created to make it easier for myself to get a quick demo project up and running and I think it could be useful for others! I've tried to provide explanations and comments on certain aspects of this and also provided some useful links to help troubleshoot any additional issues you may have. Enjoy!

# Getting Started

1. Firstly, you must have the following installed:
- [Python 3](https://www.python.org/downloads/)
- [node.js](https://nodejs.org/en/download/)
- [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

2. When these are installed and you have cloned this repo, cd into the frontend folder and run the command `npm install`. This should install all the required packages for the frontend.  Then from now on to run the frontend, in this directory run `npm start`.

3. Now the frontend is running, we need to get the backend working.
	In a separate terminal, cd into the api folder. We need to create a
	virtual environment here to cleanly install any dependencies for this specific api. This is done by running the command `py -m venv venv`. You can then activate this venv by running `venv\Scripts\activate` on Windows. From here, you can install any dependencies by running `pip install -r requirements.txt`. That's it. Now anytime you want to run the API simply cd into here and run `flask run`.

4. You should download MongoDB [here](https://www.mongodb.com/try/download/enterprise). Ensure you also install the GUI Mongo Compass to make it easier to work with. Follow the installation wizard to ensure this is downloaded correctly. You needn't worry about creating your database or tables as these are created when directly through PyMongo in the API when you first POST something.

# Files

This repository contains 2 separate folders. One contains all code related to the React frontend and the other to the backend Flask API.

## React Frontend

This react frontend is largely produced by the ever popular [create-react-app](https://create-react-app.dev/docs/getting-started) developed by Facebook. It provides a boilerplate framework to build your Reactjs frontend. The amount of files this creates can be quite overwhelming, however we mainly just need to focus on `App.js` and `User.js`

`User.js` provides some custom code that demonstrates how to make calls to the backend (using axios) and then manipulating this data to be displayed or posted using useState and useEffect hooks, along with some conditional rendering and error handling.

The React [website](https://reactjs.org/docs/hello-world.html) provides really good tutorials to get yourself familiar with how it works.


## Flask Backend

This flask backend contains some simple CRUD endpoints to demonstrate how they are used.

This backend also connects to the database using `extensions.py` and `db.py`. **Note:** Ensure the MONGO_URI host number is the same as yours (should be visible in Compass.)

The Flask website contains some useful [demos](https://flask.palletsprojects.com/en/2.0.x/tutorial/index.html) for how a project is created.

W3 Schools then provides some basic [examples](https://www.w3schools.com/python/python_mongodb_getstarted.asp) of how key functionality is carried out.

# Useful Links 

- YouTube Video stepping through creating and linking the frontend and API [here](https://www.youtube.com/watch?v=Q2eafQYgglM)
- YouTube Video giving some info on both installing MongoDB and using PyMongo to make database calls [here](https://www.youtube.com/watch?v=-56x56UppqQ)