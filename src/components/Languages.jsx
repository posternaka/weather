import { useDispatch, useSelector } from 'react-redux';
import { setLang } from '../redux/actions/setLanguageAction'


function Languages() {
    const dispatch = useDispatch(); 
    const lang = useSelector(store => store.lang);

    return (
    <div className="changing__language">
        {
            lang === 'en'
            ? <button onClick={() => dispatch(setLang('ru'))}>RU</button>
            : <button onClick={() => dispatch(setLang('en'))}>EN</button>
        }
    </div>
    )
}

export default Languages;