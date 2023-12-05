import CoffeeLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className="w-full h-12 mt-8 bg-base-background flex items-center justify-center">
      <div className="w-full flex items-center justify-between">
        <img src={CoffeeLogo} alt="coffee logo" />
      </div>

      <div className="flex flex-center gap-3">
        <button className="bg-button-map-bg text-button-map font-semibold flex items-center justify-center gap-1 min-w-max h-9 rounded-md border-none px-2 relative text-base">
          <MapPin className="text-button-map" size={20} weight="fill" />
          Porto Alegre, RS
        </button>

        <button className="bg-button-cart-bg flex items-center justify-center gap-1 min-w-max h-9 rounded-md border-none px-2 relative text-base">
          <ShoppingCart className="text-button-cart" size={20} weight="fill" />
        </button>
      </div>
    </header>
  )
}
