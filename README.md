# Display Data from an API for Human Consumption
Take home project from Truss that loads planetary data from the Starwars API and displays the results on a table. The requirements are 
1. Table displays Planet's name (which includes link to the API URL)
2. Planet's climate
3. Number of residents
4. Terrains
5. Population
6. Surface area overed in water
7. Radius (Diameter/2)
8. Percentage of the planet covered in water

Other requirements:
1. Round values to the nearest integer
2. Show loading message while waiting to retrieve data
3. Sort alphabetically by planet's name
4. Any "unknown" items is displayed as "?"
5. Numbers are written as "100 000 000" with spaces instead of commas
6. Grey border on cells
7. Display an error message if data fails to load

## Getting started
- ``get clone https://github.com/saronnhong/truss_planets.git`` clone the repo
- ``npm install`` install the dependencies
- ``npm start`` start up the application
- Press "Let's Start" button to perform a GET request from the Starwars API
- Note: in order to test other page results, edit the "WAPI_JSON_URL" in planetAPI.js. Instructions were unclear on if this needed to be handled differently.