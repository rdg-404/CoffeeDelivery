import { Intro } from './components/Intro'
import { OurCoffees } from './components/OurCoffees'

export function HomePage() {
  return (
    <div className="mt-32">
      <Intro />
      <OurCoffees />
    </div>
  )
}
