import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import Slides from './Slides'
import 'reveal.js/dist/reveal.css'
import 'reveal.js-appearance/plugin/appearance/appearance.css'
import 'animate.css'
import 'reveal.js/dist/theme/night.css'

createRoot(document.getElementById('app')!).render(<Slides />)
