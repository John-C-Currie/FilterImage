import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import DownloadButton from './components/DownloadButton'
import UploadAndDisplayImage from './components/UploadAndDisplayImage'
import ImagePreview from './components/ImagePreview'
import FilterDropdown from './components/FilterDropdown'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <UploadAndDisplayImage></UploadAndDisplayImage>
        </div>
        <div>
        </div>
        <div>
            <FilterDropdown></FilterDropdown>
        </div>

    </>
  )
}

export default App
