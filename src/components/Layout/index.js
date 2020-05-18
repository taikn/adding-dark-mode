import React from 'react'
import styles from './styles.module.css'
import ModeControls from '../ModeControls'

export default ({ children }) => (
  <React.Fragment>
    <ModeControls />
    <div className={styles.layoutContainer}>
      {children}
    </div>
  </React.Fragment>
)