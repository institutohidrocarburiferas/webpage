import Link from 'next/link'
import Date from '@components/Date'
import { createStyles, Paper, Title } from '@mantine/core'
import { useEffect, useRef, useState } from 'react'

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.fn.smallerThan('xs')]: {
      height: 'auto',
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
    textShadow: '2px 2px 2px black',
    [theme.fn.smallerThan('xs')]: {
      fontSize: 24,
    },
  },
}))

function Card ({ title, image, date, url }) {
  const { classes } = useStyles()

  return (
    <Link href={url} >
      <a className='animate-fadeSlowIn'>
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{ backgroundImage: `linear-gradient(270deg, rgba(130, 201, 30, 0) 0%, #062343 100%), url(${image})` }}
          className={classes.card}
        >
          <div>
            <Title order={3} className={classes.title}>
            <div className='text-blue-300'>
              {title}

            </div>
              <div className='text-amber-200'>
                <Date dateString={date} />
              </div>
            </Title>
          </div>
        </Paper>
      </a>
    </Link>

  )
}

export function NoticesList ({ items, title, urlPath }) {
  const [posts, setPosts] = useState([items[0]])
  const observerRef = useRef(null)
  const postsRendered = posts.map(({ id, date, title, image }) => (
    <Card
      key={title}
      title={title}
      image={image}
      date={date}
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
    <h2 className='px-4  mb-4 text-3xl font-bold'>
      {title}
    </h2>
    <div className='flex flex-col gap-4'>
      {postsRendered}
    </div>
    <div ref={observerRef} className="mb-24" ></div>
  </section>
}
