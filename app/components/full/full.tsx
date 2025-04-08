'use client'

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export const Full = () => {
    const path = usePathname();
    useEffect(() => {
        
        setTimeout(() => {
            console.log(1);
            console.log(path);
            
            
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
            }      
        }, 1000);
      
    }, []);

    

    return null;
};
