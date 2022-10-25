import { createStyles, Container, Title, Text } from '@mantine/core'

const useStyles = (image, height, justifyContent) => createStyles((theme) => ({
  root: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage:
      `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(${image})`,
    width: '100vw',
    height,
    maxHeight: 1000,
    display: 'grid',
    justifyContent,
    alignContent: 'center',
    padding: theme.spacing.xl * 3,
    [theme.fn.smallerThan('sm')]: {
      paddingLeft: 25,
    },
  },

  inner: {
    width: '100%',

  },

  image: {
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  content: {
    // paddingTop: theme.spacing.xl * 2,
    // paddingBottom: theme.spacing.xl * 2,
    // marginRight: theme.spacing.xl * 3,
    width: '100%',

    [theme.fn.smallerThan('md')]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: 48,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: 34,
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: 1000,
    textAlign: 'justify',
    fontSize: theme.fontSizes.xl * 1.15,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      fontSize: theme.fontSizes.lg,
    },

  },
}))

export function HeroSection ({
  title,
  text,
  image,
  height = '100vh',
  justifyContent = 'start',
  children,
}) {
  const { classes } = useStyles(image, height, justifyContent)()

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <Text
                className='animate-fade'
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: 'pink', to: 'yellow' }}
              >
                {title}
              </Text>
            </Title>
            <Text className={`${classes.description} animate-fade`} mt={30}>
              {text}
            </Text>
          </div>
        </div>
        <div className='w-full animate-fade'>

        {children}
        </div>
      </Container>
    </div>
  )
}
