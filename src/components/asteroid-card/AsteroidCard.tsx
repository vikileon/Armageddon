import { AsteroidCardButton } from "./AsteroidCardButton";
import { AsteroidCardData } from "./AsteroidCardData";
import { AsteroidCardImage } from "./AsteroidCardImage";
import style from "./card.module.css"

interface AsteroidCardProps {
    isDangerous: boolean;
    name: string;
    date: string;
    radius: number;
    isKilometers: boolean;
    distanceKm: number;
    distanceMoon: number;
}

export const AsteroidCard = (props: AsteroidCardProps) => {

    const {isDangerous} = props;

    return <div className={`${style.card} ${isDangerous ? style.dangerous : ''}`}>
        <AsteroidCardImage/>
        <AsteroidCardData/>
        <AsteroidCardButton/>
    </div>
}