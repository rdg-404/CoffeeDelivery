import { CurrencyDollarSimple, MapPin, Timer } from 'phosphor-react'

import success from '../../assets/success.svg'

export function SuccessPage() {
  return (
    <div className="mt-32 grid grid-cols-2 items-center">
      <div className=" flex flex-col">
        <h2 className="font-baloo text-button-cart text-3xl mt-24">
          Uhu! Pedido confirmado
        </h2>
        <p className="text-xl">
          Agora é só aguardar que logo o café chegará até você
        </p>
        <div className="flex flex-col w-full gap-10 mt-24 border border-l-timer-button border-t-timer-button  border-r-button-map border-b-button-map rounded-tl-md rounded-tr-3xl rounded-bl-3xl rounded-br-md py-8 pr-32 pl-16">
          <p className="flex items-center gap-3  ">
            <MapPin
              size={20}
              weight="fill"
              className=" bg-button-map   min-w-max h-7 rounded-full border-none p-2 text-base-background"
            />
            Entrega em Rua João Daniel Martinelli, 102 Farrapos - Porto Alegre,
            RS
          </p>
          <p className="flex items-center gap-3 w-48 text-base">
            <Timer
              size={20}
              weight="fill"
              className=" bg-timer-button  min-w-max h-7 rounded-full border-none p-2  text-base-background"
            />
            <div className="flex flex-col">
              Previsão de entrega
              <span className="font-semibold text-base-text">
                20 min - 30 min
              </span>
            </div>
          </p>
          <p className="flex items-center gap-3 w-60">
            <CurrencyDollarSimple
              size={20}
              weight="fill"
              className=" bg-button-cart min-w-max h-7 rounded-full border-none p-2  text-base-background"
            />
            <div className="flex flex-col">
              Pagamento na entrega
              <span className="font-semibold text-base-text">
                Cartão de Crédito
              </span>
            </div>
          </p>
        </div>
      </div>

      <img src={success} alt="men on bike" className="mt-48" />
    </div>
  )
}
