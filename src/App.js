import React from "react"
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {

  state = {lat: null, errorMessage: ''}


 renderContent () {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>
        Error: {this.state.errorMessage}
      </div>
    }

    if (this.state.lat && !this.state.errorMessage) {
      return <div>
        <SeasonDisplay lat={this.state.lat}/>
      </div>
    }

    return <div>
      <Spinner message="Please accept location request"/>
    </div>
  }

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
  return <div className="border red">
    {this.renderContent()}
  </div>
  }
}

export default App;
