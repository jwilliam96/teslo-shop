

// import Link from "next/link";
// import clsx from "clsx";
// import { useSession } from "next-auth/react";
// import {
//   IoCloseOutline,
//   IoLogInOutline,
//   IoLogOutOutline,
//   IoPeopleOutline,
//   IoPersonOutline,
//   IoSearchOutline,
//   IoShirtOutline,
//   IoTicketOutline,
// } from "react-icons/io5";

// import { useUIStore } from "@/store";
// import { logout } from "@/actions";

// export const Sidebar = () => {
//   const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
//   const closeMenu = useUIStore((state) => state.closeSideMenu);

//   const { data: session } = useSession();


//   const isAuthenticated = !!session?.user;
//   const isAdmin = session?.user.role === "admin";

//   return (
//     <div>
//       {/* Background black */}
//       {isSideMenuOpen && (
//         <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
//       )}

//       {/* Blur */}
//       {isSideMenuOpen && (
//         <div
//           onClick={closeMenu}
//           className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
//         />
//       )}

//       {/* SideMenu */}
//       <nav
//         className={clsx(
//           "fixed p-5 right-0 top-0 w-4/5 sm:w-[500px] h-screen bg-white z-30 shadow-2xl transform transition-all duration-300",
//           {
//             "translate-x-full": !isSideMenuOpen,
//           }
//         )}
//       >
//         <IoCloseOutline
//           size={50}
//           className="absolute top-5 right-5 cursor-pointer"
//           onClick={() => closeMenu()}
//         />

//         {/* Input */}
//         <div className="relative mt-14">
//           <IoSearchOutline size={20} className="absolute top-2 left-2" />
//           <input
//             type="text"
//             placeholder="Buscar"
//             className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-blue-500"
//           />
//         </div>

//         {/* Menú */}

//         {isAuthenticated && (
//           <>
//             <Link
//               href="/profile"
//               onClick={() => closeMenu()}
//               className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             >
//               <IoPersonOutline size={30} />
//               <span className="ml-3 text-xl">Perfil</span>
//             </Link>

//             <Link
//               href="/orders"
//               onClick={() => closeMenu()}
//               className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             >
//               <IoTicketOutline size={30} />
//               <span className="ml-3 text-xl">Ordenes</span>
//             </Link>
//           </>
//         )}

//         {isAuthenticated && (
//           <button
//             className="flex w-full items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             onClick={() => logout()}
//           >
//             <IoLogOutOutline size={30} />
//             <span className="ml-3 text-xl">Salir</span>
//           </button>
//         )}

//         {!isAuthenticated && (
//           <Link
//             href="/auth/login"
//             className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             onClick={() => closeMenu()}
//           >
//             <IoLogInOutline size={30} />
//             <span className="ml-3 text-xl">Ingresar</span>
//           </Link>
//         )}

//         {isAdmin && (
//           <>
//             {/* Line Separator */}
//             <div className="w-full h-px bg-gray-200 my-10" />

//             <Link
//               href="/admin/products"
//               onClick={() => closeMenu()}
//               className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             >
//               <IoShirtOutline size={30} />
//               <span className="ml-3 text-xl">Productos</span>
//             </Link>

//             <Link
//               href="/admin/orders"
//               onClick={() => closeMenu()}
//               className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             >
//               <IoTicketOutline size={30} />
//               <span className="ml-3 text-xl">Ordenes</span>
//             </Link>

//             <Link
//               href="/admin/users"
//               onClick={() => closeMenu()}
//               className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
//             >
//               <IoPeopleOutline size={30} />
//               <span className="ml-3 text-xl">Usuarios</span>
//             </Link>
//           </>
//         )}
//       </nav>
//     </div>
//   );
// };



import { auth } from "@/auth.config"
import { IsUser } from "./isUser/IsUser"
import { IsAdmin } from "./isAdmin/IsAdmin"
import ButtonLogout from "./ButtonLogout"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline } from "react-icons/io5"
import clsx from "clsx"
import BackgroundBlack from "./BackgroundBlack"
import CloseMenu from "./CloseMenu"
import Image from "next/image"
import { titleSidebar } from "@/config/fonts"



export async function Sidebar() {

  const session = await auth()


  return (
    <div>

      <BackgroundBlack />

      <nav className={clsx(
        " fixed p-5 right-0 top-0 w-4/5 sm:w-[500px] h-screen bg-white z-50 shadow-2xl transform transition-all duration-300 translate-x-full dark:translate-x-0"
      )}>

        <CloseMenu />

        <div className={clsx("mt-20",
          session?.user ? "hidden" : "block"
        )}>
          <h2 className={`${titleSidebar.className}  mb-10 font-bold text-4xl text-center text-naranja drop-shadow-2xl`}>COMIENZA A COMPRAR</h2>

          <Image
            className=" mx-auto"
            src={"/sidebar/shoping.svg"}
            width={400}
            height={500}
            alt="compras" />
        </div>

        {
          session?.user && (
            <div className=" mt-10 flex flex-col items-center gap-2 ">
              <Image className="rounded-full w-[70px] " src={`${session?.user.image}`} width={400} height={400} alt="perfile" />
              <h3 className="font-bold">{session.user.name.toLocaleUpperCase()}</h3>
            </div>
          )
        }

        {/* USER  */}
        {session?.user && <IsUser />}

        {/* ADMIN  */}
        {session?.user.role === "admin" && <IsAdmin />}

        {/* LOGOUT - LOGIN */}
        {
          session?.user
            ?
            (<ButtonLogout />)
            :
            (<Link
              href="/auth/login"
              className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"
            >
              <IoLogInOutline size={30} />
              <span className="ml-3 text-xl">Ingresar</span>
            </Link>)
        }
      </nav>


    </div>
  )
}
