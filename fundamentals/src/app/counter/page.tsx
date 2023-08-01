'use client'
import React, { useState } from 'react'

export default function Counter() {
  // Note: We can pass functions as the argument to `setState` and react will
  // conditionally call vs. running the code on each re-render.
  /* const [count, setCount] = useState<number>(() => 0) */
  // When passing a function call (e.g. reading from localStorage, etc) we are
  // going to call that function on each re-render. See the following commented
  // out example which will log `hi` on each button click.
  /* const [count, setCount] = useState<number>((() => { */
  /*   console.log('hi') */
  /*   return 0 */
  /* })()) */
  /* Whereas passing a function, React will handle only calling the function on
   * the initial render*/
  const [count, setCount] = useState<number>(() => {
    console.log('only logged when component is initialized')
    return 0
  })

  return (
    <div className="p-4">
      <button
        className="bg-gray-500 px-4 py-2 rounded"
        onClick={() => {
          /* setCount((count) => count + 1) */
          // Setting state is an **asynchronous** operations so this will
          // **not** log what you expect. Instead you'll get the previous value
          // of the state 😬
          //
          // When we call setCount, we tell React that we'd like to request a change 
          // to a state variable. React doesn't immediately drop everything; it 
          // waits until the current operation is completed (processing the click), 
          // and then it updates the value and triggers a re-render.
          //
          // "Request a change" is the most important bit of that.
          // This is similar to calling VIM lua functions using `schedule_wrap`
          // which tells VIM to call it when next convinient.
          // 
          // If you **really** need the next state, just save it as a variable
          // first.
          const nextCount = count + 1
          setCount(nextCount)
          console.log(nextCount)
        }}
      >
        Value: {count}
      </button>
    </div>
  )

  // In more plain JS.
  /* const button = React.createElement( */
  /*   'button', */
  /*   { */
  /*     onClick: () => setCount((count) => count + 1), */
  /*   }, */
  /*   'Value: ', */
  /*   count */
  /* ) */
  /**/
  /* console.log(button) */
  /**
    The resulting data structure will look like:
    {
      type: "button",
      props: {
        children: ["Value: ", 0],
        onClick: () => setCount((count) => count + 1),
      }
    }
    This object "describes" a button with the value of "Value: 0" and an onclick
    handler which React turns into a real DOM element. When the button is clicked
    which will update the state. When the state is updated, we'll re-call the 
    Component function which will return a new React element:
    {
      type: "button",
      props: {
        children: ["Value: ", 1],
        onClick: () => setCount((count) => count + 1),
      }
    }
    which now has the value of 1.
    Now react will essentially play "Spot the difference" in the UI.
    This process is known as reconciliation. Using fancy optimized algorithms, 
    React figures out what's changed. It sees that the button's text content has 
    changed from "Value: 0" to "Value: 1".

    Now that React knows what changed, it can surgically update using something like:

    `button.innerText = "Value: 1";`

    to update the text.

    So the flow is:
    **Mount**: No previous "snapshot", so React will create all the necessary DOM nodes 
    from scratch and inject them into the DOM.
      👇
    Trigger: (updating state)
      👇
    Render: (update internal data structures (see above))
      👇
    Commit: (Surgically update the DOM, then wait for next trigger.)

    The term “render” generally refers to this sort of thing: we're taking some sort 
    of unprocessed raw input, and generating the final ready-to-use output. Sort of
    like rendering a 3D model.

    In React, rendering has a slightly different meaning. If the before and current 
    snapshots after building the internal model are identical, then no DOM mutation 
    occurs. Imagine updating the state but not using or displaying that state in the
    return value of the component. React still has to go through the process of 
    reconciliation to figure out if anything changed, but it does not *always* have
    to perform DOM updates.

    If and when React does update the DOM as part of a state change, the browser
    will have to "re-paint". A "re-paint" is when the pixels on the screen are
    re-drawn because the DOM was manipulated. This is done no matter HOW the DOM was
    manipulated (JS, jQuery, React, etc).

    So to reiterate, not all re-renders require a re-paint.

    TODO: Read more at https://react.dev/learn/render-and-commit
  */
  /* return button */

  // Which renders
}
