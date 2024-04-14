import * as React from 'react';

export const Jumbotron = React.forwardRef(function Jumbotron({className, id, children}, ref){
    return(
        <div id={id} ref={ref} className={className} 
        style={{
            padding: "2rem 1rem",
            marginBottom: "2rem",
            borderRadius: "0.3rem",
            "@media(minWidth:576px)":{
                padding: "4rem 2rem"
            }
        }}>
            {children}
        </div>
    )
})