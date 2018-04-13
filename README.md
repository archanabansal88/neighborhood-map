# Udacity - Neighborhood-Map Project
> [Live Demo](https://archanabansal88.github.io/neighborhood-map/index.html)

## Project Overview:

Develop a single page application featuring a map of my neighborhood 

## App Functionality:

* A full-screen map displayed on the page using the Google Maps API
* Map displays all location markers by default when the page is loaded, and displays the filtered subset of location markers when a filter is applied
* Clicking a marker displays unique information about a location in infoWindow 
* Markers should animate when clicked (bouncing)
* A hamburger icon is provided, clicking on which displays a side bar with list of location names
* Clicking a location on the list displays unique information about the location, and animates its associated map marker (bouncing)
* Includes a text input field that filters the map markers and list items to locations matching the text input or selection
* A close icon is provided on side bar, clicking on which hide the side bar
* All application components render on-screen in a responsive manner
* Knockout Framework is used to handle the list, filter, tracking click events on list items
* Foursquare API is used to provide additional information about the location when a map marker or list view entry is clicked
* Webpack (build tool) is used to bundle the javascript files for development as well as production code
* The production code is minified and uglified using webpack plugins
* Babel loader is used to transpile es-6 to es-5

## How to run the application Locally

* clone/download the repository
* install node
* run command "npm i" to install dependencies and devDependencies
* run command "npm start" 
* type localhost:3000 in browser

## How to generate production build

* run command "npm run build"