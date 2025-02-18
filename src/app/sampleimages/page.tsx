import Image from 'next/image';

const SampleimagesPage = () => {
  const images = [
    { src: '/images/desert.jpg', alt: 'desert' },
    { src: '/images/nevada.jpg', alt: 'nevada' },
    { src: '/images/sunflowers.jpg', alt: 'sunflowers' },
    { src: '/images/trees.jpg', alt: 'trees' },
  ];
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {images.map((image, index) => (
        <div className="relative h-64 w-full overflow-hidden" key={index}>
          {/* ↓画像が表示されない */}
          {/* <Image
            alt={image.alt}
            fill
            sizes="300px"
            src={image.src}
            style={{
              objectFit: 'contain',
            }}
          /> */}
          {/* ↓コードその1 */}
          {/* <Image
            alt={image.alt}
            className="size-full h-auto object-contain"
            height={300} // 16:9 なら 281 付近がベター
            src={image.src}
            width={500} // 適切な幅を指定
          /> */}
          {/* ↓コードその2 */}
          <Image
            alt={image.alt}
            height={300} // 適切な値
            layout="intrinsic" // 自動調整
            src={image.src}
            width={500} // 適切な幅を指定
          />
        </div>
      ))}
    </div>
  );
};

export default SampleimagesPage;
