import useFetch from '../../hooks/useFetch';
import './propertyList.css';

const PropertyList = () => {
  const { data, loading, error } = useFetch('/hotels/countbytype');
  console.log(data);
  const images = [
    'https://www.pexels.com/photo/architecture-blue-water-buildings-business-261102/',
    'https://www.pexels.com/photo/architecture-blue-water-buildings-business-261102/',
    'https://www.pexels.com/photo/architecture-blue-water-buildings-business-261102/',
    'https://www.pexels.com/photo/architecture-blue-water-buildings-business-261102/',
  ];

  return (
    <div className='pList'>
      {loading ? (
        'loading...'
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className='pListItem'>
                <img src={img} alt='' className='pListImg' />
                <div className='pListTitles'>
                  <h1>Hotel</h1>
                  <h2>112</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
