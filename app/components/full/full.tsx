'use client'

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const Full = () => {

    useEffect(() => {
     
        setTimeout(() => {
          
            
            
            
            if (window.Telegram.WebApp) {
                window.Telegram.WebApp.expand();
            }      
        }, 1000);
      
    }, []);

    

    return null;
};
