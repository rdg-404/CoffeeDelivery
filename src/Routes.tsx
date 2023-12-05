import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { ProductPage } from './pages/Product'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
      </Route>
    </Routes>
  )
}
