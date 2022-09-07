import './footer.scss'
import { useNavigate } from 'react-router'



const Footer = () => {
    const navigate = useNavigate();

    return (
        <section className="footer">
            <article>
                

            </article>

            <article>
                <ul className='company__links'>
                    <li onClick={() => navigate('/About')}><a>Om oss</a></li>
                    <li onClick={() => navigate('/Adoption')}><a>Att Adoptera</a></li>
                </ul>
            </article>
        </section>
    )
}

export default Footer;
