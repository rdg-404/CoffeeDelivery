import CoffeeLogo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <header className=" fixed top-0 right-0 left-0 w-full h-20 z-20 bg-base-background flex items-center justify-center ">
      <img className="flex ml-80 pl-12" src={CoffeeLogo} alt="coffee logo" />

      <div className="flex gap-6 ml-auto mr-80 pr-16 ">
        <button className="bg-button-map-bg text-button-map font-semibold flex items-center justify-center gap-1 min-w-max h-9 rounded-md border-none px-2 text-base">
          <MapPin className="text-button-map" size={20} weight="fill" />
          Porto Alegre, RS
        </button>

        <button className="bg-button-cart-bg flex items-center justify-center  gap-1 min-w-max h-9 rounded-md border-none px-2 text-base">
          <ShoppingCart className="text-button-cart" size={20} weight="fill" />
        </button>
      </div>
    </header>
  )
}
