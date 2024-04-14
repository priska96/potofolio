export const ButtonControl =({children})=> {
return(
        <button style={{
            zIndex: 10,
            background: 'none',
            borderStyle: 'none',
            fontSize: '50px',
            cursor: 'pointer',
            padding: '0',
            margin: '0',
            transition: 'color 0.2s linear',
            ':hover': {
                color: "#f5f5f5",
            },
            ':focus': {
                outline: 'none',
                color: "#f5f5f5",
            },
        }}>
            {children}
        </button>
    )
}