import React from 'react'
import { ImageGalleryItem } from './page'

function ImageGallery({ images }: { images: Array<ImageGalleryItem> }) {
  return (
    <div className="flex flex-col gap-4 items-center justify-center bg-pink-200">
      {images.map((image) => (
        <Image key={image.originalSource} data={image} />
      ))}
    </div>
  )
}

function Image({ data }: { data: ImageGalleryItem }) {
  return (
    <figure className='p-4 bg-white rounded-xl text-black max-w-sm drop-shadow-lg'>
      <a href={data.originalSource} target="_blank" rel="noopener noreferrer">
        <img
          src={data.src}
          alt={data.alt}
          style={{ aspectRatio: data.aspectRatio }}
        />
      </a>
      <figcaption className='text-center mt-4'>
        Photograph by <strong>{data.photographer}</strong>.
      </figcaption>
    </figure>
  )
}

export default ImageGallery
