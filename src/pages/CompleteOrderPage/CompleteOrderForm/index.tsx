import { MapPin } from 'phosphor-react'
import { CompleteOrderFormInput } from './CompleteOrderFormInput'

export function CompleteOrderForm() {
  return (
    <div className=" flex flex-col gap-3 w-640">
      <h2 className="text-xl font-baloo">Complete seu pedido</h2>

      <div className="flex flex-col gap-8 w-full bg-base-card rounded-md p-10">
        <div className="flex gap-8">
          <MapPin
            size={20}
            className="text-timer-button absolute left-80 ml-20 "
          />
          <div className="flex flex-col gap-2">
            <p className="font-roboto text-base leading-5 font-medium">
              Endereço de entrega
            </p>
            <p className="font-roboto text-sm leading-5">
              Informe o endereço onde deseja receber seu pedido
            </p>

            {/* INPUT */}
            <div className="w-full grid grid-cols-6 gap-4">
              <CompleteOrderFormInput
                type="number"
                placeholder="CEP"
                className="col-span-2"
              />
              <CompleteOrderFormInput
                type="text"
                placeholder="Rua"
                className="col-span-6"
              />
              <CompleteOrderFormInput
                type="number"
                placeholder="Número"
                className="col-span-2"
              />
              <CompleteOrderFormInput
                type="text"
                placeholder="Complemento"
                className="col-span-4"
              />
              <CompleteOrderFormInput
                type="text"
                placeholder="Bairro"
                className="col-span-3"
              />
              <CompleteOrderFormInput
                type="text"
                placeholder="Cidade"
                className="col-span-2"
              />
              <CompleteOrderFormInput
                type="text"
                placeholder="UF"
                className="col-span-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
