'use client'
import React, { useState } from 'react'

export default function Forms() {
  const [textArea, setTextArea] = useState('')
  const [select, setSelect] = useState('red')
  const [radio, setRadio] = useState('no')

  return (
    <>
      {/* TODO: Read more about select vs. radio -- https://blog.prototypr.io/7-rules-of-using-radio-buttons-vs-drop-down-menus-fddf50d312d1 */}
      <form
        className="flex flex-col items-center bg-slate-200 p-8 text-black"
        onSubmit={(e) => {
          e.preventDefault()
          alert('Submitted!')
        }}
      >
        {/* React has tweaked a lot of the HTML form elements to behave similarly which is */}
        {/* a big upgrade from standard HTML. */}
        <textarea
          className="p-2"
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
        ></textarea>
        <span className="text-gray-500 block mb-8">Text Area: {textArea}</span>

        <fieldset className="border border-black min-w-full px-4 py-2">
          <legend className="ml-4 px-2">What's your favorite color?</legend>
          <select
            value={select}
            onChange={(e) => setSelect(e.target.value)}
            className="block"
          >
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
          </select>
          <span className="text-gray-500">Select: {select}</span>
        </fieldset>

        {/* Default radio buttons are borked in Next.js */}
        {/* https://github.com/vercel/next.js/issues/49499 */}
        <fieldset className="border border-black min-w-full px-4 py-2">
          <legend className="ml-4 px-2">Are you planning to vote?</legend>
          {/* `name` tells the browser these radio buttons are all part of the same set */}
          {/* `id` is used to associate with the label */}
          {/* `value` defines the value of this particular radio button which is copied to  */}
          {/* react state when it's checked */}
          {/* `checked` allows us to tell react when the input should be checked */}
          <input
            className="mr-2"
            type="radio"
            name="vote"
            id="vote-no"
            value="no"
            checked={radio === 'no'}
            onChange={(e) => {
              console.log('changing no')
              setRadio(e.target.value)
            }}
          />
          <label htmlFor="vote-no" className="mr-4">
            No
          </label>
          <input
            className="mr-2"
            type="radio"
            name="vote"
            id="vote-maybe"
            value="maybe"
            checked={radio === 'maybe'}
            onChange={(e) => {
              console.log('changing maybe')
              setRadio(e.target.value)
            }}
          />
          <label htmlFor="vote-maybe" className="mr-4">
            Maybe
          </label>
          <input
            className="mr-2"
            type="radio"
            name="vote"
            id="vote-yes"
            value="yes"
            checked={radio === 'yes'}
            onChange={(e) => {
              console.log('changing yes')
              setRadio(e.target.value)
            }}
          />
          <label htmlFor="vote-yes" className="mr-4">
            Yes
          </label>
          <span className="text-gray-500 block">Radio: {radio}</span>
        </fieldset>
      </form>
    </>
  )
}
