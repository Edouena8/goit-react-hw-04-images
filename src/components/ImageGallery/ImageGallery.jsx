import ImageGalleryItem from 'components/ImageGalleryItem';
import { ImgGallery } from './ImageGallery.styled';

const ImageGallery = ({ images }) =>  (
    <ImgGallery>
      {images.map(image => (
        <ImageGalleryItem image={image} key={image.id} />
      ))}
    </ImgGallery>
  );


export default ImageGallery;
