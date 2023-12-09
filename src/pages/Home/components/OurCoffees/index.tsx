import { Minus, Plus, ShoppingCart } from 'phosphor-react'
// import coffee from '../../../../assets/coffee.png'
import { coffees } from '../../../../data/coffees'

export function OurCoffees() {
  return (
    <section className="w-full h-[34rem]">
      <h2 className="font-baloo text-3xl font-bold ">Nossos cafés</h2>
      <div className="grid grid-cols-4 gap-8  ">
        {coffees.map((coffee) => {
          return (
            <>
              <div
                key={coffee.id}
                className="w-full flex flex-col gap-6 items-center bg-base-card mt-16 rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md"
              >
                <img
                  src={`/coffees/${coffee.photo}`}
                  className="-mt-6"
                  alt="coffees"
                />
                <div className="w-auto flex flex-wrap gap-2 items-center justify-center">
                  {coffee.tags.map((tag) => (
                    <span
                      key={`${coffee.id}${tag}`}
                      className=" bg-brand-yellow text-button-cart font-semibold uppercase text-sm px-2 py-1  rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="font-baloo text-2xl">{coffee.name}</p>
                <p className="font-roboto text-base-label text-center px-2">
                  {coffee.description}
                </p>
                <div className="flex justify-center items-center pb-6">
                  <p className="flex items-center mr-8 font-baloo font-semibold text-3xl text-base-text">
                    <span className="font-medium font-roboto text-sm">R$</span>{' '}
                    9,90
                  </p>
                  <div className="flex items-center w-32 ">
                    <p className=" p-2 flex items-center justify-center ml-2 gap-2 bg-button-map-bg rounded-md font-semibold">
                      <Minus
                        className="text-button-map"
                        size={16}
                        weight="fill"
                      />
                      1
                      <Plus
                        className="text-button-map"
                        size={16}
                        weight="fill"
                      />
                    </p>
                    <button className="bg-button-map rounded-md border-none p-2 mx-2 text-base">
                      <ShoppingCart
                        className="text-base-background"
                        size={24}
                        weight="fill"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </section>
  )
}
