
export const AgendaTarde = () => {
  return (
   <section className="flex justify-center mt-3">
    <div className="bg-[#2E2C30] w-[711px] h-[270px] rounded-[10px] p-5">
      <div className="flex justify-between">
      <div className="flex items-center gap-3">
        <img src="/sun-tarde.png" alt="Sol da Tarde" />
        <p className="text-white font-bold">Tarde</p>
      </div>
      <p className="text-[#98959D] font-bold">13h-18h</p>
      </div>
      <div className="w-full border mt-3 border-[#353339]" />


      <div className="flex justify-between items-center mt-9 px-4">
      <div className="flex items-center gap-4">
        <p className="text-white text-[12px] font-semibold">13:00</p>
        <p className="text-white text-[12px] font-semibold">Mel <span className="text-[#98959D] text-[12px] font-semibold">/ João Souza</span></p>
      </div>      
        <p className="text-[#98959D] text-[12px]">Corte de Unhas</p>
        <p className="text-[#666666] text-[12px]">Remover Agendamento</p>
     </div>
     <div className="w-full border mt-3 border-[#353339]" />

    
      <div className="flex justify-between items-center mt-9 px-4">
      <div className="flex items-center gap-4">
        <p className="text-white text-[12px] font-semibold">14:00</p>
        <p className="text-white text-[12px] font-semibold">Bella <span className="text-[#98959D] text-[12px] font-semibold">/ Pedro Martins</span></p>
      </div>      
        <p className="text-[#98959D] text-[12px]">Aplicação de Anti-pulgas</p>
        <p className="text-[#666666] text-[12px]">Remover Agendamento</p>
     </div>
     <div className="w-full border mt-3 border-[#353339]" />

     <div className="flex justify-between items-center mt-9 px-4">
      <div className="flex items-center gap-4">
        <p className="text-white text-[12px] font-semibold">15:00</p>
        <p className="text-white text-[12px] font-semibold">Simba <span className="text-[#98959D] text-[12px] font-semibold">/ Juliana Rocha</span></p>
      </div>      
        <p className="text-[#98959D] text-[12px]">Tosa Higiênica</p>
        <p className="text-[#666666] text-[12px]">Remover Agendamento</p>
     </div>
    </div>

   </section>
  )
}

