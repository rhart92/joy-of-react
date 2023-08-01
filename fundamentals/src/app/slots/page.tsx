import React, { ReactNode } from 'react'

function App() {
  return (
    <>
      <BasicCaptionedImage
        alt="A meerkat looking curiously at the camera"
        src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
        caption="Photo by Manuel Capellari, shot in August 2019 and published on Unsplash."
      />
      <SlotCaptionedImage
        image={
          /* Now we can pass a `picture` element which handles displaying the correct */
          /* image for the current screensize / browser support */
          <picture>
            <source
              type="image/avif"
              srcSet={`
                https://sandpack-bundler.vercel.app/img/meerkat.avif 1x,
                https://sandpack-bundler.vercel.app/img/meerkat@2x.avif 2x
              `}
            />
            <source
              type="image/jpeg"
              srcSet={`
                https://sandpack-bundler.vercel.app/img/meerkat.jpg 1x,
                https://sandpack-bundler.vercel.app/img/meerkat@2x.jpg 2x
              `}
            />
            <img
              alt="A meerkat looking curiously at the camera"
              src="https://sandpack-bundler.vercel.app/img/meerkat.jpg"
            />
          </picture>
        }
        caption={
          <>
            {/* cspell:disable-next-line */}
            Photo by <a href="">Manuel Capellari</a>, shot in August 2019 and
            published on <strong>Unsplash</strong>.
          </>
        }
      />
    </>
  )
}

function BasicCaptionedImage({
  alt,
  src,
  caption,
}: {
  alt: string
  src: string
  caption: string
}) {
  return (
    <figure>
      <img alt={alt} src={src} />
      <div className="divider" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

// TIL: Instead of just passing strings, we can pass whole JSX elements similar to
// children but now we are passing multiple.
// TIL: Remember, `children` is _mostly_ not a special prop other than you can
// pass it between the HTML tags vs. as an attribute on the tag.
function SlotCaptionedImage({
  // By accepting a slot (ReactNode) as a prop, we can allow the user to provide
  // whatever markup they want and we'll just render it in the correct place.
  image,
  caption,
}: {
  image: ReactNode
  caption: ReactNode
}) {
  return (
    <figure>
      {image}
      <div className="divider" />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export default App
