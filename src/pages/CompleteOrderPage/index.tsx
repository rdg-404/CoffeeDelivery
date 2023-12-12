import { CompleteCardForm } from './CompleteCardForm'
import { CompleteOrderForm } from './CompleteOrderForm'

export function CompleteOrderPage() {
  return (
    <form action="" className="mt-32 flex flex-col justify-between gap-2">
      <CompleteOrderForm />
      <CompleteCardForm />
    </form>
  )
}
