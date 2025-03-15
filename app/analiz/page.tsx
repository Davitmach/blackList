export default function Analiz() {
    return(
      <div className="mx-auto max-w-[500px] w-full flex flex-col gap-[15px] mt-[30px] px-[20px] pb-[100px]">

        <div className="flex flex-col gap-[10px]">
            <div className="text-[#DDDDDD] text-[16px] font-[500] bg-[#8E237333] rounded-[10px] py-[5px] px-[10px]">Анализ vk.ru</div>
            <div className=" text-[14p] text-[#926C88]">Анализ возможен только при условии открытого аккаунта. Для любой формы аналитики мы берём исключительно открытую информацию через официальные API.</div>
        </div>
        <div className="flex flex-col gap-[10px]">
            <div className="text-[#DDDDDD] text-[16px] font-[500] bg-[#8E237333] rounded-[10px] py-[5px] px-[10px]">ВНИМАНИЕ! МЫ НЕ ИСПОЛЬЗУЕМ НИКАКИХ ЗАПРЕЩЕННЫХ МЕТОДОВ ДЛЯ ПОИСКА ИНФОРМАЦИИ</div>
            <div className=" text-[14p] text-[#926C88]">В момент сбора инфорации по поисковым запросам, выдаются общедоступные результаты поисковой системы.</div>
        </div>
        <div className="flex flex-col gap-[10px]">
            <div className="text-[#DDDDDD] text-[16px] font-[500] bg-[#8E237333] rounded-[10px] py-[5px] px-[10px]">Ссылки</div>
            <div className=" text-[14p] text-[#926C88]">Важно понимать, что Сервис использует только общедоступные материалы и ссылки. При неверной формулировке запроса результат будет некорректным.</div>
        </div>
      </div>
    )
}