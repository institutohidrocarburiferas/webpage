import styles from '@styles/components/Sidebar.module.css'

interface Item {
  label: string
  image: string
  url: string
}

interface Props {
  items: Item[]
}

export const Sidebar: React.FC<Props> = ({items}) => {
  const sections = items.map(({label, image, url}) => (
    <a key={label} className={styles.item} href={url}>
      <picture>
        {image}
      </picture>
      <p>{label}</p>
    </a>
  ))

  return <div className={`${styles.container} bg-gradient-to-br from-amber-400 to-orange-200 dark:text-black`}>
    <div>
      {sections}
    </div>
  </div>
}
