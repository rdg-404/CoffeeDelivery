import { Minus, Plus, Trash } from 'phosphor-react'

export function CompleteOrderSelected() {
  return (
    <div className=" flex flex-col gap-3 w-640">
      <h2 className="ml-28 text-xl font-baloo">Cafés selecionados</h2>
      <div className="flex flex-col w-448 bg-base-card rounded-md p-10 ml-28 absolute mt-10">
        <div className="flex gap-8">
          <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 ">
              <img
                src={`/coffees/americano.png`}
                className="w-16 h-16"
                alt="coffee"
              />

              <div className="flex flex-col gap-2">
                <p className="font-roboto text-base">Americano</p>
                <div className="flex items-center w-32 gap-2">
                  <p className=" p-1 flex items-center justify-center gap-2 bg-base-button rounded-md font-semibold">
                    <Minus
                      className="text-button-map"
                      size={16}
                      weight="fill"
                    />
                    1
                    <Plus className="text-button-map" size={16} weight="fill" />
                  </p>
                  <button className="flex items-center bg-base-button p-1 rounded-md gap-2 font-normal">
                    <Trash className="text-button-map" />
                    REMOVER
                  </button>
                </div>
              </div>
              <p className=" ml-20 font-bold font-roboto text-base-text text-base">
                R$ 9,90
              </p>
            </div>

            <span className="border-b-2 border-base-input"></span>
            <div className="flex flex-row gap-5">
              <img
                src={`/coffees/cremoso.png`}
                className="w-16 h-16"
                alt="coffee"
              />
              <div className="flex flex-col gap-2">
                <p className="font-roboto text-base">Cremoso</p>
                <div className="flex items-center w-32 gap-2">
                  <p className=" p-1 flex items-center justify-center gap-2 bg-base-button rounded-md font-semibold">
                    <Minus
                      className="text-button-map"
                      size={16}
                      weight="fill"
                    />
                    1
                    <Plus className="text-button-map" size={16} weight="fill" />
                  </p>
                  <button className="flex items-center bg-base-button p-1 rounded-md gap-2 font-normal">
                    <Trash className="text-button-map" />
                    REMOVER
                  </button>
                </div>
              </div>
              <p className=" ml-auto font-bold font-roboto text-base-text text-base">
                R$ 19,80
              </p>
            </div>

            <span className="border-b-2 border-base-input"></span>
            <div className="flex flex-row justify-between">
              <div className="flex flex-col">
                <p className="text-base-text font-normal text-base">
                  Total de itens
                </p>
                <p className="text-base-text font-normal text-base">Entrega</p>
                <p className="text-xl font-bold text-base-text">Total</p>
              </div>

              <div className="flex flex-col items-end">
                <p className="text-base-text font-normal text-base">R$ 29,70</p>
                <p className="text-base-text font-normal text-base">R$ 3,50</p>
                <p className="text-xl font-bold text-base-text">R$ 33,20</p>
              </div>
            </div>

            <button className="bg-timer-button px-3 py-2 rounded-md uppercase font-bold text-base-background">
              Confimar pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
