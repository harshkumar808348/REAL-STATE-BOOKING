import React from 'react';
import './properties.css';
import SearchBar from '../../components/searchbar/searchbar';
import useProperties from '../../hooks/useProperties';
import { PuffLoader } from 'react-spinners';
import PropertyCard from '../../components/PropertyCard/Propertycard';

const Properties = () => {
  const { propertiesData, isError, isLoading } = useProperties();

  if (isError) {
    return (
      <div className='wrapper'>
        <span>Error while fetching the data</span>
      </div>
    );
  }

  if (isLoading || !propertiesData) {
    return (
      <div className='wrapper flexCenter' style={{ height: '60vh' }}>
        <PuffLoader
          height='80'
          width='80'
          radius='1'
          color='#4066ff'
          aria-label='puff-loading'
        />
      </div>
    );
  }

  return (
    <div className='wrapper'>
      <div className='flexColCenter paddings innerWidth properties-container'>
        <SearchBar />
        <div className="paddings flexCenter properties">
          {propertiesData.map((card, i) => (
            <PropertyCard card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Properties;
