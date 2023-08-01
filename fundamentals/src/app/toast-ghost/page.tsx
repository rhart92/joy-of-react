/* ================================================================================

  Scroll to the bottom of the page and you'll see a Ghost pop out!

  TODO: Learn more about IntersectionObserver 🤔

================================================================================ */

'use client'
import React, { useEffect, useRef, useState } from 'react'

export default function ToastGhost() {
  return (
    <div className="flex flex-col gap-6 p-4 font-[monospace]">
      <h1 className="font-semibold text-3xl">Walrus</h1>
      <h2 className="font-semibold text-xl">Overview</h2>
      <p>
        The walrus (Odobenus rosmarus) is a large pinniped marine mammal with
        discontinuous distribution about the North Pole in the Arctic Ocean and
        subarctic seas of the Northern Hemisphere. It is the only extant species
        in the family Odobenidae and genus Odobenus. This species is subdivided
        into two subspecies:[2] the Atlantic walrus (O. r. rosmarus), which
        lives in the Atlantic Ocean, and the Pacific walrus (O. r. divergens),
        which lives in the Pacific Ocean.
      </p>

      <p>
        Adult walrus are characterised by prominent tusks and whiskers, and
        considerable bulk: adult males in the Pacific can weigh more than 2,000
        kilograms (4,400 pounds)[3] and, among pinnipeds, are exceeded in size
        only by the two species of elephant seals.[4] Walrus live mostly in
        shallow waters above the continental shelves, spending significant
        amounts of their lives on the sea ice looking for benthic bivalve
        molluscs. Walruses are relatively long-lived, social animals, and are
        considered to be a "keystone species" in the Arctic marine regions.
      </p>

      <p>
        The walrus has played a prominent role in the cultures of many
        indigenous Arctic peoples, who have hunted it for meat, fat, skin,
        tusks, and bone. During the 19th century and the early 20th century,
        walrus were widely hunted for their blubber, walrus ivory, and meat. The
        population of walruses dropped rapidly all around the Arctic region. It
        has rebounded somewhat since, though the populations of Atlantic and
        Laptev walruses remain fragmented and at low levels compared with the
        time before human interference.
      </p>

      <h2 className="font-semibold text-xl">Etymology</h2>

      <p>
        The origin of the word walrus derives from a Germanic language, and it
        has been attributed largely to either the Dutch language or Old Norse.
        Its first part is thought to derive from a word such as Old Norse hvalr
        ('whale') and the second part has been hypothesized to come from the Old
        Norse word hross ('horse').[5] For example, the Old Norse word
        hrosshvalr means 'horse-whale' and is thought to have been passed in an
        inverted form to both Dutch and the dialects of northern Germany as
        walros and Walross.[6] An alternative theory is that it comes from the
        Dutch words wal 'shore' and reus 'giant'.[7]
      </p>

      <p>
        The species name rosmarus is Scandinavian. The Norwegian manuscript
        Konungs skuggsjá, thought to date from around AD 1240, refers to the
        walrus as rosmhvalr in Iceland and rostungr in Greenland (walruses were
        by now extinct in Iceland and Norway, while the word evolved in
        Greenland). Several place names in Iceland, Greenland and Norway may
        originate from walrus sites: Hvalfjord, Hvallatrar and Hvalsnes to name
        some, all being typical walrus breeding grounds.
      </p>

      <p>
        The archaic English word for walrus—morse—is widely thought to have come
        from the Slavic languages,[8] which in turn borrowed it from Finno-Ugric
        languages, and ultimately (according to Ante Aikio) from an unknown
        Pre-Finno-Ugric substrate language of Northern Europe.[9] Compare морж
        (morž) in Russian, mursu in Finnish, morša in Northern Saami, and morse
        in French. Olaus Magnus, who depicted the walrus in the Carta Marina in
        1539, first referred to the walrus as the ros marus, probably a
        Latinization of morž, and this was adopted by Linnaeus in his binomial
        nomenclature.[10]
      </p>

      <p>
        The coincidental similarity between morse and the Latin word morsus ('a
        bite') supposedly contributed to the walrus's reputation as a "terrible
        monster".[10]
      </p>

      <p>
        The compound Odobenus comes from odous (Greek for 'teeth') and baino
        (Greek for 'walk'), based on observations of walruses using their tusks
        to pull themselves out of the water. The term divergens in Latin means
        'turning apart', referring to their tusks.[11]
      </p>

      <p>
        The Inuttitut term for the creature is aivik, similar to the Inuktitut
        word: aiviq ᐊᐃᕕᖅ.[12]
      </p>

      <h2 className="font-semibold text-xl">Taxonomy and evolution</h2>

      <p>
        The walrus is a mammal in the order Carnivora. It is the sole surviving
        member of the family Odobenidae, one of three lineages in the suborder
        Pinnipedia along with true seals (Phocidae) and eared seals (Otariidae).
        While there has been some debate as to whether all three lineages are
        monophyletic, i.e. descended from a single ancestor, or diphyletic,
        recent genetic evidence suggests all three descended from a caniform
        ancestor most closely related to modern bears.[13] Recent multigene
        analysis indicates the odobenids and otariids diverged from the phocids
        about 20–26 million years ago, while the odobenids and the otariids
        separated 15–20 million years ago.[14][15] Odobenidae was once a highly
        diverse and widespread family, including at least twenty species in the
        subfamilies Imagotariinae, Dusignathinae and Odobeninae.[16] The key
        distinguishing feature was the development of a squirt/suction feeding
        mechanism; tusks are a later feature specific to Odobeninae, of which
        the modern walrus is the last remaining (relict) species.
      </p>

      <p>
        Two subspecies of walrus are widely recognized: the Atlantic walrus, O.
        r. rosmarus (Linnaeus, 1758) and the Pacific walrus, O. r. divergens
        (Illiger, 1815). Fixed genetic differences between the Atlantic and
        Pacific subspecies indicate very restricted gene flow, but relatively
        recent separation, estimated at 500,000 and 785,000 years ago.[17] These
        dates coincide with the hypothesis derived from fossils that the walrus
        evolved from a tropical or subtropical ancestor that became isolated in
        the Atlantic Ocean and gradually adapted to colder conditions in the
        Arctic.[17]
      </p>

      <Toast />

      <a
        href="https://en.wikipedia.org/wiki/Walrus"
        className="mt-4 color-blue-400 underline"
      >
        Read more on Wikipedia.
      </a>
    </div>
  )
}

function Toast() {
  const [isShown, setIsShown] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries

      setIsShown(entry.isIntersecting)
    })

    const wrapperElement = wrapperRef.current
    if (wrapperElement) {
      observer.observe(wrapperElement)
    }

    return () => {
      if (wrapperElement) {
        // Used to selectively stop observing
        /* observer.unobserve(wrapperElement) */
        observer.disconnect()
      }
    }
    // TIL: refs don't need to be in the dependency list because they always point
    // to the same object (i.e `{ current: ??? }`) and it's the contents that
    // change vs. having multiple copies of the object so they can't be stale.
    // Similar for `setIsShown`, it's always the same function.
  }, [])

  const translateX = isShown ? '0%' : '100%'

  // TIL: Wrapper node is for tracking purposes. It's used by IntersectionObserver to
  // track whether the node intersects with the viewport. The inner DIV which
  // contains the ghost is by default positioned absolutely so that it's just
  // off screen to the right. It's setup with a transition property so that when
  // we apply a transform it will animate. [Default] When `isShown` is `false`
  // (meaning the wrapper element is in not in the viewport), the transform
  // `translateX(100%)` will be applied pushing the ghost off screen to the
  // right. When `isShown` is set to true (after the wrapper element is in the
  // viewport), the transform becomes `translateX(0%)` which makes it animate
  // back into the page. It's important to have a stationary element to use with
  // `IntersectionObserver` and a separate element to animate. Since the wrapper
  // DIV has no children (since the child is absolutely positioned), it will
  // have a height of 0. The reason `translateX(100%)` doesn't push the element
  // completely off the screen is the parent <div> in the main component has
  // passing and the ghost is positioned absolutely to it's parent which doesn't
  // reach the edge of the screen due to that padding.
  return (
    <div ref={wrapperRef} className="relative">
      <div
        className="text-9xl absolute -right-[20px] bottom-0 transition ease-in-out duration-500 pointer-events-none"
        style={{ transform: `translateX(${translateX}` }}
      >
        👻
      </div>
    </div>
  )
}
