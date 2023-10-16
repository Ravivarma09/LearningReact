 /* Creating element using React */

 const heading3 = React.createElement("h1",{id:"heading3"},"Statement from React")
 const root4 = ReactDOM.createRoot(document.getElementById("root"))
//  root4.render(heading3)


 /* 
  convert this html code to and call this html from react.

  <div class ="Parent">
      <div class ="child">
        <h1> some stufff </h1>
      </div>
  </div>
 
 
 */

const heading5 = React.createElement("div",{class:"Parent"},
 React.createElement("div",{class:"child"},
  React.createElement("h1",{},"some stuff")))

 const root6 = ReactDOM.createRoot(document.getElementById("root"))
 root6.render(heading5)
 