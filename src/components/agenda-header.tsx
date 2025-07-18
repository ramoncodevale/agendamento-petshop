import { CustomDatePicker } from "./custom-date-picker"

export const AgendaHeader = () => {
  return (
   <section className="mt-[50px]">
    <div className="flex justify-center items-center gap-3">
    <div className="flex flex-col">
    <h2 className="text-2xl font-bold text-white">Sua agenda</h2>
    <p className="text-[#98959D] text-[14px] font-medium mt-[4px]">Aqui você pode ver todos os clientes e serviços agendados para hoje.</p>
    </div>
    <CustomDatePicker />
    </div>
   </section>
  )
}

