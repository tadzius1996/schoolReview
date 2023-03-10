import Image from 'next/image';
import { urlFor } from '../sanity';

const CustomImage = ({ identifier, image }) => {
  const imageUrl = urlFor(image).auto('format').url();

  return (
    <div className={identifier === 'main-image' ? 'main-image' : 'image'}>
      <Image src={imageUrl} width={400} height={400} alt={image.alt} />
    </div>
  );
};

export default CustomImage;