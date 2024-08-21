import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: 'rgb(55,171,249)',
        backgroundColor: 'radial-gradient(circle at top left, rgba(55,171,249,1) 0%, rgba(186,224,253,1) 75%, rgba(255,255,255,1) 100%)',


      }}
    >

      <div className={`${id === 6} && 'flex justify-center h-full`}>
        <div className="w-full h-full absolute">
          {img && (
           <img 
            src={img}
            alt={img}
            className={cn(imgClassName, 'object-cover object-center')}
           />
          )}
        </div>

        <div className={`abolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
            {spareImg && (
              <img 
              src={spareImg}
              alt={spareImg}
              className={'object-cover object-center w-full h-full'}
             />
            )}
        </div>

      </div>

      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
