import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import coffee from '../../../../assets/coffee.png'

export function OurCoffees() {
  return (
    <section className="w-full h-[34rem]">
      <h2 className="font-baloo text-3xl font-bold mb-9">Nossos cafés</h2>
      <div className=" max-w-sm h-auto flex items-center justify-center gap-32 bg-base-card pb-12 mt-24 rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md">
        <div className=" w-full flex items-center flex-col justify-between gap-4">
          <img src={coffee} className="-mt-6" alt="coffee" />
          <p className="bg-brand-yellow text-button-cart font-semibold uppercase text-sm px-3 py-1 rounded-full">
            Tradicional
          </p>
          <p className="font-baloo text-2xl">Expresso Tradicional</p>
          <p className="font-roboto text-base-label text-center">
            O tradicional café feito com água quente e grãos moídos
          </p>

          <div className="flex justify-center items-center ">
            <p className="font-baloo font-semibold text-3xl text-base-text">
              <span className="font-medium font-roboto text-lg">R$</span> 9,90
            </p>
            <div className="flex justify-evenly">
              <p className="w-28 p-4 flex items-center justify-center ml-8 gap-4 bg-button-map-bg rounded-md font-semibold">
                <Minus className="text-button-map" size={20} weight="fill" />
                1
                <Plus className="text-button-map" size={20} weight="fill" />
              </p>
            </div>
            <button className="bg-button-map rounded-md border-none p-4 mx-4 text-base">
              <ShoppingCart
                className="text-base-background"
                size={24}
                weight="fill"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
