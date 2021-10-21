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

let visability = false;

const toggleVisability = () => {
  visability = !visability
  render();
}

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisability}>
        {visability ? "Hide details" : "Show details"}
      </button>
      {visability && (
        <div>
          <p>Hey. These are some details you can now see!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById('app'))
};
render();
