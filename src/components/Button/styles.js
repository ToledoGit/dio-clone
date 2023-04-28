import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    font-family: 'Open Sans';
    background:#565656;
    border-radius:22px;
    border:1px solid;
    border-color:#000000;
    position: relative;

    color:#FFFF;
    padding: 2px 12px;
    font-size:18px;
    line-height: 25px;
    font-weight:400px;
    min-width: 120px;
    width: 100%;

    &:hover {
        opacity: 0.8;
        cursor:pointer;
    }

    ${({variant}) => variant !== "primary" && css`
        font-family: 'Open Sans';
        min-width: 167px;
        height: 33px;
        font-size:16px;
        line-height:25px;
        font-weight:400;
        margin-top:10px;

        background: #E4105D;

        &:hover {
            opacity: 0.6;
            cursor:pointer;
        }

        &::after {
            content: '';
            position: absolute;
            border: 1px solid #E4105D;
            top: -6px;
            left: -6px;
            width: calc(100% + 10px);
            height: calc(100% + 10px);
            border-radius: 22px;
        }


    `}
`