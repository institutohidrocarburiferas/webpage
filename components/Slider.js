import {useRef} from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {Carousel} from '@mantine/carousel'
import {createStyles, Paper, Title} from '@mantine/core'
import Link from 'next/link'
import cn from 'classnames'

const useStyles = createStyles((theme, _params, getRef) => ({
  card: {
    height: 240,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundColor: 'transparent',
    // Media query with value from theme
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      height: 140,
    },
  },

  title: {
    fontWeight: 400,
    lineHeight: 1,
    fontSize: 20,
    marginTop: theme.spacing.xs,
    textAlign: 'justify',
    padding: '0 25px',
    [`@media (max-width: ${theme.breakpoints.xs}px)`]: {
      fontSize: 16,
    },
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },

  indicators: {
    button: {
      backgroundColor: 'white',
    },
  },

  controls: {
    ref: getRef('controls'),
    transition: 'opacity 150ms ease',
    opacity: 0,

    button: {
      fontSize: 25,
      backgroundColor: 'white',
    },
  },

  root: {
    '&:hover': {
      [`& .${getRef('controls')}`]: {
        opacity: 1,
      },
    },
  },
}))

function Card ({id, title, image, date, urlPath}) {
  const {classes} = useStyles()

  if (typeof urlPath === 'undefined') {
    return (
      <>
        <Paper
          className={cn(classes.card, 'h-40 md:h-80')}
          p="xl"
          radius="md"
          sx={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}
        />
        <Title className={classes.title} order={3}>
          {title}
        </Title>
      </>
    )
  }

  return (
    <Link href={`${urlPath}/${id}`}>
      <a>
        <Paper
          className={classes.card}
          p="xl"
          radius="md"
          sx={{backgroundImage: `url(${image})`}}
        />
        <Title className={classes.title} order={3}>
          {title}
        </Title>
      </a>
    </Link>
  )
}

export function Slider ({data, urlPath, indicators = false, slice}) {
  const {classes} = useStyles()
  const autoplay = useRef(Autoplay({delay: 3000}))

  const slides = data.slice(0, slice).map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} urlPath={urlPath} />
    </Carousel.Slide>
  ))

  return (
    <Carousel
      loop
      align="start"
      breakpoints={[{maxWidth: 'sm', slideSize: '100%', slideGap: 30}]}
      classNames={classes}
      plugins={[autoplay.current]}
      slideGap="xl"
      slideSize="50%"
      speed={4}
      withIndicators={indicators}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}>
      {slides}
    </Carousel>
  )
}
