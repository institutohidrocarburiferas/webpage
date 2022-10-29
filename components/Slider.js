import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { Carousel } from '@mantine/carousel'
import { createStyles, Paper, Title } from '@mantine/core'
import Link from 'next/link'

const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: 'solid 1px rgba(0,0,0,0.5)',
    margin: 20,
  },

  title: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: 20,
    marginTop: theme.spacing.xs,
    textAlign: 'justify',
    padding: '0 25px',
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  indicators: {
    button: {
      backgroundColor: 'white'
    }
  },

  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,

    button: {
      fontSize: 25,
      backgroundColor: 'white',
    }
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },

}))

function Card ({ id, title, image, date, urlPath }) {
  const { classes } = useStyles()

  return (
    <Link href={`${urlPath}/${id}`} >
      <a >
        <Paper
          shadow="md"
          p="xl"
          radius="md"
          sx={{ backgroundImage: `url(${image})` }}
          className={classes.card}
        >
        </Paper>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </a>
    </Link>

  )
}

export function Slider ({ data, urlPath, indicators = false }) {
  const { classes } = useStyles()
  const autoplay = useRef(Autoplay({ delay: 3000 }))
  const slides = data.slice(0, 4).map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} urlPath={urlPath} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      classNames={classes}
      slideSize="50%"
      breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 30 }]}
      slideGap='xl'
      align="start"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      loop
      withIndicators={indicators}
      speed={4}
    >
      {slides}
    </Carousel>
  )
}
