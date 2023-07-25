import { ThreeDots } from 'react-loader-spinner';
import { LoaderWraper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWraper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#3f51b5"
        ariaLabel="three-dots-loading"
        visible={true}
      />
    </LoaderWraper>
  );
};

export default Loader;
