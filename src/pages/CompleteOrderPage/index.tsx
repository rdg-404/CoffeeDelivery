import { CompleteCardForm } from './CompleteCardForm'
import { CompleteOrderForm } from './CompleteOrderForm'
import { CompleteOrderSelected } from './CompleteOrderSelected'

export function CompleteOrderPage() {
  return (
    <form action="" className="mt-32 grid grid-cols-2  gap-8">
      <CompleteOrderForm />
      <CompleteOrderSelected />
      <CompleteCardForm />
    </form>
  )
}
