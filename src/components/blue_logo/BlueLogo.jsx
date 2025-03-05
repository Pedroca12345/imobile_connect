import blueLogo from '../../assets/imgs/logo_azulada.png';
import './BlueLogo.css'

export function BlueLogo() {
    return (
        <div className="logo">

            <div className="logo_image">
                <img src={blueLogo} alt="Logo" />
            </div>

            <div className="logo_text">
                <h4>ImobiConnect</h4>
            </div>

        </div>
    )
}