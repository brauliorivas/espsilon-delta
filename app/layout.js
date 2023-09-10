import "./globals.css";
import { solway } from "@/utils/fonts";

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={solway.className}>{children}</body>
        </html>
    );
}
