import mascotTop from "../public/mascotTop.png";
import mascotEyesHL from "../public/mascotEyesHL.png";
import mascotEyes from "../public/mascotEyes.png";
import mascotBlush from "../public/mascotBlush.png";
import { MascotColor, MascotCStroke, MascotShadow } from "./MascotLayer";


const Mascot = () => {
    return (
        <div className="mascot">
            <img src={mascotTop} alt="" style={{ zIndex: 2 }} />
            <img src={mascotEyesHL} alt="" style={{ zIndex: 6 }} />
            <img src={mascotEyes} alt="" style={{ zIndex: 5 }} />
            <img src={mascotBlush} alt="" style={{ zIndex: 4}} />
            <MascotCStroke fill="#79102a" zIndex={3} />
            <MascotShadow fill="#79102a" zIndex={3} />
            <MascotColor fill="#d62436" zIndex={1} />
        </div>
    );
};

export default Mascot;
