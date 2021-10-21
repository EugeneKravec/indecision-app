console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: "It's ok",
    subtitle: 'This is some info',
    options: ['One', 'Two']
}


const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const user = {
    name: 'Eugene',
    age: 34,
    location: 'NewYork'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Ananymous'}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
let count = 0;
const addOne = () => {
    console.log('addOne');
};
const minusOne = () => {
    console.log('minusOne');
};
const reset = () => {
    console.log('Reset');
};

const templateTwo = (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
)
console.log(templateTwo);

// Challenge
// Make button '-1' - setup minusOne function and register - log 'minusOne'
// Make button 'reset' - setup reset function and register - log 'reset'

const appRoot = document.getElementById('app')

// ReactDOM.render(template, appRoot)
ReactDOM.render(templateTwo, appRoot)