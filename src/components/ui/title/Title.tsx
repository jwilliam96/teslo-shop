import { titleFont } from '@/config/fonts';

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string
}



export const Title = ({ title, subtitle, className, id }: Props) => {
  return (
    <div className={` ${className} p-8`} id={id}>
      <h1 className={`${titleFont.className} antialiased text-2xl sm:text-4xl font-semibold md:mt-7 `}>
        {title}
      </h1>

      {
        subtitle && (
          <p className="text-xl mb-5">{subtitle}</p>
        )
      }

    </div>
  )
}