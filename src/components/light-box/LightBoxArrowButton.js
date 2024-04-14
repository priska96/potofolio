import * as React from 'react';
import PropTypes from 'prop-types';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { useTransition } from '@react-spring/web';
import {ButtonControl} from "./LightBoxButtonControl";

const ArrowButton = ({ className, disabled, onClick, position , buttonStyle}) => {
    const transitions = useTransition(!disabled, {
        enter: { opacity: 1 },
        from: { opacity: 0 },
        leave: { opacity: 0 },
    });

    return transitions(
        (props, item) =>
            item && (
                <div className={className} style={{zIndex: 999, ...props}}>
                    <ButtonControl 
                    style={{
                        position:"absolute", 
                        top: 0, 
                        bottom: 0, 
                        left: (position === 'left' ? 0 : 'unset'), 
                        right: (position === 'right' ? 0 : 'unset'),
                        ...buttonStyle
                        }} 
                    onClick={onClick} 
                    position={position} 
                    type="button"
                    >
                        {position === 'left' && <IoIosArrowBack />}
                        {position === 'right' && <IoIosArrowForward />}
                    </ButtonControl>
                </div>
            )
    );
};

ArrowButton.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['left', 'right']).isRequired,
};

ArrowButton.defaultProps = {
    disabled: false,
};

export default ArrowButton;
