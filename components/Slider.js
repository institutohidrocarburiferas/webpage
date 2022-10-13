import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { createStyles, Paper, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}))

function Card ({ image, title, url }) {
  const { classes } = useStyles()

  return (
    <Link href={url} >
      <a >
      <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
    </Paper>
      </a>
    </Link>

  )
}

export function Slider ({ data }) {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: 3000 }))
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      classNames={classes}
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 3 }]}
      slideGap="md"
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
      withIndicators
      speed={4}
    >
      {slides}
    </Carousel>
  )
}
