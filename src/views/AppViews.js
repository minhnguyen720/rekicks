import React, { useEffect, useState } from 'react'
import ProductPackage from "../components/products/ProductPackage";
import { DummyData } from "../assets/Dummy";
import BackButton from "../components/backButton/BackButton";
import StyledCarousel from '../components/hero/HeroSection';
import Brands from '../components/brands/Brands';
import DiscoverField from '../components/discoverField/DiscoverField';
import { Header, ManagementContainer, ProductContainer, InnerContainer } from '../components/management/Management.style';
import ProductDetail from '../components/management/ProductDetail';
import Sidemenu from '../components/management/Sidemenu';
import CreateModal from '../components/modal/CreateModal';
import { ReactComponent as SearchIcon } from '../assets/imgs/icons/search-icon.svg'
import { sidebarIcon } from '../assets/imgs/Image';

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
    const [isOpen, setOpenModal] = useState(false);
    const [isMobile, setMobile] = useState(false);
    const [toggle, setToggle] = useState(false);

    const openModal = () => {
        setOpenModal(true);
    }

    const closeModal = () => {
        setOpenModal(false);
    }

    const openMenu = () => {
        setMobile(!isMobile);
    }

    const handleDelete = (e) => {
        const targetId = e.target.id;

        fetch(`http://localhost:8080/api/item/${targetId}`, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' }
        })
        document.location.reload();
    }
    
    const [data, setData] = useState([]);
    const getDataFromDB = async () => {
        const response = await fetch('http://localhost:8080/api/item');
        const dataFromDB = await response.json();
        setData(dataFromDB);
    }

    useEffect(() => {
        getDataFromDB();
    }, [toggle]);

    return (
        <>
            <ManagementContainer>
                <Header>
                    <button onClick={openMenu} className="sideMenuBtn">
                        <img src={sidebarIcon} alt="trigger menu"></img>
                    </button>
                    <p>Management</p>
                </Header>
                <InnerContainer>
                    <Sidemenu
                        isMobile={isMobile}
                        openModal={openModal}
                        fill={isMobile ? "white" : "black"}
                    />
                    <ProductContainer>
                        {data.map((item) => {
                            return (
                                <ProductDetail
                                    handleDelete = {handleDelete}
                                    key={item.id}
                                    productBrandId={item.brandId}
                                    productId={item.id}
                                    productCapacity={item.capacity}
                                    productName={item.name}
                                    productPrice={item.price}
                                    productDesc={item.description}
                                />
                            )
                        })}
                    </ProductContainer>
                </InnerContainer>
            </ManagementContainer>
            <CreateModal closeModal={closeModal} isOpen={isOpen} btnLabel="Create" method="POST"/>
        </>
    );
}