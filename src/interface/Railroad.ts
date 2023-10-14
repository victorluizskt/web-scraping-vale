import ClassPassage from "./ClassPassage";
import Locale from "./Locale";

interface Railroad {
    railroadSelected: string;
    id: string;
    origin: Array<Locale>;
    originSelected: string;
    destiny: Array<Locale>;
    destinySelected: string;
    classPassage: Array<ClassPassage>;
    classPassageSelected: string;
    numberOfPassengers: number;
};

export default Railroad;