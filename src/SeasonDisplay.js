import React from "react";

let getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

let SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  let icon = season === 'winter' ? 'snowflake' : 'sun'
console.log(season)
  return <div>
    <i className={`${icon} icon`}></i>
    <h1>
      {season === 'winter' ? 'Burr, it is chilly' : 'Let`s hit the beach'}
    </h1>
       <i className={`${icon} icon`}></i>
    </div>
}

export default SeasonDisplay
