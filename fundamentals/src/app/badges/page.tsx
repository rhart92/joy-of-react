import _ from 'lodash'

type User = {
  id: string
  imageSrc: string
  imageAlt: string
  name: string
  joinDate: string
  badges: Array<{
    slug: string
    label: string
  }>
  rating: number
}

export default function Profiles() {
  const userProfiles: Array<User> = [
    {
      id: 'penelope-june-p1oer6',
      imageSrc: 'https://sandpack-bundler.vercel.app/img/sparkly-cat.png',
      imageAlt: 'A cat with illustrated groovy glasses and sparkles/rainbows',
      name: 'Penelope “bric-a-brac” June',
      joinDate: 'January 21st, 2022',
      badges: [
        {
          slug: 'ping-pong',
          label: '🏓  Athletic',
        },
        {
          slug: 'photographer',
          label: '📸 Photographer',
        },
        {
          slug: 'olympic-medalist',
          label: '🏅 Olympic Medalist',
        },
      ],
      rating: 3,
    },
    {
      id: 'baron-montgomerie-9si39d',
      imageSrc: 'https://sandpack-bundler.vercel.app/img/fancy-cat.png',
      imageAlt: 'A very distinguished gentleman cat, with top hat and monocle',
      name: 'Baron Montgomerie of Eglinton III',
      joinDate: 'August 3rd, 1924',
      badges: [],
      rating: 4,
    },
    {
      id: 'joan-clawmaker-5xch41',
      imageSrc: 'https://sandpack-bundler.vercel.app/img/punk-cat.png',
      imageAlt: 'A punk rock cat with earrings and a pink mohawk',
      name: 'Joan Clawmaker',
      joinDate: 'October 15th, 2019',
      badges: [
        {
          slug: 'notable',
          label: '⭐️ Notable',
        },
        {
          slug: 'musician',
          label: '🎸 Musician',
        },
      ],
      rating: 5,
    },
  ]

  return (
    <div className="p-4 width-full py-20 bg-violet-400 flex flex-col items-center">
      {userProfiles.map((profile) => (
        <ProfileCard key={profile.id} {...profile} />
      ))}
    </div>
  )
}

function ProfileCard(props: User) {
  const { rating, imageSrc, imageAlt, name, joinDate, badges } = props
  const hasManyBadges = badges.length >= 3
  return (
    <div className="rounded rounded-b-2xl rounded-t-[70px] bg-white text-black mb-12 relative flex flex-col items-center pb-4 w-80 drop-shadow-2xl">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="rounded w-48 rounded-t-3xl rounded-b-[60px] -translate-y-6 border-4 border-white"
      />
      <h2 className="font-semibold text-2xl mb-2 text-center">{name}</h2>
      <p>Joined {joinDate}</p>
      {badges.length > 0 ? (
        <div
          className={`flex flex-wrap gap-x-2 gap-y-2 justify-center mt-4 mx-2 p-2 border-2 ${
            hasManyBadges && 'border-amber-600'
          } border-dotted rounded-lg`}
        >
          {badges.map((badge) => (
            <Badge key={badge.slug} label={badge.label} />
          ))}
        </div>
      ) : null}
      {/* In JS, we don't really have a `range` function, so we can use this or import it from Lodash */}
      <div className="mt-4">
        {/* {Array.from({ length: rating }).map((_) => '⭐')} */}
        {_.range(rating).map((_) => (
          <span>'⭐'</span>
        ))}
      </div>
    </div>
  )
}

function Badge(props: { label: string }) {
  return <div className="bg-amber-100 px-2 py-1 rounded">{props.label}</div>
}
