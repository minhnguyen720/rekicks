import styled from "styled-components";

export const IconContainer = styled.div`
    svg {
            position: absolute;
            z-index: 10;
            aspect-ratio: 1/1;
            width: 30px;
            cursor: pointer;
            opacity: 0;
            top: 5.7%;
            left: 1rem;
            z-index: 11;
            color: #ffffff;

            transition: transform 200ms ease-in;
            transform: rotate(${(props) => props.rotate ? "90" : undefined}deg);

            @media screen and (max-width: 425px) {
                & {
                    opacity: 1;
                }
            }
        }
`