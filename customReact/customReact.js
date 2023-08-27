
function customRender(reactElement, mainContainer){
    
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);

    // mainContainer.appendChild(domElement);
    

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
       if (prop === 'children') continue;
       domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement);

    
}



const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit google'
}

// enchanced element
const anotherElement = (type, props, children)=>({
            type: type,
            props: props,
            children: children       
    
})

const mainContainer = document.getElementById('root');



// customRender(reactElement,mainContainer)



const myELement = anotherElement('h1', {style:"color:red"},"Hey this is awesome")

const secondElement = anotherElement('a', {href:"https://google.com", target: "_blank"}, 'Visit google')

customRender(myELement,mainContainer)


customRender(secondElement,mainContainer)



