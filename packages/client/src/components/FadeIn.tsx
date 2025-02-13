'use client';

import dynamic from 'next/dynamic';

const FadeInComponent = dynamic(() => import('./FadeInComponent').then(mod => mod.default), { ssr: false });

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export const FadeIn = FadeInComponent as React.ComponentType<FadeInProps>; 