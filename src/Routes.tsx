import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/Home'
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrderPage'
import { SuccessPage } from './pages/SuccessPage'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Route>
    </Routes>
  )
}
