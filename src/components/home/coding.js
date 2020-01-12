import React from 'react';
import styled from 'styled-components';

const CodeContainer = styled.div `
    color: #002535;
    margin: 25px 0 0;
    
    span, div {
        font-size: 14px !important;
        font-weight: normal !important;
    }
`;

const ArrayValue = styled.div`
    margin-left: 40px;

    &:first-child {
        &:before {
            content: "[";
            position: absolute;
            margin-top: -26px;
            margin-left: 70px;
        }
    }

    &:last-child {
        &:after {
            content: "],";
            margin-left: -40px;
        }
        span {
            &:after {
                content: ""
            }
        }
    }

    span {
        &:after {
            content: ","
        }
    }
`;

const ObjectValue = styled.div`
    margin-left: 40px;

    &:after {
        content: ",";
    }

    &:first-child {
        &:before {
            content: "{";
            margin-left: -17px;
            position: absolute;
        }
    }

    &:last-child{
        &:after {
            content: "},";
            position: absolute;
            margin-left: 10px;
        }
    }
`;

function Coding(props) {
    const code = props.codingData.map((item) => {
        const valType = Object.prototype.toString.call(item.codeProperty) == '[object Array]' ?
        item.codeProperty.map((val) => {
            return (
                <ArrayValue>
                    <span>{`"${val}"`}</span><br/>
                </ArrayValue>
            )
        }) :
        (Object.prototype.toString.call(item.codeProperty) == '[object Object]' ?
            Object.keys(item.codeProperty).map((itemKey) => {
                return (
                    <ObjectValue>
                        <span>"{itemKey}":</span> 
                        <span style={{marginLeft: '5px'}}>"{item.codeProperty[itemKey]}"</span>
                    </ObjectValue>
                )
            }) :
            `"${item.codeProperty}",`
        );
        return (
            <section>
                <span>{`"${item.codeKey}":`}</span>
                <span style={{marginLeft: '15px'}}>{valType}</span>
            </section>
        )
    });
    return (
        <CodeContainer>
            <span>{`{`}</span>
            <div style={{padding:'0 25px'}}>
                {code}
            </div>
            <span>{`}`}</span>
        </CodeContainer>
    )
}

export default Coding;