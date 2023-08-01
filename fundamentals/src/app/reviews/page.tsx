import styles from './styles.module.css'
import React from "react"

const movieData = [
  {
    id: 'shrunk-kids',
    title: 'Honey I Shrunk The Kids',
    posterSrc: 'https://sandpack-bundler.vercel.app/img/poster-shrunk-kids.jpg',
    synopsis:
      "When kids sneak into inventor Wayne Szalinski's (Rick Moranis) upstairs lab to retrieve an errant baseball, his experimental shrink ray miniaturizes them. When Szalinski returns home, he destroys the device -- which he thinks is a failure -- and dumps it in the trash, throwing out the kids along with it. The four children, now 1/4-inch tall, must survive the journey back to the house through a yard where sprinklers bring treacherous storms and garden-variety ants stampede like elephants.",
    rating: 5.4,
  },
  {
    id: 'avatar',
    title: 'Avatar',
    posterSrc: 'https://sandpack-bundler.vercel.app/img/poster-avatar.jpg',
    synopsis:
      "On the lush alien world of Pandora live the Na'vi, beings who appear primitive but are highly evolved. Because the planet's environment is poisonous, human/Na'vi hybrids, called Avatars, must link to human minds to allow for free movement on Pandora. Jake Sully (Sam Worthington), a paralyzed former Marine, becomes mobile again through one such Avatar and falls in love with a Na'vi woman (Zoe Saldana). As a bond with her grows, he is drawn into a battle for the survival of her world.",
    rating: 8.2,
  },
  {
    id: '17-again',
    title: '17 Again',
    posterSrc: 'https://sandpack-bundler.vercel.app/img/poster-17-again.jpg',
    synopsis:
      "Mike O'Donnell (Matthew Perry) was a high-school basketball star with a bright future, but he threw it all away to marry his girlfriend and raise their child. Almost 20 years later, Mike's marriage has failed, his kids think he's a loser, and his job is going nowhere. He gets a chance to correct the mistakes of his past and change his life when he is miraculously transformed into a teenager (Zac Efron), but in trying to fix his past, Mike may be jeopardizing his present and future.",
    rating: 6.7,
  },
  {
    id: 'toy-story',
    title: 'Toy Story',
    posterSrc: 'https://sandpack-bundler.vercel.app/img/poster-toy-story.jpg',
    synopsis:
      "Woody (Tom Hanks), a good-hearted cowboy doll who belongs to a young boy named Andy (John Morris), sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear (Tim Allen) action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips (Erik von Detten) and reunite with their boy.",
    rating: 9.2,
  },
  {
    id: 'office-space',
    title: 'Office Space',
    posterSrc:
      'https://sandpack-bundler.vercel.app/img/poster-office-space.jpg',
    synopsis:
      "Corporate drone Peter Gibbons (Ron Livingston) hates his soul-killing job at software company Initech. While undergoing hypnotherapy, Peter is left in a blissful state when his therapist dies in the middle of their session. He refuses to work overtime, plays games at his desk and unintentionally charms two consultants into putting him on the management fast-track. When Peter's friends learn they're about to be downsized, they hatch a revenge plot against the company inspired by “Superman III.”",
    rating: 9.3,
  },
  {
    id: 'groundhog-day',
    title: 'Groundhog Day',
    posterSrc:
      'https://sandpack-bundler.vercel.app/img/poster-groundhog-day.jpg',
    synopsis:
      "Phil (Bill Murray), a weatherman, is out to cover the annual emergence of the groundhog from its hole. He gets caught in a blizzard that he didn't predict and finds himself trapped in a time warp. He is doomed to relive the same day over and over again until he gets it right.",
    rating: 8.8,
  },
]

export default function Reviews() {
  return (
    <div className="bg-white flex flex-col items-center gap-8 p-16">
      {movieData.map((movie) => (
        <Review key={crypto.randomUUID()} {...movie} />
      ))}
    </div>
  )
}

function Review(props: {
  id: string
  title: string
  posterSrc: string
  synopsis: string
  rating: number
}) {
  const movie = props
  return (
    <article className={styles.movie}>
      <div className={styles.thumbnailWrapper}>
        <img alt="Movie poster" src={movie.posterSrc} />
      </div>
      <div className={styles.textWrapper}>
        <h2 className="font-semibold">{movie.title}</h2>
        <p className={styles.synopsis}>{movie.synopsis}</p>
        <p>
          <strong>Rating:</strong>{' '}
          {/* We could also use the clsx package to avoid this complex logic */}
          <span className={movie.rating >= 9 ? styles.glowingReview : undefined}>
            {movie.rating}
          </span>
        </p>
      </div>
    </article>
  )
}
