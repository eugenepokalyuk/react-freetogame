import React, { FunctionComponent, ReactNode } from 'react';
import { useSwipeable } from 'react-swipeable';
import {
    Wrapper,
    CarouselContainer,
    CarouselSlot,
    SlideButtonContainer,
    SlideButton,
    PREV,
    NEXT
} from './components';
import styled from 'styled-components';
import styles from './Carousel.module.css'
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

type Direction = typeof PREV | typeof NEXT;

interface CarouselState {
    pos: number;
    sliding: boolean;
    dir: Direction;
}

type CarouselAction =
    | { type: Direction, numItems: number }
    | { type: 'stopSliding' };

const getOrder = (index: number, pos: number, numItems: number) => {
    return index - pos < 0 ? numItems - Math.abs(index - pos) : index - pos;
};

const getInitialState = (numItems: number): CarouselState => ({ pos: numItems - 1, sliding: false, dir: NEXT });

const Carousel: FunctionComponent<{ children: ReactNode }> = (props) => {
    const isDesktop = useMediaQuery({
        query: "(min-width: 1224px)"
    });

    const numItems = React.Children.count(props.children);
    const [state, dispatch] = React.useReducer(reducer, getInitialState(numItems));

    const slide = (dir: Direction) => {
        dispatch({ type: dir, numItems });
        setTimeout(() => {
            dispatch({ type: 'stopSliding' });
        }, 50);
    };

    const handlers = useSwipeable({
        onSwipedLeft: () => slide(NEXT),
        onSwipedRight: () => slide(PREV),
        swipeDuration: 500,
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div className={`${styles.fixedWidth} ${styles.mAuto}`} {...handlers}>
            <Wrapper className={`${styles.mt4} ${styles.mb4}`}>
                <CarouselContainer dir={state.dir} sliding={state.sliding}>
                    {React.Children.map(props.children, (child, index) => (
                        <CarouselSlot
                            order={getOrder(index, state.pos, numItems)}
                        >
                            {child}
                        </CarouselSlot>
                    ))}
                </CarouselContainer>
            </Wrapper>
            {isDesktop
                && (
                    <SlideButtonContainer className={styles.fixedWidth}>
                        <SlideButton onClick={() => slide(PREV)} float="left" className={`${styles.button} ${styles.secondary}`}>
                            <FontAwesomeIcon icon={faLongArrowAltLeft} />
                        </SlideButton>
                        <SlideButton onClick={() => slide(NEXT)} float="right" className={`${styles.button} ${styles.secondary}`}>
                            <FontAwesomeIcon icon={faLongArrowAltRight} />
                        </SlideButton>
                    </SlideButtonContainer>
                )
            }
        </div>
    );
};

function reducer(state: CarouselState, action: CarouselAction): CarouselState {
    switch (action.type) {
        case PREV:
            return {
                ...state,
                dir: PREV,
                sliding: true,
                pos: state.pos === 0 ? action.numItems - 1 : state.pos - 1
            };
        case NEXT:
            return {
                ...state,
                dir: NEXT,
                sliding: true,
                pos: state.pos === action.numItems - 1 ? 0 : state.pos + 1
            };
        case 'stopSliding':
            return { ...state, sliding: false };
        default:
            return state;
    }
}

export default Carousel;