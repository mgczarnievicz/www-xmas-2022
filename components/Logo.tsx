import Image from 'next/image';
import React from 'react';

import styles from '../styles/Logo.module.css';

export default function Logo() {
	return (
		<Image
			src='/img/home/wxmasc_onwhite-logo.svg'
			alt='Logo'
			width={100}
			height={50}
			className={styles.logo}
		/>
	);
}
