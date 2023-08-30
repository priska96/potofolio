import React from 'react';
import Lightbox from 'react-spring-lightbox';
import styled from "styled-components";
import ArrowButton from "./LightBoxArrowButton";

const StyledLightboxArrowButton = styled(ArrowButton)`
    z-index: 10;
    button {
        font-size: 25px;
    }
`;


export default function LightBoxWrapper(props)  {
    const [currentImageIndex, setCurrentImageIndex] = React.useState(props.srcIndex);
    const [images, setImages] = React.useState([])

    React.useEffect(()=>{
        setCurrentImageIndex(props.srcIndex);
    },[props.srcIndex])

    React.useEffect(()=>{
        if(props.card.imgs && props.card.imgs.length > 0) setImages(getImages(props.card.imgs));
    },[props.card])

    const getImages = (images) => {
        return images.map(img => {
                return {src: img, loading: 'lazy', alt: '', caption: ''}
            }
        )
    }
    const gotoPrevious = () =>
        currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1);

    const gotoNext = () =>
        currentImageIndex + 1 < images.length &&
        setCurrentImageIndex(currentImageIndex + 1);

    const canPrev = currentImageIndex > 0;
    const canNext = currentImageIndex + 1 < images.length;

    return (
        <Lightbox
            isOpen={props.isOpen}
            onPrev={gotoPrevious}
            onNext={gotoNext}
            images={images}
            currentIndex={currentImageIndex}
            /* Add your own UI */
            // renderHeader={() => (<CustomHeader />)}
            // renderFooter={() => (<CustomFooter />)}
            renderNextButton={() => (
                <StyledLightboxArrowButton
                    disabled={!canNext}
                    onClick={gotoNext}
                    position="right"
                />
            )}
            renderPrevButton={() => (
                <StyledLightboxArrowButton
                    disabled={!canPrev}
                    onClick={gotoPrevious}
                    position="left"
                />
            )}
            // renderImageOverlay={() => (<ImageOverlayComponent >)}

            /* Add styling */
            // className="cool-class"
            style={{ background: "rgba(0,0,0,0.4)" }}

            /* Handle closing */
            onClose={props.handleClose}

            /* Use single or double click to zoom */
            singleClickToZoom

            /* react-spring config for open/close animation */
            pageTransitionConfig={{
              from: { transform: "scale(0.75)", opacity: 0 },
              enter: { transform: "scale(1)", opacity: 1 },
              leave: { transform: "scale(0.75)", opacity: 0 },
              config: { mass: 1, tension: 320, friction: 32 }
            }}
        />
    );
};