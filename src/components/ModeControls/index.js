import React, { useState } from 'react'
import styles from './styles.module.css'
import DayIcon from '../DayIcon'
import NightIcon from '../NightIcon'
import AutoIcon from '../AutoIcon'
import ModeRadioButton from '../ModeRadioButton'

export default () => {
  const [switchMode, setSwitchMode] = useState('auto')

  const handleSwitch = (switchMode) => {
    setSwitchMode(switchMode)
  }

  return (
    <div className={styles.controlsContainer}>
      <ModeRadioButton
        id='daySwitchMode'
        aria-label='Light color mode'
        name='switchMode'
        value='day'
        onChange={() => handleSwitch('day')}
        checked={switchMode === 'day'}
      >
        <DayIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='autoSwitchMode'
        aria-label='Automatic color mode'
        name='switchMode'
        value='auto'
        onChange={() => handleSwitch('auto')}
        checked={switchMode === 'auto'}
      >
        <AutoIcon size='28px' />
      </ModeRadioButton>
      <ModeRadioButton
        id='nightSwitchMode'
        aria-label='Dark color mode'
        name='switchMode'
        value='night'
        onChange={() => handleSwitch('night')}
        checked={switchMode === 'night'}
      >
        <NightIcon size='28px' />
      </ModeRadioButton>
    </div>
  )
}
