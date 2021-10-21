let count = 0;
const addOne = () => {
    count = count + 1;
    renderCounterApp();
};
const minusOne = () => {
    count = count - 1;
    renderCounterApp();
};
const reset = () => {
    count = 0;
    renderCounterApp();
};




// Challenge
// Make button '-1' - setup minusOne function and register - log 'minusOne'
// Make button 'reset' - setup reset function and register - log 'reset'




const appRoot = document.getElementById('app')

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp()