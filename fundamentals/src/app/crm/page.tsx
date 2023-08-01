"use client"
import React from "react"

export default function CRM() {
  const data = [
    {
      id: "ryan",
      name: "Ryan Hart",
      email: "rhart92@gmail.com",
      job: "Software Developer",
    },
    {
      id: "kate",
      name: "Kate Murray",
      email: "kate@gmail.com",
      job: "Clinical Trial Manager",
    },
    {
      id: "lisa",
      name: "Lisa Hart",
      email: "lisa@gmail.com",
      job: "Product Manager",
    },
  ]
  return (
    <div className="p-24">
      {data.slice(1).map((contact) => (
        <ContactCard
          key={contact.id}
          name={contact.name}
          email={contact.email}
          job={contact.job}
        />
      ))}
    </div>
  )
}

type ContactCardProps = {
  name: string
  job: string
  email: string
}

const ContactCard = (props: ContactCardProps) => {
  const { name, job, email } = props
  return (
    <li className="bg-white text-black mb-4 list-none text-center p-2 rounded-lg">
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      {/* Stands for Description List and is intended for displaying key / value */}
      {/* pairs, usually used for details section. */}
      <dl>
        <CardItem label="Job" value={job} />
        <CardItem label="Email" value={email} />
      </dl>
    </li>
  )
}

function CardItem({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="font-semibold text-amber-500">{label}</dt>
      <dd className="mb-2">{value}</dd>
    </>
  )
}
