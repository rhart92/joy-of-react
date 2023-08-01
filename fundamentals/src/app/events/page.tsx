'use client'
import React from 'react'
import { useEffect, useRef, useState } from 'react'

type UserEvent =
  | {
      type: 'keyup'
      key: string
    }
  | {
      type: 'keydown'
      key: string
    }
  | {
      type: 'mousemove'
      x: number
      y: number
    }
  | {
      type: 'mouseup'
    }
  | {
      type: 'mousedown'
    }
  | {
      type: 'click'
    }
  | {
      type: 'doubleclick'
    }

export default function Events() {
  const listRef = useRef<HTMLOListElement>(null)
  const [events, setEvents] = useState<UserEvent[]>([])

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView()
  })

  useEffect(() => {
    const keyboardHandler = (event: KeyboardEvent): void => {
      let eventToLog: UserEvent
      switch (event.type) {
        case 'keyup':
        case 'keydown':
          eventToLog = {
            type: event.type,
            key: event.key,
          }
          break
        default:
          console.log(event)
          return
      }
      setEvents((events) => [...events, eventToLog])
    }
    document.addEventListener('keydown', keyboardHandler)
    document.addEventListener('keyup', keyboardHandler)

    // TODO: Add a button or 2 and maybe an input
    const mouseHandler = (event: MouseEvent): void => {
      let eventToLog: UserEvent
      switch (event.type) {
        case 'mousemove':
          eventToLog = {
            type: 'mousemove',
            x: event.clientX,
            y: event.clientY,
          }
          break
        case 'mouseup':
          eventToLog = {
            type: 'mouseup',
          }
          break
        case 'mousedown':
          eventToLog = {
            type: 'mousedown',
          }
          break
        case 'click':
          eventToLog = {
            type: 'click',
          }
          break
        case 'dblclick':
          eventToLog = {
            type: 'doubleclick',
          }
          break
        default:
          console.log(event)
          return
      }
      setEvents((events) => [...events, eventToLog])
    }
    document.addEventListener('mousemove', mouseHandler)
    document.addEventListener('mousedown', mouseHandler)
    document.addEventListener('mouseup', mouseHandler)
    document.addEventListener('click', mouseHandler)
    document.addEventListener('dblclick', mouseHandler)

    return () => {
      document.removeEventListener('keydown', keyboardHandler)
      document.removeEventListener('keyup', keyboardHandler)
      document.removeEventListener('mousemove', mouseHandler)
      document.removeEventListener('mousedown', mouseHandler)
      document.removeEventListener('mouseup', mouseHandler)
      document.removeEventListener('click', mouseHandler)
      document.removeEventListener('dblclick', mouseHandler)
    }
  }, [])

  const renderEvent = (event: UserEvent) => {
    if (event.type === 'keydown') {
      return (
        <li>
          <span className="text-blue-200">keyboard</span> User pressed key{' '}
          {event.key}
        </li>
      )
    } else if (event.type === 'keyup') {
      return (
        <li>
          <span className="text-blue-200">keyboard</span> User released key{' '}
          {event.key}
        </li>
      )
    } else if (event.type === 'mousemove') {
      return (
        <li>
          <span className="text-red-200">mouse</span> User moved mouse to [
          {event.x}, {event.y}]
        </li>
      )
    } else if (event.type === 'mouseup') {
      return (
        <li>
          <span className="text-red-200">mouse</span> User released mouse button
        </li>
      )
    } else if (event.type === 'mousedown') {
      return (
        <li>
          <span className="text-red-200">mouse</span> User depressed mouse
          button
        </li>
      )
    } else if (event.type === 'click') {
      return (
        <li>
          <span className="text-red-200">mouse</span> User clicked mouse button
        </li>
      )
    } else if (event.type === 'doubleclick') {
      return (
        <li>
          <span className="text-red-200">mouse</span> User double clicked mouse
          button
        </li>
      )
    } else {
      return 'Unknown'
    }
  }

  return (
    <div className="px-16">
      <ol ref={listRef} className="list-decimal">
        {events.map((event) => renderEvent(event))}
      </ol>
    </div>
  )
}
