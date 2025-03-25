'use client';

import { PageConfig } from "@/app/config/pages";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export const Find = ()=> {
    const {push} = useRouter()
    const ref = useRef<HTMLInputElement>(null);
    const HandleFind = ()=> {
        if(ref.current) {
            if(ref.current.value !=='' && ref.current.value) {
                push(PageConfig.user)
                
            }
        }
        
    }
    return(
        <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-[500px] mx-auto w-full px-[20px] flex flex-col items-center gap-[20px]">
            <div className="w-full flex flex-col items-center justify-center gap-[10px]">
                <div className="text-[#DDDDDD] font-[500] text-[22px]">Запустим проверку?</div>
                <div className="text-[#AAAAAA] font-[300] text-[14px]">Введите в поле ниже сслыку на страницу ВК</div>
                <div className="w-full"><input ref={ref} type="text" placeholder="https://vk.com/" className="w-full bg-white outline-none border-none rounded-[50px] py-[10px] px-[15px]" /></div>
            </div>
            <div className="inline-flex"><button onClick={HandleFind} className="cursor-pointer rounded-[50px] bg-[#8E2373B2] text-[16px] py-[10px] px-[60px] text-white">Начать</button></div>
        </div>
    )
}