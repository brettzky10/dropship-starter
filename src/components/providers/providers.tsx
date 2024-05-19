"use client";

import * as React from "react";
import { ThemeProvider } from "@/components/providers/theme-provider"
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { store } from '@/lib/store/store'
import { Toaster } from "sonner";


export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <Provider store={store}>
       <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        <Toaster/>
        
    </Provider>
  );
}