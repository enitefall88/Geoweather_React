import React, {useState} from "react"
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {

  state = {lat: null, errorMessage: ''}


  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        (
            position) => this.setState({lat: position.coords.latitude}),
        (
            err) => this.setState({errorMessage: err.message})
        //console.log(err)

    )

  }

  render() {
    return <div>
      <SeasonDisplay
          status={this.state.lat || this.state.errorMessage}
      />
    </div>
  }
}

export default App;
