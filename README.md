# Display Data from an API for Human Consumption
Take home project from Truss that loads planetary data from the Starwars API and displays the results on a table. The requirements are 
- Table displays Planet's name (which includes link to the API URL)
- Planet's climate
- Number of residents
- Terrains
- Population
- Surface area overed in water
- Radius (Diameter/2)
- Percentage of the planet covered in water

Other requirements:
- Round values to the nearest integer
- Show loading message while waiting to retrieve data
- Sort alphabetically by planet's name
- Any "unknown" items is displayed as "?"
- Numbers are written as "100 000 000" with spaces instead of commas
- Grey border on cells
- Display an error message if data fails to load

## Getting started
1. ``get clone https://github.com/saronnhong/truss_planets.git`` Clone the repo
2. ``npm install`` Install the dependencies
3. ``npm start`` Start up the application
4. Press "Let's Start" button to perform a GET request from the Starwars API
5. Note: in order to test other page results, edit the "WAPI_JSON_URL" in planetAPI.js. Instructions were unclear on if this needed to be handled differently.