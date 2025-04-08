'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Full = () => {
    const path = usePathname();
    const {push} = useRouter()
    useEffect(() => {
        const Data = localStorage.getItem('data');
        if(path.includes('user') && Data) { 
            push('/');
        }
        setTimeout(() => {
            console.log(1);
            
            
            
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
            }      
        }, 1000);
      
    }, []);

    

    return null;
};
