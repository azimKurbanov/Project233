import React from 'react'
import Otabek from './components/Otabek'
import Oqil from './components/Oqil'
import Javani from './components/Javani'
import Said from './components/Said'

// Figma «Git Jamoaviy» dagi tartib:
//   «Популярные продукты» (Otabek) → «Для розничных магазинов и ресторанов» (Oqil)
//   → «Ответы на вопросы» (Javohir) → «База знаний» (Said)
// Hali hech kim qilmagan qismlar: Header + hero, xizmatlar kartochkalari,
// «С нами удобнее», ariza formasi, footer.
const App = () => {
  return (
    // *:min-h-0 — har bir qismdagi min-h-screen bo'sh joy qoldirmasin (Figma'dagidek ketma-ket)
    <div className="*:min-h-0">
      <Otabek />
      <Oqil />
      <Javani />
      <Said />
    </div>
  )
}

export default App
