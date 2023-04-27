import './PopUpMore.scss';

function PopUpMore({ moreLinks }) {

    return (
        <div className="pop-up-more">
            {!!moreLinks.lenght ? moreLinks.map((el) => (
                <a href=''>{el.title}</a>
            )) : <p>no links</p>}
        </div>
    )
}

export default PopUpMore