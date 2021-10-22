console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
    title: "It's ok",
    subtitle: 'This is some info',
    options: []
}



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
const appRoot = document.getElementById('app')

const onFormSubmit = (event) => {
    event.preventDefault();
    const option = event.target.elements.option.value;
    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderApp()
    }
}
const onRemoveAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const numbers = [55, 101, 1000]

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {
                //     numbers.map((number, i) => {
                //         return <p key={i}>{number}</p>
                //     })
            }
            <ol>
                {
                    app.options.map((option, i) => {
                        return <li key={i}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option' />
                <button>Add Option</button>

            </form>
        </div >
    );
    ReactDOM.render(template, appRoot);
};
renderApp();

