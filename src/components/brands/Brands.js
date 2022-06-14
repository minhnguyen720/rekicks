import React from 'react'
import { BrandsLogo } from '../../assets/Dummy';
import { BrandImg, BrandsContainer } from './Brands.style';

export default function Brands() {
    return(
        <BrandsContainer>
            {
                BrandsLogo.map((logo,index) => {
                    return(
                        <BrandImg src={logo.src} alt=''/>
                    );
                })
            }
        </BrandsContainer>
    );
}