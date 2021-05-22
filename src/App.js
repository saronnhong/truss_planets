import React, { Component } from 'react';
import API from './services/planetAPI'
import './App.css';

class App extends Component {
  state = {
    isLoading: false,
    results: [],
    statusMessage: "No planets loaded."
  }

  getPlanets = () => {
    this.setState({ ...this.state, isLoading: true, statusMessage: "Loading in progress..." })
    API.getPlanetData()
      .then(res => {
        let temp = res.data.results;
        this.sortByName(temp);
        this.setState({ ...this.state, results: res.data.results, isLoading: false });
      })
      .catch(err => {
        this.setState({ ...this.state, statusMessage: err })
      })
  }

  sortByName = (items) => {
    items.sort(function (a, b) {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    return items
  }

  formatNumbers = num => {
    let arr = num.toString().split("").reverse();
    let i = 0;
    while (i < arr.length) {
        arr.splice(i, 0, " ");
        i += 4;
    }
    return arr.reverse().join("")
  }

  calculateSurfaceArea = (radius, percentage) => {
    let surfaceArea = radius * radius * 4 * 3.14 * percentage;
    return this.formatNumbers(Math.round(surfaceArea))
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="appTitle">Let's get some Planets!</h1>
          <div>
            <button type="button" className="btn btn-info homeBtn" onClick={() => this.getPlanets()} >Let's Start!</button>
          </div>
          {this.state.results.length > 0 ?
            <table className="table table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Climate</th>
                  <th scope="col">Residents</th>
                  <th scope="col">Terrains</th>
                  <th scope="col">Population</th>
                  <th scope="col">Surface Area (km2) Covered in Water</th>
                  <th scope="col">Radius</th>
                  <th scope="col">% Covered in Water</th>
                </tr>
              </thead>
              <tbody>
                {this.state.results.map(planet =>
                  <tr key={planet.name}>
                    <td><a href={planet.url} target="_blank" rel="noreferrer">{planet.name}</a></td>
                    <td>{planet.climate !== "unknown" ? planet.climate : "?"}</td>
                    <td>{planet.residents !== "unknown" ? planet.residents.length : "?"}</td>
                    <td>{planet.terrain !== "unknown" ? planet.terrain : "?"}</td>
                    <td>{planet.population !== "unknown" ? this.formatNumbers(planet.population) : "?"}</td>
                    <td>{planet.surface_water !== "unknown" && planet.diameter !== "unknown " ? this.calculateSurfaceArea(planet.diameter / 2, planet.surface_water / 100) : "?"}</td>
                    <td>{planet.diameter !== "unknown" ? this.formatNumbers(Math.round(planet.diameter / 2)) : "?"}</td>
                    <td>{planet.surface_water !== "unknown" ? Math.round(planet.surface_water) + "%" : "?"}</td>
                  </tr>
                )}
              </tbody>
            </table>
            : this.state.statusMessage
          }
        </div>
      </div>
    );
  }
}

export default App;
