import "./AppButton.css"

function Button({ label, style, onClick }) {
    return (
        <>
            <button onClick={onClick} className={style}> {label} </button>
        </>
    )
}

export default Button