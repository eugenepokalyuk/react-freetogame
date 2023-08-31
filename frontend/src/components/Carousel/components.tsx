import styled from 'styled-components';

export const Paper = styled.div`
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  padding: 25px;
`;

export const NEXT = 'NEXT';
export const PREV = 'PREV';

export const Item = styled.div<{ img: string }>`
  text-align: center;
  padding: 100px;
  background-image: ${(props) => `url(${props.img})`};
  background-size: cover;
  border-radius: 8px;
`;

export const CarouselContainer = styled.div<{ sliding: boolean }>`
  display: flex;
  transition: ${(props) => (props.sliding ? "none" : "transform 1s ease")};
  transform: ${(props) => {
        if (!props.sliding) return "translateX(calc(-80% - 20px))";
        if (props.dir === PREV) return "translateX(calc(2 * (-80% - 20px)))";
        return "translateX(0%)";
    }};
`;

export const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const CarouselSlot = styled.div<{ order: number }>`
  flex: 1 0 100%;
  flex-basis: 80%;
  margin-right: 20px;
  order: ${(props) => props.order};
`;

export const SlideButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

export const SlideButton = styled.button<{ float: 'left' | 'right' }>`
`;

export const PatternBox = styled.div`
  border: 2px solid black;
  width: 60%;
  margin: 20px auto;
  padding: 30px 20px;
  white-space: pre-line;
`;

export const D = styled.span`
  padding: 3px;
`;