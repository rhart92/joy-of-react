'use client'
import React, { useState } from 'react'
import * as Accordion from '@radix-ui/react-accordion'

import styles from './FrequentlyAskedQuestions.module.css'
import { FaqItem } from './page'
import { ChevronDown, ChevronUp } from 'react-feather'

function FrequentlyAskedQuestions({ data }: { data: Array<FaqItem> }) {
  const [openItem, setOpenItem] = useState<string | undefined>()

  return (
    <div className="flex items-center justify-center p-8">
      <div className="max-w-sm">
        <Accordion.Root
          value={openItem}
          onValueChange={(e) => {
            setOpenItem(e)
          }}
          type="single"
          className="text-white"
          defaultValue={data[0].id}
          collapsible={true}
        >
          {data.map((item) => (
            <Accordion.Item
              key={item.id}
              value={item.id}
              className={styles.item}
            >
              <Accordion.Header>
                <Accordion.Trigger className={styles.trigger}>
                  <span>{item.question}</span>
                  {/* We could dynamically control the icon... */}
                  {/* {openItem === item.id ? <ChevronUp /> : <ChevronDown />} */}
                  {/* Or we can rotate the icon to get some animation using CSS
                    transitions ✨ */}
                  <ChevronDown className="jk" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className={styles.content}>
                {item.answer}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </div>
  )
}

export default FrequentlyAskedQuestions
