import './Footer.css'
import { avito, doorIco, email } from '../assets';


function Footer(){
    return(
        <div className='footer'>
            <div className='avito'>
                <img src={avito} alt="" className='avito-img' />
                <a href="https://www.avito.ru/user/4b86ce2f65fbad6132a94912f543feee/profile/all?id=2825941538&src=item&page_from=from_item_card&iid=2825941538&sellerId=4b86ce2f65fbad6132a94912f543feee" className='avito-txt'>Мы на Авито</a>
            </div>
            <div className='logotype'>
                <img src={doorIco} alt="" className='logotype-img' />
            </div>
            <div className='email'>
                <img src={email} alt="" className='email-img'/>
                <p className='email-txt'>dverivariant2@yandex.ru</p>
            </div>
        </div>
    )
}

export default Footer;