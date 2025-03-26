import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DownloadButton from './components/DownloadButton'
import UploadButton from './components/UploadButton'
import ImagePreview from './components/ImagePreview'
import FilterDropdown from './components/FilterDropdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <ImagePreview></ImagePreview>
        </div>
        <div>
        </div>
        <div>
            <FilterDropdown></FilterDropdown>
        </div>
        <div>
            <UploadButton></UploadButton>
            <DownloadButton></DownloadButton>
        </div>
    </>
  )
}

export default App
