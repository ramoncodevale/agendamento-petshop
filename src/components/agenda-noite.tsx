
export const AgendaNoite = () => {
  return (
   <section className="flex justify-center mt-3">
    <div className="w-[711px] h-[120px] bg-[#2E2C30] rounded-[10px] p-5">
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-3">
    <img src="/moon.png" alt="Lua" />
    <p className="text-white font-bold">Noite</p>
    </div>
    <p className="text-[#98959D] font-bold">19h-21h</p>
    </div>

   <div className="w-full border mt-3 border-[#353339]" />

   <div className="flex justify-between items-center p-5">
   <div className="flex items-center gap-4">
    <p className="text-white text-[12px] font-semibold">20:00</p>
    <p className="text-white text-[12px] font-semibold">Max <span className="text-[#98959D] text-[12px]">/ Camila Santos</span></p>
    </div>
    <p className="text-[#98959D] text-[12px]">Limpeza de Dentes</p>
    <p className="text-[#666666] text-[12px] font-light">Remover Agendamento</p>
   </div>
    </div>
   </section>
  )
}


