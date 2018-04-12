# Udacity - Neighborhood-Map Project

## Project Overview:

Develop a single page application featuring a map of my neighborhood 

## App Functionality:

* A full-screen map displayed on the page using the Google Maps API
* Map displays all location markers by default when the page is loaded, and displays the filtered subset of location markers when a filter is applied.
* Clicking a marker displays unique information about a location in infoWindow 
* Markers should animate when clicked (e.g. bouncing, color change.)
* A hamburger icon is provided, clicking on which displays a side bar with list of location names
* Clicking a location on the list displays unique information about the location, and animates its associated map marker (e.g. bouncing, color change.)
* Includes a text input field that filters the map markers and list items to locations matching the text input or selection.
* A close icon is provided on side bar, clicking on which hide the side bar
* All application components render on-screen in a responsive manner.
* Knockout Framework is used to handle the list, filter, tracking click events on list items
* Foursquare API is used to provide additional information about the location when a map marker or list view entry is clicked
* Webpack (build tool) is used to bundle the javascript files

## How to run the application Locally

* clone/download the repository
* install node
* run command "npm i" to install dependencies and devDependencies
* run command "npm start" 
* type localhost:3000 in browser