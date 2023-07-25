import { ThreeDots } from 'react-loader-spinner';

const Loader = () => {
    return (
      <div>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3f51b5"
          ariaLabel="three-dots-loading"
          wrapperStyle={{margin: '0 auto'}}
          visible={true}
        />
      </div>
    );
};

export default Loader;