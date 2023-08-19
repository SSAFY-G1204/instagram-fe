import React, {useState} from 'react';
import styled from '@emotion/styled';

export default function SliderComponent({title, isReset, value, min, max}) {
    const [curValue, setCurValue] = useState(value);

    return (
      <SliderTopContainer>
        <SlideTitleContainer>
          <SliderTitle>{title}</SliderTitle>
          <SliderValueReset onClick={(e) => setCurValue(0)}>
            {isReset && curValue !== 0 ? "재설정" : ""}
          </SliderValueReset>
        </SlideTitleContainer>
        <Container>
          <SliderContainer>
            <SliderRail />
            <SliderFillTrack fill={`${(curValue / (max - min)) * 100}%`} />
            <Slider
              type={"range"}
              value={curValue}
              min={min}
              max={max}
              onChange={(e) => {
                console.log(e.target.value);
                const newValue = parseInt(e.target.value);
                setCurValue(newValue);
                // onChange(newValue);
              }}
            />
          </SliderContainer>
          <SliderValue>{curValue}</SliderValue>
        </Container>
      </SliderTopContainer>
    );
}

const SliderTopContainer = styled.div`
    margin-bottom: 20px;
`;

const SlideTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const SliderTitle = styled.span`
    font-size: 16px;
    font-weight: 400;
`

const SliderValueReset = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: rgb(0, 149, 246);
    cursor: pointer;

    &:hover {
        color: rgb(0, 55, 107);
        font-weight: 600;
    }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SliderContainer = styled.div`
  width: 100%;
  height: 24px;
  position: relative;
`;

const SliderRail = styled.div`
  width: 100%;
  height: 2px;
  border-radius: 2px;
  background-color: lightgray;
  position: absolute;
  top: calc(50% - 2px);
`;

const SliderFillTrack = styled.div`
  width: ${props => props.fill};
  height: 2px;
  border-radius: 2px;
  background-color: black;
  position: absolute;
  top: calc(50% - 2px);
`;

const Slider = styled.input`
  position: absolute;
  top: calc(50% - 6px);
  width: 100%;
  height: 12px;
  -webkit-appearance: none;
  background: transparent;
  margin: 0;
  accent-color: black;

  &:active {
    cursor: grabbing;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

const SliderValue = styled.span`
  font-size: 12px;
  font-weight: 400;
  margin-left: 15px;
`;