import { useState } from 'react'
import CategorieDeRecette from './componants/CategorieDeRecette'
import RecettesParCategorie from './componants/RecettesParCategorie'
import Recette from './componants/Recette'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Routes, Route} from 'react-router-dom'
import { Container, Stack } from "react-bootstrap";
import RecetteFavoris from './componants/RecetteFavoris'
import { useSelector } from "react-redux";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path='/' element={<CategorieDeRecette/>}/>
        <Route path="categorie/:nameCategorie" element={<RecettesParCategorie/>}/>
        <Route path="categorie/:nameCategorie/recette/:identifiant" element={<Recette/>}/>
        <Route path="/listesDesFavoris" element={<RecetteFavoris/>}/>
        {/* <Route path='/:categories' element={<CategorieDeRecette/>}/> */}
      </Routes>
      {/* <Stack>
        <Container>
          <RecetteFavoris></RecetteFavoris>
        </Container>
      </Stack> */}
    </QueryClientProvider>
  )
}

export default App
