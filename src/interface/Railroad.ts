import ClassPassage from "./ClassPassage";
import Locale from "./Locale";

interface Railroad {
    railroadSelected: string;
    id: string;
    origin: Array<Locale>;
    classPassage: Array<ClassPassage>;
};

export default Railroad;