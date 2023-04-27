import './AddPopUp.scss';
const linksAddPopUp = [
    { href: '', title: '' }
]

function AddPopUp({ setAddPopUp }) {

    return (
        <div className="add-pop-up">
            <div className='links'>
                <p>Реклама</p>
                {linksAddPopUp.map((el) =>
                    <a href={el.href} target='_blank' rel='link' title={el.title}>{el.title}</a>)}
            </div>
            <div onClick={() => setAddPopUp(false)} className='x-block'>X</div>
        </div >
    )
}

export default AddPopUp