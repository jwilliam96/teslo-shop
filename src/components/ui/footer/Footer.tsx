import { FaLocationDot, FaTelegram, FaFacebook, FaTwitter } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { titleFont } from '@/config/fonts';
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className=' pt-8 bg-white '>
      <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-between mb-10 max-w-[1000px] m-auto px-8">

        {/* SIGUE CONECTADO  */}
        <section className="text-fondo-topMenu ">
          <h2 className='font-bold mb-2 text-xl'>SIGUE CONECTADO</h2>
          <ul className="flex flex-col gap-2 ">
            <li className="flex gap-4"><FaFacebook size={20} />Facebook</li>
            <li className="flex gap-4"><AiFillInstagram size={20} />Instagram</li>
            <li className="flex gap-4"><FaTelegram size={20} />Telegram</li>
            <li className="flex gap-4"><FaTwitter size={20} />Twitter</li>
          </ul>
        </section>

        {/* CATEGORÍAS  */}
        <section className="hidden sm:block text-fondo-topMenu">
          <h2 className='font-bold mb-2 text-xl'>CATEGORÍAS</h2>
          <ul className="flex flex-col items-center gap-2">
            <li>Hombres</li>
            <li>Mujeres</li>
            <li>Niños</li>
          </ul>
        </section>

        {/* CONTÁCTENOS  */}
        <section className="text-fondo-topMenu">
          <h2 className='font-bold mb-2 text-xl'>CONTÁCTENOS</h2>
          <ul className="flex flex-col gap-2 ">
            <li className="flex gap-2"><MdEmail size={20} />empresa@gmail.com</li>
            <li className="flex gap-2"><FaLocationDot size={20} />Cra 25 #84 - 24</li>
            <li className="flex gap-2"><BsFillTelephoneFill size={20} />+57 488-58-96</li>
            <li className="flex gap-2"><IoLogoWhatsapp size={20} />369-123-456</li>
          </ul>
        </section>

      </div>

      <div className='flex justify-center bg-fondo-topMenu text-white py-4'>
        <span className={`${titleFont.className} antialiased font-bold `}>Teslo </span>
        <span>| shop © {new Date().getFullYear()} Privacidad & Legal</span>
      </div>
    </footer>
  )
}