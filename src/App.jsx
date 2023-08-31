import { useState } from 'react'
import CategorieDeRecette from './componants/CategorieDeRecette'
import RecettesParCategorie from './componants/RecettesParCategorie'
import Recette from './componants/Recette'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Routes, Route} from 'react-router-dom'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    </QueryClientProvider>
  )
}

export default App
