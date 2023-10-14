import Railroad from '../interface/Railroad';
import { getClassPassageSearch, getRailwayLocations } from '../services/railroad';
import railroads from './railroadsList';

interface HandleChange {
    setRailroad: React.Dispatch<React.SetStateAction<Railroad>>;
    initialState: Railroad;
};

const handleChange = async ({ setRailroad, initialState }: HandleChange) => {
    const idWagon = railroads.find((railroad) => railroad.value === initialState.railroadSelected)?.id;
    if (idWagon) {
      const response = await getRailwayLocations(idWagon);
      const classPassage = await getClassPassageSearch(idWagon);
      setRailroad({
        ...initialState,
        origin: response.message.locaisFerroviarios,
        destiny: response.message.locaisFerroviarios,
        classPassage: classPassage.message.classesPassagem,
      });
    };
}


export { handleChange };