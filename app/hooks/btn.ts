'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

declare global {
  interface Window {
    Telegram?: any;
  }
}

export const useTelegramButtons = () => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const WebApp = window.Telegram?.WebApp;
    if (!WebApp) return;

    const MainButton = WebApp.MainButton;
    const BackButton = WebApp.BackButton;

    // Очистка предыдущих обработчиков
    MainButton.offClick();
    BackButton.offClick();

    if (pathname === '/') {
      // Кнопка "Закрыть"
      BackButton.hide();

      MainButton.setText('Закрыть');
      MainButton.show();
      MainButton.onClick(() => {
        WebApp.close();
      });
    } else {
      // Кнопка "Назад"
      MainButton.hide();

      BackButton.show();
      BackButton.onClick(() => {
        router.back();
      });
    }
  }, [pathname, router]);
};
