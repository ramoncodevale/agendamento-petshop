export const AgendaManha = () => {
  return (
    <section className="flex justify-center mt-8">
      <div className="bg-[#2E2C30] w-[711px] h-[150px] rounded-[10px] p-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <img src="/sun-manha.png" alt="Icon Sun" />
            <p className="text-white font-bold">Manhã</p>
          </div>
          <p className="text-[#98959D] font-bold">09h-12h</p>
        </div>

        <div className="w-full border mt-3 border-[#353339]" />

       <div className="flex justify-between items-center mt-9 px-4">
      <div className="flex items-center gap-4">
        <p className="text-white  text-[14px] font-bold">09:00</p>
        <p className="text-white text-[12px] font-semibold">Thor <span className="text-[#98959D] text-[12px]">/ Fernanda Costa</span></p>
      </div>
      <p className="text-[#98959D] text-[12px]">Vacinação</p>
      <p className="text-[#666666] text-[12px]">Remover agendamento</p>
      </div>
       </div>
    </section>
  );
};
