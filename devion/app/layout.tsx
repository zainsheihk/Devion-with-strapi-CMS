import "@styles/globals.css";
import type { Metadata } from "next";
import Header from "@components/layout/header";
import { ThemeProvider } from "@utils/mui-tailwind";
import { Nunito_Sans } from "next/font/google";
import Footer from "@components/layout/footer";
import { getConfiguration } from "@services/index";
const nunito_sans = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Devion - Dental Jobs",
  description: "Devion - Dental Jobs",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const {
    data: { attributes },
  } = await getConfiguration();

  return (
    <ThemeProvider>
      <html lang="en" className={nunito_sans.className}>
        <body className="no-scrollbar">
          <Header attributes={attributes} />
          <main>{children}</main>
          <Footer attributes={attributes} />
        </body>
      </html>
    </ThemeProvider>
  );
}
