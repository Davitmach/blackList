'use client';

import { useState } from "react";

export default function Page() {
    const [active,setActive] = useState(false);
    return(
        <>
        <div className="max-w-[500px] pb-[120px] mx-auto w-full px-[20px] flex flex-col items-center gap-[15px] mt-[30px]">
            <div className="w-full flex justify-start"><h1 className="text-[#DDDDDD] text-[15px] font-[500]">Отменить подписку</h1></div>
            <div><p className="text-[#926C88] text-[14px] font-[400]">Анализ возможен только при условии открытого аккаунта. Для любой формы аналитики мы берём исключительно открытую информацию через официальные API.</p></div>
            <div><p className="text-[#926C88] text-[14px] font-[400]">Анализ возможен только при условии открытого аккаунта. Для любой формы аналитики мы берём исключительно открытую информацию через официальные API.</p></div>
            <div className="flex flex-col gap-[15px] items-center justify-center max-w-[269px] w-full">
                <button className="cursor-pointer leading-none h-[44px] bg-[#8E2373B2] rounded-[50px] max-w-[269px] w-full text-[#FFFFFF] text-[16px] font-[400] py-[12.5px] cursor-pointer">Отменить подписку</button>
                <button className="cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Восстановить подписку</button>
                <button className="cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Поддержка</button>
            </div>
            <div><p className="text-[#926C88] text-[12px] font-[400]">Согласен с договором офертой, политикой обработки персональных данных, правилам представления услуг по подписке, офертой рекурентных платежей и договором сохроанения учётных данных.</p></div>
            <div><p className="text-[#926C88] text-[12px] font-[400]">Согласен с договором офертой, политикой обработки персональных данных, правилам представления услуг по подписке, офертой рекурентных платежей и договором сохроанения учётных данных.</p></div>
            <div className=" max-w-[269px] w-full"><button onClick={()=> {
                setActive(!active)
          
            }} className=" leading-none cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent w-full">Приостановить подписку</button></div>
        </div>
        {active && <div className="fixed left-0 top-0 w-full h-[100vh] bg-[#00000066] z-[9999999999999] flex items-center justify-center"><div className=" fadeIn max-w-[320px] w-full bg-[#2B0821] py-[20px] rounded-[10px] flex flex-col items-center justify-center gap-[20px]">
            <h1 className="text-center text-[#DDDDDD] text-[18px] font-[400] max-w-[300px] w-full">Ваша подписка уже приостановлена</h1>
            <button onClick={()=> {
                setActive(false)
            }} className="max-w-[149px] w-full cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Окей</button>
            </div></div>}
        </>
    )
}