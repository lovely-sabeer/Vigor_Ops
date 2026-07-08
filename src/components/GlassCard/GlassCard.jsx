import React from 'react'
import styles from './GlassCard.module.css'
function GlassCard({children, sectionHead}) {
	return (
		<section className={styles.Rb__card}>
			{sectionHead && <h3>{sectionHead}</h3>}
			{children}
		</section>
	)
}

export default GlassCard;