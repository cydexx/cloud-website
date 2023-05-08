import "./globals.css"

import localFont from "@next/font/local"
const neueMachina = localFont({
    src: [
        {
            path: "../public/fonts/NeueMachina-Regular.ttf",
            weight: "400",
        },
        {
            path: "../public/fonts/NeueMachina-Ultrabold.ttf",
            weight: "700",
        },
    ],
    variable: "--font-machina",
})
export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={`${neueMachina.variable} font-sans`}>
            <body className={neueMachina.className}>{children}</body>
        </html>
    )
}
