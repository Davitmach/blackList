'use client';

import { useState } from "react";
import { PageConfig } from "../config/pages";
import { useRouter } from "next/navigation";

export default function Page() {
    const [active,setActive] = useState(false);
    const {push} = useRouter();
    return(
        <>
        <div className="max-w-[500px] pb-[120px] mx-auto w-full px-[20px] flex flex-col items-center gap-[15px] mt-[30px]">
            <div className="w-full flex justify-start"><h1 className="text-[#DDDDDD] text-[15px] font-[500]">Если вы решили отменить подписку и попрощаться с нашим сервисом, вы можете это сделать двумя способами:</h1></div>
            <div><p className="text-[#926C88] text-[14px] font-[400]">Создать заявку на отмену подписки, отправив письмо на электронную почту redflag.robot@rambler.ru с пометкой «Отменить подписку». В письме необходимо предоставить информацию из пункта 7.8 Договора Оферты. Заявка, в соответсвии с Договором Офертой, будет рассмотрена в течение 24 часов в рабочие дни, однако на обработку запроса может уйти до 5 рабочих дней.</p></div>
            <div><p className="text-[#926C88] text-[14px] font-[400]">В соответствии с Правилами Пользования, клиент имеет право самостоятельно заполнить форму отмены подписки. Пожалуйста, будьте внимательны при заполнении формы и вводите номер карты, которую вы привязывали в момент активации подписки. При возникновении сложностей с отменой подписки просим вас обратиться в Службу Поддержки и описать пробему. Мы оперативно поможем с решением в рабочее время</p></div>
            <div className="flex flex-col gap-[15px] items-center justify-center max-w-[269px] w-full">
                <button onClick={()=> {
                    push(PageConfig.cancel2)
                }} className="cursor-pointer leading-none h-[44px] bg-[#8E2373B2] rounded-[50px] max-w-[269px] w-full text-[#FFFFFF] text-[16px] font-[400] py-[12.5px] cursor-pointer">Отменить подписку</button>
                <button className="cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Восстановить подписку</button>
                <button className="cursor-pointer leading-none h-[34px] text-[#BBBBBB] font-[700] text-[12px] py-[10px] w-full border-[2px] border-[#BBBBBB] rounded-[50px] bg-transparent">Поддержка</button>
            </div>
           
           
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