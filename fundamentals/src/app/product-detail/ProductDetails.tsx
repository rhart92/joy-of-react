'use client'
import React, { useState } from 'react'
import { Product } from './page'
import { Star } from 'react-feather'
import _ from 'lodash'
import styles from './style.module.css'

const MAX_RATING = 5

/**
 * ImageCarousel.
 *
 * Component that shows a large preview of the selected images and a list of
 * other photos below that are selectable.
 */
function ImageReelWithPreview(props: { photos: string[] }) {
  const { photos } = props
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0])

  return (
    <article className="flex flex-col">
      <img
        src={selectedPhoto}
        alt="Product Photo"
        className="max-w-full mb-4 rounded-lg"
      />
      <div className="flex gap-4">
        {photos.map((photo) => (
          <button
            key={photo}
            onClick={() => setSelectedPhoto(photo)}
            className="relative"
          >
            <img
              src={photo}
              alt="Product Photo"
              className="aspect-square flex-1 max-w-full rounded"
            />
            <span
              className={`absolute w-full h-full border-2 border-blue-500 rounded top-0 left-0 opacity-0 transition-opacity duration-200`}
              style={{ opacity: photo === selectedPhoto ? 1 : 0 }}
            ></span>
          </button>
        ))}
      </div>
    </article>
  )
}

/**
 * Renders "out of 5" rating.
 * TODO: Allow configuring max number of stars?
 */
function StarRating(props: { rating: number }) {
  const { rating } = props
  return (
    <>
      {_.range(MAX_RATING).map((i) => (
        <Star
          color="currentColor"
          className={[styles.star, i < rating ? styles.filled : ''].join(' ')}
          key={i}
        />
      ))}
    </>
  )
}

export default function ProductDetails(props: { product: Product }) {
  const { product } = props
  return (
    <div>
      <div className="flex p-4">
        <div className="basis-1/2">
          <ImageReelWithPreview photos={product.photos} />
        </div>
        <div className="px-4 basis-1/2">
          <h1 className="font-semibold text-3xl leading-snug mb-4">
            {product.title}
          </h1>
          <div className="flex gap-1 text-white mb-4">
            <StarRating rating={product.rating} />
          </div>
          {/* TODO: How does whitespace CSS work?? Magically this makes it so */}
          {/* the paragraphs in raw text break correctly in HTML 😮 */}
          <p className="whitespace-pre-wrap">{product.description}</p>
        </div>
      </div>
    </div>
  )
}

/* ================================================================================

  ProductDetails. All in one.

  (To practice splitting up into components.)

================================================================================ */

export function ProductDetailsAllInOne(props: { product: Product }) {
  const { product } = props
  const [selectedPhoto, setSelectedPhoto] = useState(product.photos[0])
  return (
    <div>
      <div className="flex p-4">
        <div className="flex flex-col">
          <img
            src={selectedPhoto}
            alt="Product Photo"
            className="max-w-full mb-4 rounded-lg"
          />
          <div className="flex gap-4">
            {product.photos.map((photo) => (
              <button
                key={photo}
                onClick={() => setSelectedPhoto(photo)}
                className="relative"
              >
                <img
                  src={photo}
                  alt="Product Photo"
                  className="aspect-square flex-1 max-w-full rounded"
                />
                <span
                  className={`absolute w-full h-full border-2 border-blue-500 rounded top-0 left-0 opacity-0 transition-opacity duration-200`}
                  style={{ opacity: photo === selectedPhoto ? 1 : 0 }}
                ></span>
              </button>
            ))}
          </div>
        </div>
        <div className="px-4">
          <h1 className="font-semibold text-3xl leading-snug mb-4">
            {product.title}
          </h1>
          <div className="flex gap-1 text-white mb-4">
            {_.range(MAX_RATING).map((i) => (
              <Star
                color="currentColor"
                className={[
                  styles.star,
                  i < product.rating ? styles.filled : '',
                ].join(' ')}
                key={i}
              />
            ))}
          </div>
          {/* TODO: How does whitespace CSS work?? Magically this makes it so */}
          {/* the paragraphs in raw text break correctly in HTML 😮 */}
          <p className="whitespace-pre-wrap">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
