'use client';
import { useRouter } from "next/navigation"
import { PageConfig } from "../config/pages";
import { useEffect, useState } from "react";
import { Loading } from "../components/loading/loading";

export default function Info() {
    const { push} = useRouter();
    const [id,setId] = useState(0);
    const [isLoading,setLoading] = useState(true);
    useEffect(()=> {
setTimeout(() => {
    setId(window?.Telegram?.WebApp?.initDataUnsafe?.user?.id);
    setLoading(false);
}, 1000);
    },[])
    const HandleOpen = (link:string)=> {
        window.open(link, "_blank")
    }
    if(isLoading == true) return <Loading/>
    return(
        <div className="max-w-[500px] mx-auto w-full flex flex-col gap-[30px] mt-[30px] px-[20px]">

            <div className="flex flex-col gap-[10px]">
                <div onClick={()=>HandleOpen('https://blacklistone.ru//docx/pravila.docx')} className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex "> Предоставление услуг</div>
                <div onClick={()=>HandleOpen('https://blacklistone.ru//docx/rekkurentnie.docx')} className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex "> Рекуррентные платежи</div>
                <div onClick={()=>HandleOpen('https://blacklistone.ru//docx/dogovor.docx')} className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Договор оферты</div>
                <div onClick={()=>HandleOpen('https://blacklistone.ru//docx/sokhranenie.docx')} className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Сохранение учётных данных</div>
                <div onClick={()=>HandleOpen('https://blacklistone.ru//docx/soglasie.docx')} className="cursor-pointer underline text-[#DDDDDD] font-[500] text-[14px] bg-[#8E237333] rounded-[10px] p-[10px] inline-flex ">Обработка данных</div>
            </div>
            <div className="flex flex-col items-center justify-center gap-[10px] mb-[110px]">
                <div className="text-[#926C88] text-[14px]">Ваш ID аккаунта: <span className="text-white">{id}</span></div>
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