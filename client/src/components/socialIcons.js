import {Link} from 'react-router-dom';
import {
    BsFacebook,
    BsInstagram,
    BsWhatsapp,
    BsTelegram
} from 'react-icons/bs';

export function SocialIcons(){
    return(
    <div className="socialColumn socialIcons">
        <Link to="#" title="Facebook"><BsFacebook  className='icon facebook'/></Link>
        <Link to="#" title="Instagram"><BsInstagram  className='icon instagram'/></Link>
        <Link to="#" title="Whatsapp"><BsWhatsapp className='icon whatsapp'/></Link>
        <Link to="#" title="Telegram"><BsTelegram className='icon telegram'/></Link>
      </div>
    )
};