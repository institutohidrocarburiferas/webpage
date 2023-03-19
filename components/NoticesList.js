import Link from 'next/link'
import {createStyles, Paper, Title} from '@mantine/core'
import {useEffect, useRef, useState} from 'react'

import Date from '@components/UI/Date'

const useStyles = createStyles((theme) => ({
  card: {
    height: 340,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.fn.smallerThan('xs')]: {
      height: 'auto',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 400,
    textAlign: 'justify',
    color: theme.white,
    lineHeight: 1,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    textShadow: '2px 2px 0 black',
    [theme.fn.smallerThan('xs')]: {
      fontSize: 20,
    },
  },
}))

function Card ({title, image, date, url}) {
  const {classes} = useStyles()

  return (
    <Link className='animate-fadeSlowIn' href={url}>
        <Paper
          className={classes.card}
          p="xl"
          radius="md"
          shadow="md"
          sx={{backgroundImage: `linear-gradient(270deg, rgba(130, 201, 30, 0) 0%, #062343 100%), url(${image})`}}
        >
          <div>
            <Title className={classes.title} order={3}>
            <div className='text-blue-300'>
              {title}

            </div>
            </Title>
              <div className='text-amber-200'>
                <Date dateString={date} />
              </div>
          </div>
        </Paper>
    </Link>

  )
}

export function NoticesList ({items, title, urlPath}) {
  const [posts, setPosts] = useState([items[0]])
  const observerRef = useRef(null)
  const postsRendered = posts.map(({id, date, title, image}) => (
    <Card
      key={title}
      date={date}
      image={image}
      title={title}
      url={`${urlPath}/${id}`}
    />
  ))

  useEffect(function () {
    const onChange = (entries, observer) => {
      const el = entries[0]

      if (el.isIntersecting && posts.length < items.length) {
        setPosts(posts.concat(items[posts.length]))
        observer.disconnect()
      }
    }

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '-75px',
    })

    observer.observe(observerRef.current)

    return () => observer.disconnect()
  })

  return <section className='flex flex-col w-full max-w-5xl pb-10 '>
    <h2 className='px-4 mb-4 text-3xl'>
      {title}
    </h2>
    <div className='flex flex-col gap-4'>
      {postsRendered}
    </div>
    <div ref={observerRef} className="mb-24" />
  </section>
}
