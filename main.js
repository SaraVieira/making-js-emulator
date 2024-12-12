import Notes from 'reveal.js/plugin/notes/notes.esm'
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.esm'
import 'reveal.js-appearance/plugin/appearance/appearance.css'
import Appearance from 'reveal.js-appearance/plugin/appearance/appearance.js'
import './styles.css'
import Reveal from 'reveal.js'
import 'animate.css'

const deck = new Reveal()
deck.initialize({
  plugins: [Notes, RevealHighlight, Appearance],
  hash: true,
  slideNumber: true,
  controls: false,
})
