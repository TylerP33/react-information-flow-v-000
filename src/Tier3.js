import React from 'react'
import { getReducedColor, getRandomColor } from './randomColorGenerator.js'


const Tier3 = (props) => (
  // this component does not need to change (but feel free to change however you like!)
  <div className="tier3" onClick={props.handleGrand} style={{backgroundColor: getReducedColor(props.color), color: props.color}}></div>
)

export default Tier3
