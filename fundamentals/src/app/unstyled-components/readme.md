# Unstyled component libraries

Simply put, these libraries are focused purely on the mechanics and usability. 
Often, accessibility is a first-class concern. They have no built-in design system, 
and the few styles that are included can easily be overridden.

## Reach UI (https://reach.tech/)

It was created by Ryan Florence, and it has a heavy focus on accessibility. 
As he was building this library, he spent an hour or two every day using a 
screen reader, learning how the software works in order to build robust, 
usable components.

> Unfortunately, it hasn't been actively maintained recently. It has become 
> incompatible with React 18*, and the sole remaining maintainer has been suggesting 
> that folks use a different option 😢


## Radix Primitives (https://www.radix-ui.com/)

Radix Primitives is a library of unstyled, accessible components. It's an 
incredibly rich library, with a ton of components I've never seen anywhere else.

## Headless UI (https://headlessui.com/)

It's maintained by the team at Tailwind Labs, and is primarily intended to be used 
with Tailwind (though this absolutely isn't a hard requirement!).

## Ariakit (https://ariakit.org/)

Of all the libraries in this list, I know the least about Ariakit. It offers 23
components, and from what I can tell, they seem to offer a really nice API! 
Interestingly, they offer custom hooks that let you access the internal state of 
their components.

## React Aria https://react-spectrum.adobe.com/react-aria/

React Aria is a library of React custom hooks that can be used to build a component 
library. It's created and maintained by Adobe.

Adobe also has a separate library, React Spectrum. React Spectrum is a styled 
component library, using Adobe's design system. Interestingly, React Spectrum is 
built using React Aria.

The idea is that we could build our own component library, using our own design 
system, by leveraging the suite of custom hooks provided by React Aria.


