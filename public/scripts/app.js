'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
    title: "It's ok",
    subtitle: 'This is some info',
    options: []

    // const user = {
    //     name: 'Eugene',
    //     age: 34,
    //     location: 'NewYork'
    // }

    // function getLocation(location) {
    //     if (location) {
    //         return <p>Location: {location}</p>;
    //     }
    // }

    // const templateTwo = (
    //     <div>
    //         <h1>{user.name ? user.name : 'Ananymous'}</h1>
    //         {user.age >= 18 && <p>Age: {user.age}</p>}
    //         {getLocation(user.location)}
    //     </div>
    // );

    // ReactDOM.render(templateTwo, appRoot);
};var appRoot = document.getElementById('app');

var onFormSubmit = function onFormSubmit(event) {
    event.preventDefault();
    var option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp();
    }
};
var onRemoveAll = function onRemoveAll() {
    app.options = [];
    renderApp();
};

var numbers = [55, 101, 1000];

var renderApp = function renderApp() {
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
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAll },
            'Remove All'
        ),
        numbers.map(function (number, i) {
            return React.createElement(
                'p',
                { key: i },
                number
            );
        }),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option, i) {
                return React.createElement(
                    'li',
                    { key: i },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderApp();
