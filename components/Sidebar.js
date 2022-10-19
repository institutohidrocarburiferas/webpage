import styles from '@styles/components/Sidebar.module.css'

export function Sidebar ({ items }) {
  const sections = items.map(({ label, image, url }) => (
    <a href={url} key={label} className={styles.item}>
      {image}
      <p>{label}</p>

    </a>

  ))

  return <div className={styles.container}>
    {sections}
  </div>
}
