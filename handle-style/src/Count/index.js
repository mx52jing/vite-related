export const num = 100;

import styles from './count.module.css'

const countDiv = document.createElement('div');
countDiv.classList.add(styles.countWrapper)

document.body.appendChild(countDiv);

// {countWrapper: '_countWrapper_3mplz_1'}
console.log(styles, 'count styles');