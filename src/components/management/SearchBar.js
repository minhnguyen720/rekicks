import React from 'react'
import { StyledSearchBar } from './Management.style'
import { ReactComponent as SearchIcon } from '../../assets/imgs/icons/search-icon.svg';

export default function SearchBar(props) {
    return (
        <StyledSearchBar isMobile={props.isMobile} action={props.url} method={props.method}>
            <button>
                <SearchIcon fill={props.fill} />
            </button>
            <input autoComplete="off" placeholder="Product ID" type="text" id="productId" name="productId" />
        </StyledSearchBar>
    )
} 
