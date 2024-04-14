import React from 'react';
import FsLightbox from "fslightbox-react";


export default function LightBoxWrapper(props)  {
    const {isOpen, srcIndex, card, handleClose} = props;

    const [currentImageIndex, setCurrentImageIndex] = React.useState(props.srcIndex ?? 0);
    const [images, setImages] = React.useState([])
    const [toggler,setToggler] = React.useState(false)

    React.useEffect(()=>{
        setCurrentImageIndex(props.srcIndex);
    },[props.srcIndex])

    React.useEffect(()=>{
        setToggler(props.isOpen);
    },[props.isOpen])

    React.useEffect(()=>{
        if(props.card.imgs && props.card.imgs.length > 0) setImages(props.card.imgs);
    },[props.card])

    console.log(isOpen, images, currentImageIndex)

    return (
        <FsLightbox
        toggler={toggler}
        sources={images}
        sourceIndex={currentImageIndex}
        onClose={()=>{setToggler(false);handleClose()}}
    />
    );
};