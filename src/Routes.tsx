import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ProductPage } from './pages/Product'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}
