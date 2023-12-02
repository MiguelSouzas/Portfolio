import './title.css'

const Title = ({ labelFirstWord, labelSecondWord }) => {
    return (
        <>
            <h1 className="title">
                {
                (labelFirstWord && labelSecondWord)
                    ?
                        (
                            <>
                            <span className='first-word'>{labelFirstWord} </span>
                            <span className='second-word'> {labelSecondWord}</span>
                            </>
                        )
                    :
                        <span className='first-word'>{labelFirstWord}</span>
                }
            </h1>
        </>
    )
}

export default Title