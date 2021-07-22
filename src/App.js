import React from "react"
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {lat: null}

    window.navigator.geolocation.getCurrentPosition(
        (position) => this.setState({lat: position.coords.latitude}),
        (err) => console.log(err))
  }

  render() {
    return <div>
      {this.state.lat}
      {console.log(this.state)}
    </div>
  }
}

export default App;
