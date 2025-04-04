'use client';
import { useRouter } from "next/navigation"
import { PageConfig } from "../config/pages";

export default function Info() {
    const { push} = useRouter();
    return(
        <div className="max-w-[500px] mx-auto w-full flex flex-col gap-[30px] mt-[30px] px-[20px]">

            <div className="flex flex-col gap-[10px]">
                <div className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Предоставление услуг</div>
                <div className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Рекуррентные платежи</div>
                <div className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Договор оферты</div>
                <div className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Сохранение учётных данных</div>
                <div className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Обработка данных</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] mb-[110px]">
                <div className="text-[#926C88] text-[14px]">Ваш ID аккаунта: <span className="text-white">1615644899</span></div>
                <div className="text-[#926C88] text-[14px] w-[243px] text-center">ИП ГЛАДУН ДМИТРИЙ ИГОРЕВИЧ
ОГРН/ОГРНИП: 324330000044268
ИНН: 332898961784</div>
<div className="text-[#926C88] text-[14px] text-decoration underline cursor-pointer">Служба поддержки</div>
<div className="text-[#926C88] text-[14px] cursor-pointer">Отмена подписки</div>
<div className="text-[#926C88] text-[14px] cursor-pointer" onClick={()=> {
    push(PageConfig.analiz)
}}>Как происходит анализ</div>
            </div>

        </div>
    )
}