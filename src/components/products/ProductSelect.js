import React from 'react';
import { ProductSelect as StyledProductSelect } from './Product.style';

export default function ProductSelect() {
    return (
        <StyledProductSelect>
            <option value="40">40</option>
            <option value="41">41</option>
            <option value="42">42</option>
            <option value="43">43</option>
            <option value="44">44</option>
            <option value="45">45</option>
        </StyledProductSelect>
    );
}