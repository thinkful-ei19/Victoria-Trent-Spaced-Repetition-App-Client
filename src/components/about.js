import React from 'react';
import './about.css'

export default class About extends React.Component {
  render() {
    return (
    <div className="description">
      <div className="about">About Elements</div>
      <div className="descriptionText">
      <img className="aboutImage" src={require('../images/element.jpeg')} alt="element"/>
      <p>The Periodic Table provides the names, atomic numbers, symbols and atomic</p>
      <p>weights of known elements. It serves as a great tool for solving chemistry problems.</p>
      <p>This app serves as spaced-repetition</p>
      <p>memorization platform for a Periodic Table. The app displays an element</p>
      <p>showing the symbol and asks users to recall the name.</p>
      <p>Referencing the concept of the Forgetting Curve, the algorithm dynamically</p>
      <p>repeats any elements answered wrongfully to help users strengthen memory.</p>
      <p>Using linked-list data structure and immersing it with MongoDB, the algorithm</p>
      <p>updates the memory value ( "M" ) to each corresponding question as they are answered.</p>
      <p>How frequent a user sees the question repeated depends on this memory value: </p>
      <p>If answered correctly, "M" value doubles; otherwise, "M" value is reset to 1; </p>
      <p>finally, move this question "M" spaces back.</p>

      <p>Frontend wise, this app is designed with Styled Components and is mobile-responsive. </p>
      </div>
    </div>
    )
  }
}
