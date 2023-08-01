import { CSSProperties } from 'react'

export default function StatusPage() {
  return (
    <div className="p-24 bg-amber-400">
      <UserTile name="Andrew" isOnline={true} />
      <UserTile name="Ryan" isOnline={true} />
      <UserTile name="Kate" isOnline={false} />
    </div>
  )
}

function OnlineIndicator(props: { style: CSSProperties }) {
  // In order for width and height to take affect without content, need to be
  // `display: inline-block`.
  return (
    <span
      className="rounded-full bg-green-500 w-3 h-3 inline-block mr-4 border-white border-2"
      style={{
        ...props.style,
        boxShadow:
          '0px 1px 2px hsl(0deg 0% 0% / 0.2), 0px 2px 4px hsl(0deg 0% 0% / 0.1), 0px 4px 8px hsl(0deg 0% 0% / 0.05), 0px 8px 16px hsl(0deg 0% 0% / 0.05)',
      }}
    ></span>
  )
}

function UserTile(props: { name: string; isOnline: boolean }) {
  return (
    <div className="bg-white text-black max-w-xs rounded-md mb-4 p-4 drop-shadow-lg flex items-center">
      {/* {props.isOnline && <OnlineIndicator />} */}
      {/* Alternative is to hide using CSS */}
      <OnlineIndicator style={{ display: props.isOnline ? 'block' : 'none' }} />
      {props.name}
      {props.isOnline && <VisuallyHidden>(online)</VisuallyHidden>}
    </div>
  )
}

// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
// https://www.joshwcomeau.com/snippets/react-components/visually-hidden/
//
// Adding “display: none” would hide the
// element from ALL users, including those
// using screen-readers.
const hiddenStyles: CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  height: 1,
  width: 1,
  margin: -1,
  padding: 0,
  border: 0,
}

const VisuallyHidden = (props: { children: React.ReactNode }) => {
  return <span>{props.children}</span>
}
