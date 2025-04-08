'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export const useTelegramNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const WebApp = window.Telegram?.WebApp;
    if (!WebApp) return;

    const BackButton = WebApp.BackButton;
    const MainButton = WebApp.MainButton;

    BackButton.offClick();
    MainButton.hide(); // всегда скрыт

    if (pathname === '/') {
      // На главной ничего не делаем, Telegram сам скроет всё
      BackButton.hide();
    } else {
      // На других страницах — показываем BackButton
      BackButton.show();
      BackButton.onClick(() => {
        router.back();
      });
    }
  }, [pathname, router]);
};
