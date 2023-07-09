import './Time.css'

const Time = (props) => {
    const CSSFundo = {backgroundColor: props.corSecundaria}
    const CSSBorda ={borderColor: props.corPrimaria}
    return (
        <section className='time' style={CSSFundo}>
            <h3 style={CSSBorda}>{props.nome}</h3>
        </section>
    )
}

export default Time