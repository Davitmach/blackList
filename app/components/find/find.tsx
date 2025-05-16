'use client';

import { PageConfig } from "@/app/config/pages";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export const Find = () => {
    const { push } = useRouter();
    const ref = useRef<HTMLInputElement>(null);
    const [error, setError] = useState<string | null>(null);

    // Регулярное выражение для валидации и извлечения ID из ссылки на ВКонтакте
    const validateUrl = (url: string) => {
        try {
            // Удаляем параметры после ?
            const cleanUrl = url.split('?')[0];
    
            // Поддержка ссылок без https://
            const normalizedUrl = cleanUrl.startsWith('http') ? cleanUrl : `https://${cleanUrl}`;
    
            const parsedUrl = new URL(normalizedUrl);
    
            if (parsedUrl.hostname !== 'vk.com' && parsedUrl.hostname !== 'www.vk.com') {
                return null;
            }
    
            const path = parsedUrl.pathname.slice(1); // удаляем начальный "/"
            const valid = /^[a-zA-Z0-9_.]+$/.test(path); // проверка на допустимые символы
    
            return valid ? path : null;
        } catch {
            return null;
        }
    };

    const HandleFind = () => {
        if (ref.current) {
            const value = ref.current.value.trim();
    
            if (value === '') {
                setError('Пожалуйста, введите ссылку.');
            } else {
                const userIdOrUsername = validateUrl(value);
                if (!userIdOrUsername) {
                    setError('Неверный формат ссылки ВКонтакте.');
                } else {
                    setError(null);
                    push(`${PageConfig.user}/${userIdOrUsername}`);
                }
            }
        }
    };

    return (
        <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] max-w-[500px] mx-auto w-full px-[20px] flex flex-col items-center gap-[20px]">
            <div className="w-full flex flex-col items-center justify-center gap-[10px]">
                <div className="text-[#DDDDDD] font-[500] text-[22px]">Запустим проверку?</div>
                <div className="text-[#AAAAAA] font-[300] text-[14px]">Введите в поле ниже ссылку на страницу ВК</div>
                <div className="w-full">
                    <input
                        ref={ref}
                        type="text"
                        placeholder="https://vk.com/"
                        className="w-full bg-white outline-none border-none rounded-[50px] py-[10px] px-[15px]"
                    />
                    {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
                </div>
            </div>
            <div className="inline-flex">
                <button onClick={HandleFind} className="cursor-pointer rounded-[50px] bg-[#8E2373B2] text-[16px] py-[10px] px-[60px] text-white">
                    Начать
                </button>
            </div>
        </div>
    );
};
