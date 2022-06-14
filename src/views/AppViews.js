import React from 'react'
import ProductPackage from "../components/products/ProductPackage";
import { DummyData } from "../assets/Dummy";
import BackButton from "../components/backButton/BackButton";
import StyledCarousel from '../components/carousel/Carousel';
import Brands from '../components/brands/Brands';
import DiscoverField from '../components/discoverField/DiscoverField';

export function NotFoundView() {
    return (
        <main style={{ padding: "1rem" }}>
            <p>ERROR: PAGE NOT FOUND</p>
        </main>
    )
}

export function Products() {
    return (
        <>
            <BackButton />
            <ProductPackage
                src={DummyData[0].src}
                name={DummyData[0].name}
                price={DummyData[0].price}
            />
        </>
    );
}

export function Home() {
    return (
        <>
            <StyledCarousel />
            <Brands />
            <DiscoverField />
        </>
    );
}