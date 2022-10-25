

export const Button = ({lable, disabled= false, click= () => null })=> {
    return <button disabled={disabled} onClick={click} style={{color:'rgb(70, 130, 199)'}}>
        {lable}
        </button>
    }