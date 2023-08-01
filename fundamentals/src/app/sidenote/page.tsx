// Importing styles from CSS into React.
import styles from './styles.module.css'

/*
  * We can log out the styles object to see that Next.js + CSS Modules are
  * automatically randomizing our styles so they don't conflict with other styles
  * in other components. This all works via Webpack during the build process.
  * CSS modules are just another webpack loader. Some CSS module implmentation
  * use the file path vs. random hashes.

  console.log(styles)
  {
    wrapper: 'styles_wrapper__sdZ2E',
    title: 'styles_title__h0CRD',
    __checksum: '2b2037284025'
  }

*/

export default function SideNotes() {
  return (
    <div className="px-4 py-8 bg-white flex flex-col gap-4">
      <SideNote title="Hello" type="error">
        <span>Inner content</span>
      </SideNote>
      <SideNote title="Hello" type="notice">
        <span>Inner content</span>
      </SideNote>
      <SideNote title="Hello" type="warning">
        <span>Inner content</span>
      </SideNote>
      <SideNote title="Hello" type="success">
        <span>Inner content</span>
      </SideNote>
    </div>
  )
}

function SideNote(props: {
  title: string
  type: 'notice' | 'warning' | 'error' | 'success'
  children: React.JSX.Element
}) {
  const { title, children, type } = props
  const svgColorClass = styles[`${type}-color`]
  return (
    <aside
      className={[
        styles.wrapper,
        styles[type],
        styles[`${type}-bg`],
        'relative',
      ].join(' ')}
    >
      <div
        className={`absolute -left-4 -top-4 ${svgColorClass} p-1 bg-white rounded-md`}
      >
        {icons[type]}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p>{children}</p>
    </aside>
  )
}

const icons: Record<string, React.JSX.Element> = {
  warning: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  ),
  notice: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="12" y1="16" x2="12" y2="12"></line>
      <line x1="12" y1="8" x2="12.01" y2="8"></line>
    </svg>
  ),
  success: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
  ),
  error: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  ),
}
