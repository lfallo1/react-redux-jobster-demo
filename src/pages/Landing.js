import { Logo } from '../components'
import Main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = function(){
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className='container page'>
                {/* info */}
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>I'm baby etsy occupy bespoke plaid. YOLO selfies pabst hashtag narwhal gentrify portland tumblr. Godard gentrify fanny pack sustainable. Vape art party yr waistcoat schlitz. Retro tousled umami etsy mixtape meggings. Four loko try-hard echo park man braid. DIY taiyaki yes plz chambray kickstarter truffaut.</p>
                    <button className='btn btn-hero'>Login/Register</button>
                </div>
                <img src={Main} alt='job hunt' className='img main-img' />
            </div>
        </Wrapper>
    );
}

export default Landing;