import { useState } from "react";
import DatePicker from "react-datepicker";
import { CalendarDays, ChevronDown } from "lucide-react";
import "react-datepicker/dist/react-datepicker.css";

export const CustomDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div className="relative w-[220px]">
      <CalendarDays className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9282FA] w-4 h-4 pointer-events-none" />

      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        placeholderText="10/01/2024"
        dateFormat="dd/MM/yyyy"
        className="w-full border border-[#98959D] text-[#98959D] text-sm font-medium px-8 py-2 pl-9 pr-8 rounded-[10px] shadow-sm focus:outline-none"
        calendarClassName="!z-50"
        popperPlacement="bottom-start"
      />

      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#98959D] w-4 h-4 pointer-events-none" />
    </div>
  );
};
