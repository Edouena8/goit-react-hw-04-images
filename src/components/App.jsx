import { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import {fetchImages} from "services/images-api";
import Searchbar from "./Searchbar";
import ImageGallery from "./ImageGallery";
import Loader from "./Loader";
import Button from "./Button";
import { AppWrap } from "./App.styled";

export default function App() {
  const [imageName, setImageName] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showBtn, setShowBtn] = useState(false);

  const handleFormSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
    setLoading(false);
    setError(null);
    setShowBtn(false);
  };

  const handleLoadMoreBtnClick = () => {
    setPage(prevPage => prevPage + 1);
    setShowBtn(false);
    setLoading(true);
  };

  useEffect(() => {
    if (!imageName) {
      return;
    }
    setLoading(true);

    fetchImages(imageName, page, perPage)
      .then(({ hits, totalHits }) => {
        if (!hits.length) {
          toast.error(`${imageName} not found`);
          return;
        }

        setImages(prevImages => [...prevImages, ...hits]);
        setShowBtn(page < Math.ceil(totalHits / 12));
      })
      .catch(error => {
        setError(error);
        setShowBtn(false);
      })
      .finally(() => setLoading(false));
  }, [imageName, page, perPage]);

  return (
    <AppWrap>
      <Searchbar onSubmit={handleFormSubmit} />
      {!imageName && <p>Enter name of the pictures.</p>}
      {error && <h2>{error.message}</h2>}
      {images.length > 0 && <ImageGallery images={images} />}
      {showBtn && <Button onClick={handleLoadMoreBtnClick} />}
      {loading && <Loader />}
      <ToastContainer autoClose={3000} theme="dark" />
    </AppWrap>
  );
};




