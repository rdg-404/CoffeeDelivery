import cupCoffee from '../../../../assets/cupCoffee.svg'

export function Intro() {
  return (
    <section className="w-full h-[34rem] flex items-start justify-between gap-14 ">
      <h2 className="font-baloo text-5xl font-bold">
        Encontre o café perfeito para qualquer hora do dia
        <p className="font-roboto text-xl font-normal mt-4">
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
      </h2>
      <img src={cupCoffee} alt="logo cup coffee delivery" />
    </section>
  )
}
