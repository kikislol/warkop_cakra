import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Container, SSRProvider } from "@/components/boostrap";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Warkop Cakra",
    description: "The best place to chill in Surabaya",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SSRProvider>
                    <NavBar />
                    <main>
                        <Container className="py-4">
                            <div>Welcome to the best warkop in Surabaya</div>
                            {children}
                        </Container>
                    </main>
                </SSRProvider>
            </body>
        </html>
    );
}
