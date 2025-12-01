import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from '@/context'
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Base WalletConnect App",
    description: "AppKit Example App",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const cookies = (await headers()).get('cookie')

    return (
        <html lang="en">
            <body className={inter.className}>
                <ContextProvider cookies={cookies}>{children}</ContextProvider>
            </body>
        </html>
    );
}
