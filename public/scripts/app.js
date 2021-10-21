'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: "It's ok",
    subtitle: 'This is some info',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? "Here are your options" : "No options"
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Eugene',
    age: 34,
    location: 'NewYork'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Ananymous'}</h1>
//         {user.age >= 18 && <p>Age: {user.age}</p>}
//         {getLocation(user.location)}
//     </div>
// );
var count = 0;
var addOne = function addOne() {
    count = count + 1;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count = count - 1;
    renderCounterApp();
};
var reset = function reset() {
    count = 0;
    renderCounterApp();
};

// Challenge
// Make button '-1' - setup minusOne function and register - log 'minusOne'
// Make button 'reset' - setup reset function and register - log 'reset'

var appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot)


var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count:',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};
renderCounterApp();
