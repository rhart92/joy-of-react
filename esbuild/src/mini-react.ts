/* ================================================================================

  mini-react.ts

  Build by running `node mini-react-builder.js`.

================================================================================ */

type ReactElement = {
    type: string
    props: {
        href: string
    }
    children: string | ReactElement
}

function render(reactElement: ReactElement, containerDomElement: Element) {
    const element = document.createElement(reactElement.type)
    for (const [attribute, value] of Object.entries(reactElement.props)) {
        element.setAttribute(attribute, value)
    }
    if (typeof reactElement.children === 'string') {
        const text = document.createTextNode(reactElement.children)
        element.appendChild(text)
    } else {
        render(reactElement.children, element)
    }

    containerDomElement.appendChild(element)
}

// The term "Virtual DOM" generally was used to describe this idea of
// translating DOM elements into Javascript objects and then rendering these
// objects to the "real" DOM using a renderer as we have done here.
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.wikipedia.org',
    },
    children: {
        type: 'p',
        props: {
            href: 'https://www.wikipedia.org',
            style: 'background: lightgreen;',
        },
        children: 'hello',
    },
}

const containerDomElement = document.getElementById('root')
render(reactElement, containerDomElement)
