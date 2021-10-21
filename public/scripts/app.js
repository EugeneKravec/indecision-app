"use strict";

// ============================================
// My version

// const appRoot = document.getElementById('app')
// let visible = true;
// const addText = () => {
//   visible = !visible;
//   renderToggle();
// }
// const renderToggle = () => {
//   const toggle = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={addText} >{
//         visible ? 'Click Me' : 'Click Me Again'
//       }
//       </button>
//       <p>{!visible ? "Here your are" : false}</p>
//     </div>
//   );
//   ReactDOM.render(toggle, appRoot);
// };
// renderToggle()


// ============================================
// Anrew's version

var visability = false;

var toggleVisability = function toggleVisability() {
  visability = !visability;
  render();
};

var render = function render() {
  var jsx = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Visibility Toggle"
    ),
    React.createElement(
      "button",
      { onClick: toggleVisability },
      visability ? "Hide details" : "Show details"
    ),
    visability && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Hey. These are some details you can now see!"
      )
    )
  );
  ReactDOM.render(jsx, document.getElementById('app'));
};
render();
