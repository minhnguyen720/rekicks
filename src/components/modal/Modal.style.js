import styled from "styled-components"

export const StyledCreateModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin-left: 50%;
    margin-top: 6%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    width: 50vmin;
    border: 3px solid #000000;
    padding: 3%;
    border-radius: 15px;
    z-index: 100;

    #uploadFile {
        border: none;
        padding: 2% 0;
    }

    textarea {
        resize: none;
        width: 100%;
        height: 15rem;
        padding: 2%;
        border: 1px solid #000000;
        font-weight: 300;
    }

    .submitButtonContainer {
        text-align: center;
        margin-top: 8%;
        .submitBtn {
            position: relative;
            background-color: transparent;
            width: 20vmin;
            padding: 2%;
            font-size: 2vmin;

            &::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                transform-origin: right;
                transform: scaleX(0);
                background-color: #000000;
                transition: transform 250ms ease-in-out;
                z-index: -1;
            }

            &:hover::before {
                transform: scaleX(1);
                transform-origin: left;
            }

            &:hover{
                color: #ffffff
            }
    }
    }

    .buttonContainer {
        text-align: end;
        button {
            background-color: transparent;
            width: 5vmin;
            border: none;

            img {
                width: 4vmin;
                aspect-ratio: 1/1;
            }
        }
    }

    label {
        font-size: 3vmin;
    }
    
    input {
        font-size: 2vmin;
        padding: 1% 2%;
        margin-bottom: 2%;
        border: none;
        font-weight: 300;
        border-bottom: 1px solid #000000;
    }
`

export const Overlay = styled.div`
    position: absolute;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    opacity:0.3;
`