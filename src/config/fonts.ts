import { Inter, Montserrat_Alternates, Fredericka_the_Great, Raleway, Crimson_Text } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const titleFont = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['500', '700'],
});

export const titleHome = Fredericka_the_Great({
  subsets: ['latin'],
  weight: ["400"]
})

export const compraFont = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "700"]
})


export const titleSidebar = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "700"]
})