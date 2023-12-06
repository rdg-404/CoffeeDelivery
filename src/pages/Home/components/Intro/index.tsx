import cupCoffee from '../../../../assets/cupCoffee.svg'
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'

export function Intro() {
  return (
    <section className="w-full h-[34rem] flex items-start justify-between gap-14 ">
      <h2 className="font-baloo text-5xl font-bold">
        Encontre o café perfeito para qualquer hora do dia
        <p className="font-roboto text-xl font-normal mt-4">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div className="font-roboto text-base font-normal flex items-center justify-between mt-16">
          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-3">
              <ShoppingCart
                size={20}
                weight="fill"
                className="bg-button-cart text-base-background  flex items-center justify-center  min-w-max h-7 rounded-full border-none px-1 py-1 relative "
              />
              Compra simples e segura
            </p>
            <p className="flex items-center gap-3 ">
              <Timer
                size={20}
                weight="fill"
                className=" bg-timer-button flex items-center justify-center  min-w-max h-7 rounded-full border-none px-1 py-1 relative text-base-background"
              />
              Entrega rápida e rastreada
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="flex items-center gap-3">
              <Package
                size={20}
                weight="fill"
                className="bg-box-button flex items-center justify-center  min-w-max h-7 rounded-full border-none px-1 py-1 relative text-base-background"
              />
              Embalagem mantém o café intacto
            </p>
            <p className="flex items-center gap-3">
              <Coffee
                size={20}
                weight="fill"
                className="bg-button-map  flex items-center justify-center  min-w-max h-7 rounded-full border-none px-1 py-1 relative text-base-background"
              />
              O café chega fresquinho até você
            </p>
          </div>
        </div>
      </h2>
      <img src={cupCoffee} alt="logo cup coffee delivery" />
    </section>
  )
}
