import { Bank, CreditCard, CurrencyDollarSimple, Money } from 'phosphor-react'

export function CompleteCardForm() {
  return (
    <div className="flex flex-col  w-640 bg-base-card rounded-md p-10">
      <div className="flex gap-8">
        <CurrencyDollarSimple
          size={20}
          className="text-button-map absolute left-80 ml-20 "
        />
        <div className="flex flex-col gap-2">
          <p className="font-roboto text-base leading-5 font-medium">
            Pagamento
          </p>
          <p className="font-roboto text-sm leading-5">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>

          {/* INPUT */}
          <ul className="w-full grid grid-cols-3 gap-4 mt-4">
            <li>
              <input
                type="radio"
                name="radio"
                id="credCard"
                className="sr-only peer"
              />
              <label
                htmlFor="credCard"
                className="flex p-3 bg-base-button rounded-md border border-base-border cursor-pointer focus:outline-none peer-checked:border-button-map text-base-label peer-checked:text-button-map peer-checked:bg-button-map-bg"
              >
                <div className="flex items-center gap-2 min-w-max">
                  <CreditCard size={16} className="text-button-map" />
                  <p className="text-sm">CARTÃO DE CRÉDITO</p>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="radio"
                id="debCard"
                className="sr-only peer"
              />
              <label
                htmlFor="debCard"
                className="flex p-3 bg-base-button rounded-md border border-base-border cursor-pointer focus:outline-none peer-checked:border-button-map text-base-label peer-checked:text-button-map peer-checked:bg-button-map-bg"
              >
                <div className="flex items-center gap-2 min-w-max">
                  <Bank size={16} className="text-button-map" />
                  <p className="text-sm">CARTÃO DE DÉBITO</p>
                </div>
              </label>
            </li>

            <li>
              <input
                type="radio"
                name="radio"
                id="money"
                className="sr-only peer"
              />
              <label
                htmlFor="money"
                className="flex p-3 bg-base-button rounded-md border border-base-border cursor-pointer focus:outline-none peer-checked:border-button-map text-base-label peer-checked:text-button-map peer-checked:bg-button-map-bg"
              >
                <div className="flex items-center gap-2 min-w-max">
                  <Money size={16} className="text-button-map" />
                  <p className="text-sm">DINHEIRO</p>
                </div>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
