import React, { useState } from 'react'
import Breadcrumb from "../Breadcrumb";
import UnitCard from '../UnitCard';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Profile() {
  let path = [{text: 'Home', link: '/'}, {text: 'Profile'}]
  const [tabsActive, setTabsActive] = useState('personal');
  
  return (
    <div className='page'>
      <div className='profile__header pt-5 pb-5 pb-lg-0'>
        <div className='container d-lg-flex justify-content-between'>
          <Breadcrumb path={path} />
          <h2 className='profile__name'>Moamen Sherif Sadeek</h2>
        </div>
      </div>
      <div>
        <div className='profile__img-cont'>
          <img src='/images/Moamen.jpg' className='profile__img' alt='profile' />
        </div>
        <div className='container'>
          <div className='profile__tabs'>
            <ul className='d-flex justify-content-center gap-3 list-unstyled mb-5'>
              <li 
                className={`profile__tabs-item py-2 px-1 px-md-3 ${tabsActive === 'personal' ? 'active' : ''}`}
                onClick={() => setTabsActive('personal')}
              >
                Personal Data
              </li>
              <li 
                className={`profile__tabs-item py-2 px-1 px-md-3 ${tabsActive === 'favourite' ? 'active' : ''}`}
                onClick={() => setTabsActive('favourite')}
              >
                Favourite units
              </li>
              <li 
                className={`profile__tabs-item py-2 px-1 px-md-3 ${tabsActive === 'units' ? 'active' : ''}`}
                onClick={() => setTabsActive('units')}
              >
                My units
              </li>
            </ul>
          </div>
          <div className='profile__tabs-content'>
            <div className={`profile__tabs-content-item ${tabsActive === 'personal' ? 'profile__tab--active' : ''}`}>
              <div className='profile__personal-cont'>
                <div className='profile__personal-item d-flex align-items-center justify-content-between gap-4'>
                  <p className='mb-0'>Name</p>
                  <p className='mb-0'>Moamen Sherif Sadeek</p>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <div className='profile__personal-item d-flex align-items-center justify-content-between gap-4'>
                  <p className='mb-0'>E-mail</p>
                  <p className='mb-0'>moamenyt@gmail.com</p>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
                <div className='profile__personal-item d-flex align-items-center justify-content-between gap-4'>
                  <p className='mb-0'>Passowrd</p>
                  <p className='mb-0'>*********</p>
                  <FontAwesomeIcon icon={faPenToSquare} />
                </div>
              </div>
            </div>
            <div className={`profile__tabs-content-item ${tabsActive === 'favourite' ? 'profile__tab--active' : ''}`}>
              <div className='row'>
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
              </div>
            </div>
            <div className={`profile__tabs-content-item ${tabsActive === 'units' ? 'profile__tab--active' : ''}`}>
              <div className='row'>
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
                <UnitCard
                  img="/images/asset-2.jpeg"
                  price="350000"
                  title="شقه للبيييييع الحق العرض"
                  desc="This unit is very good you have to buy it now!"
                  location="5 Mosaddak, dokki"
                  bedrooms='2'
                  bathrooms='1'
                  size='210'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
