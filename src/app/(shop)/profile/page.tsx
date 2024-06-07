import { auth } from "@/auth.config";
import { Title } from "@/components";
import prisma from "@/lib/prisma";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const session = await auth();

  if (!session?.user) {
    // redirect('/auth/login?returnTo=/perfil');
    redirect("/");
  }


  return (
    <div className="m-auto">
      <Title title="Perfil" />

      <div className="flex gap-4 mb-8">
        <div className="md:w-1/2 flex flex-col items-center justify-center text-center">
          <Image
            className="rounded-full w-[100px] h-[100px] object-cover mb-4"
            src={session.user.image!}
            width={100}
            height={100}
            alt="usuario" />

          <h2 className=" text-3xl md:text-4xl font-bold capitalize">{session.user.name}</h2>
          <span className="text-naranja">{session.user.email}</span>
          <span className="py-8 font-serif font-bold">{session.user.role.toLocaleUpperCase()}</span>



        </div>

        {/* ILUSTRACIÓN  */}
        <div className="w-1/2  hidden md:block">
          <Image
            className="w-full h-[500px]"
            src={"/perfile/perfile.svg"}
            width={400}
            height={600}
            alt="ilustración" />
        </div>
      </div>

    </div>
  );
}
