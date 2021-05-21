import React, { Component } from 'react';
import './App.css';

import axios from 'axios';
const SWAPI_JSON_URL = 'https://swapi.dev/api/planets/';

class App extends Component {
  state = {
    results: []
  }

  getPlanets = () => {
    axios.get(SWAPI_JSON_URL)
      .then(res => {
        console.log(res.data.results);
        this.setState({ results: res.data.results });
      })
  }

  calculateSurfaceArea = (radius, percentage) => {
    let surfaceArea = radius * radius * 4 * 3.14 * percentage;
    if(surfaceArea % 1 >= 0.5){
      surfaceArea = Math.ceil(surfaceArea);
    }else{
      surfaceArea = Math.floor(surfaceArea);
    }
    return surfaceArea
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <h1 className="appTitle">Let's get some Planets!</h1>
          </div>
          <div className="row">
            <div className="col-md-2" style={{ marginBottom: 20 }}>
              <button type="button" className="btn btn-info" onClick={() => this.getPlanets()} >Get Planets</button>
            </div>
          </div>

          {this.state.results.length > 0 ?
            <table className="table table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Climate</th>
                  <th scope="col">Residents</th>
                  <th scope="col">Population</th>
                  <th scope="col">Surface Area Covered In Water</th>
                  <th scope="col">Radius</th>
                  <th scope="col">Percent Covered in Water</th>
                </tr>
              </thead>
              <tbody>
                {this.state.results.map(planet =>
                  <tr>
                    <th scope="row">{planet.name}</th>
                    <td>{planet.climate !== "unknown" ? planet.climate : "?"}</td>
                    <td>{planet.residents !== "unknown" ? planet.residents.length : "?"}</td>
                    <td>{planet.population !== "unknown" ? planet.population : "?"}</td>
                    <td>{planet.surface_water !== "unknown" && planet.diameter !== "unknown " ? this.calculateSurfaceArea(planet.diameter/2, planet.surface_water/100) : "?"}</td>
                    <td>{planet.diameter !== "unknown" ? planet.diameter/2 : "?"}</td>
                    <td>{planet.surface_water !== "unknown" ? planet.surface_water + "%" : "?"}</td>
                  </tr>
                )}
              </tbody>
            </table>
            : null
          }
        </div>
      </div>
    );
  }
}

export default App;
