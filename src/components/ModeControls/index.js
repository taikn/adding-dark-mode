import React, { useState } from 'react'
import styles from './styles.module.css'
import DayIcon from '../DayIcon'
import NightIcon from '../NightIcon'
import AutoIcon from '../AutoIcon'
import ModeRadioButton from '../ModeRadioButton'

export default () => {
  const [mode, setMode] = useState('auto')
  return (
    <div className={styles.controlsContainer}>
      <ModeRadioButton
        id='dayMode'
        name='colorMode'
        value='day'
        onChange={() => setMode('day')}
        checked={mode === 'day'}
      >
        <DayIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='autoMode'
        name='colorMode'
        value='auto'
        onChange={() => setMode('auto')}
        checked={mode === 'auto'}
      >
        <AutoIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='nightMode'
        name='colorMode'
        value='night'
        onChange={() => setMode('night')}
        checked={mode === 'night'}
      >
        <NightIcon size='28px' />
      </ModeRadioButton>
    </div>
  )
}
