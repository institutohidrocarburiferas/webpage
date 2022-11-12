import styles from '@styles/components/Sidebar.module.css'

export function Sidebar ({ items }) {
  const sections = items.map(({ label, image, url }) => (
    <a href={url} key={label} className={styles.item}>
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
