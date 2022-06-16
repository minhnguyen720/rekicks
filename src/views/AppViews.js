import React from 'react'
import ProductPackage from "../components/products/ProductPackage";
import { DummyData } from "../assets/Dummy";
import BackButton from "../components/backButton/BackButton";
import StyledCarousel from '../components/hero/HeroSection';
import Brands from '../components/brands/Brands';
import DiscoverField from '../components/discoverField/DiscoverField';
import { product1 } from '../assets/imgs/Image';
import { Header, ManagementContainer, ProductContainer, InnerContainer, Sidemenu } from '../components/management/Management.style';
import ProductDetail from '../components/management/ProductDetail';

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

export function Management() {
    return (
        <ManagementContainer>
            <Header>Management</Header>
            <InnerContainer>
                <Sidemenu>
                    <ul>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                        <li>hello</li>
                    </ul>
                </Sidemenu>
                <ProductContainer>
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                    <ProductDetail
                        src={product1}
                        productId={"12121212"}
                        productName={"Air Jordan 1"}
                        productCapacity={999}
                        availSize={"41,42,43,44,45"}
                    />
                </ProductContainer>
            </InnerContainer>
        </ManagementContainer>
    );
}