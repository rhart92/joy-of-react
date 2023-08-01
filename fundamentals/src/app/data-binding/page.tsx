'use client'
import { useState } from 'react'

export default function Forms() {
  const [search, setSearch] = useState('')

  function runSearch(searchTerm: string) {
    alert(`Searching for ${searchTerm}...`)
  }

  return (
    <div>
      <div className="text-black bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Not using forms:</h2>
        <div className="p-2 border border-black mb-4">
          <label htmlFor="input">Search: </label>
          <input
            id="input"
            type="text"
            /* Without `onChange` and `value` we have an "uncontrolled element" which */
            /* just means that React creates the element but after that React doesn't */
            /* read the value or respond to changes */
            onChange={(e) => setSearch(e.target.value)}
            /* In react, value serves as a lock on the value unlike in HTML where it */
            /* sets the initial value only. So in order to change the input with
             * typing, we need to add the `onChange` hander to respond to the
             * event where the input is changed. */
            /* React events aren't truly DOM events but they are SyntheticEvents
             * created by React and it mirrors the native event + even contains
             * the Native Event properties in the `nativeEvent`. */
            /* TODO: Read more at https://react.dev/reference/react-dom/components/common#react-event-object */
            /* React doesn't strictly lock the value to value, it let's the change event */
            /* fire (which updates the value with the key you pressed) but then after */
            /* react makes sure that the value passed in `value` matches the DOM. */
            /* This all occurs between paint cycles, but you can log the value / use the
             * value as we are in our `onChange` handler */
            /* You'll get an error if you set `value` to `undefined` and then change to */
            /* a value again. This is because when we set `value={undefined}` it's the */
            /* same as not setting it at all. So when the value becomes defined, react sees */
            /* this as a change from uncontrolled input -> controlled and it doesn't like that. */
            value={search}
            /* The reason we usually want both `onChange` and `value` is because this sets */
            /* up **2-way data binding** so updating the input changes the state and  */
            /* updating the state (say by a button somewhere else on the page) updates the */
            /* input. */
            className="border border-gray-800 rounded px-4 py-2 mr-4"
            onKeyDown={(e) => {
              console.log(e)
              if (e.key === 'Enter') {
                alert('Handling enter key manually...')
                runSearch(search)
              }
            }}
          />
          <button
            className="px-4 py-2 bg-green-500 text-white rounded drop-shadow-lg"
            onClick={() => runSearch(search)}
            // But what if we want to handle `enter`?? We can add an
            // `onKeyDown` handler on our input but now we are venturing into
            // territory that the browser already knows how to do with Forms.
          >
            Search
          </button>
        </div>
        <span>Searching for: {search}</span>
      </div>
      <div className="text-black bg-white p-4">
        <h2 className="text-xl font-semibold mb-4">Using forms:</h2>
        {/* HTML forms already know how to handle enter key + submit buttons. The only */}
        {/* thing we have to do is make sure they don't reload the page. */}
        {/* If you wanted to make a request to a server, like when fetching search results,  */}
        {/* you couldn't request only the data. You needed to request a whole new HTML file.  */}
        {/* Essentially, the user would be redirected to a new URL, and the server would  */}
        {/* then render a template into an HTML document, using the data sent with the request. */}
        {/* Form elements accept a `method` and `action` attribute that allows you to specify */}
        {/* how the browser should call your server to get the next page. By default,
          if you omit the `action`, then the browser will use the current URL which essentially
          reloads the page. When the browser makes the request to `action` it will have
          the `Content-Type` set as `application/x-www-form-urlencode` vs. `application/json` for 
          standard network requests. This allows (if we want) for us to support users who
          don't have JS enabled, by in those cases returning a full HTML page vs. JSON blob. */}
        {/* If you're using something like Next.js, you can redirect to a search results  */}
        {/* page, adding the search term in a query parameter. */}
        <form
          onSubmit={(e) => {
            // Prevent form submit from causing reload
            e.preventDefault()
            runSearch(search)
          }}
          className="p-2 border border-black mb-4"
        >
          <label htmlFor="input">Search: </label>
          {/* By using forms, we are also able to use client side validations for free! */}
          <input
            id="input"
            type="text"
            required={true}
            minLength={7}
            /* Without `onChange` and `value` we have an "uncontrolled element" which */
            /* just means that React creates the element but after that React doesn't */
            /* read the value or respond to changes */
            onChange={(e) => setSearch(e.target.value)}
            /* In react, value serves as a lock on the value unlike in HTML where it */
            /* sets the initial value only. So in order to change the input with
             * typing, we need to add the `onChange` hander to respond to the
             * event where the input is changed. */
            /* React events aren't truly DOM events but they are SyntheticEvents
             * created by React and it mirrors the native event + even contains
             * the Native Event properties in the `nativeEvent`. */
            /* TODO: Read more at https://react.dev/reference/react-dom/components/common#react-event-object */
            /* React doesn't strictly lock the value to value, it let's the change event */
            /* fire (which updates the value with the key you pressed) but then after */
            /* react makes sure that the value passed in `value` matches the DOM. */
            /* This all occurs between paint cycles, but you can log the value / use the
             * value as we are in our `onChange` handler */
            /* You'll get an error if you set `value` to `undefined` and then change to */
            /* a value again. This is because when we set `value={undefined}` it's the */
            /* same as not setting it at all. So when the value becomes defined, react sees */
            /* this as a change from uncontrolled input -> controlled and it doesn't like that. */
            value={search}
            /* The reason we usually want both `onChange` and `value` is because this sets */
            /* up **2-way data binding** so updating the input changes the state and  */
            /* updating the state (say by a button somewhere else on the page) updates the */
            /* input. */
            className="border border-gray-800 rounded px-4 py-2 mr-4"
          />
          <button className="px-4 py-2 bg-green-500 text-white rounded drop-shadow-lg">
            Search
          </button>
        </form>
        <span>Searching for: {search}</span>
      </div>
    </div>
  )
}
