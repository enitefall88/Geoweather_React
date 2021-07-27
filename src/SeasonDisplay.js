import React from "react";

let seasonConfig = {
  summer: {
    text: "Let`s hit the beach",
    iconName: 'sun'
  },
  winter: {
    text: "Burr, it is chilly",
    iconName: 'snowflake'
  }
}


let getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat > 0 ? 'winter' : 'summer'
  }
}

let SeasonDisplay = (props) => {
  let season = getSeason(props.lat, new Date().getMonth())
  let { text, iconName} = seasonConfig[season]
console.log(season)
  return <div>
    <i className={`${iconName} icon`}></i>
    <h1>
      {text}
    </h1>
       <i className={`${iconName} icon`}></i>
    </div>
}

export default SeasonDisplay
