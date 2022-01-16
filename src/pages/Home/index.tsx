import { useState } from 'react'
import ClickToCopySection from '../../components/ClickToCopySection/ClickToCopySection'
import InputField from '../../components/InputField/InputField'

export default function Home() {
  const [value, setValue] = useState('default')
  return (
    <div style={{ background: 'black', height: '100vh' }}>
      <InputField title="Title" value={value} setValue={setValue} />
      <ClickToCopySection text="Text" title="Title" />
    </div>
  )
}
