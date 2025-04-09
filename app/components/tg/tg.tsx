'use client';

import { useTelegramButtons } from '@/app/hooks/btn';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
export default function TelegramControlsClient() {
  const {push} = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      if (navigationEntry?.type === 'reload' && path !== '/') {
        push('/')
      }
    }
  }, [])
  useTelegramButtons();
  return null; // ничего не рендерим, просто хук
}
