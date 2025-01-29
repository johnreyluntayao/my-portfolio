import { phoneImages, ImageItem } from '@/lib/imports';


const ImageGrid = ({ id }: { id: number }) => {
  return (
    <section className={`${id === 5 ? 'grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-center justify-center min-h-screen my-16 gap-4 p-4 max-w-max' : 'hidden'}`}>
      {phoneImages.map((p, index) => (
        <ImageItem key={index} src={p.src} index={index} />
      ))}
    </section>
  );
};

export default ImageGrid;