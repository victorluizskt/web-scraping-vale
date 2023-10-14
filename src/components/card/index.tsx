import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import railroads from '../../utils/railroadsList';
import SimpleSelect from '../simpleSelect';
import { handleChange } from '../../utils/functions';
import Railroad from '../../interface/Railroad';
import './styles.css';
import RadioButton from '../radioButton';
import DatePicker from '../datePicker';
import ButtonPlus from '../buttonPlus';

const initialRailroad: Railroad = {
  railroadSelected: '',
  id: '',
  origin: [],
  originSelected: '',
  destiny: [],
  destinySelected: '',
  classPassage: [],
  classPassageSelected: '',
  numberOfPassengers: 0,
};

export default function BasicCard() {
  const [railroad, setRailroad] = useState(initialRailroad);
  const [going, setGoing] = useState(false);
  const [quantity, setQuantity] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      handleChange({ setRailroad, initialState: railroad  });
    };

    fetchData();
  }, [railroad.railroadSelected]);

  return (
    <Card sx={{ minWidth: 275, width: 620, height: 400 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Automatize sua busca por passagens
        </Typography>
        {/* create new component Form */}
        <SimpleSelect 
          titleLabel="Ferrovia"
          array={railroads}
          setItem={setRailroad}
          state={railroad}
          valueSelect={railroad.railroadSelected}
          key={railroad.id}
          disabled={railroads.length === 0}
          keyRender='value'
          keySave='railroadSelected'
        />
        <div style={{ display: 'flex', marginTop: '2px'}}>
          <SimpleSelect 
            titleLabel="Origem"
            array={railroad.origin}
            setItem={setRailroad}
            state={railroad}
            valueSelect={railroad.originSelected}
            key={railroad.id}
            disabled={railroad.origin.length === 0}
            keyRender='descricaoDetalhada'
            keySave='originSelected'
          />
          <SimpleSelect 
            titleLabel="Destino"
            array={railroad.destiny}
            setItem={setRailroad}
            state={railroad}
            valueSelect={railroad.destinySelected}
            key={railroad.id}
            disabled={railroad.classPassage.length === 0}
            keyRender='descricaoDetalhada'
            keySave='destinySelected'
          />
        </div>
        <RadioButton 
          setGoing={setGoing}
        />
        <DatePicker going={going} />
        <div style={{ 
            display: 'grid', 
            marginTop: '14px', 
            alignItems: 'center', 
            flexDirection: 'row', 
            gridTemplateColumns: '65% 35%'
        }}>
          <SimpleSelect 
              titleLabel="Classe"
              array={railroad.classPassage}
              setItem={setRailroad}
              state={railroad}
              valueSelect={railroad.classPassageSelected}
              key={railroad.id}
              disabled={railroad.destiny.length === 0}
              keyRender='nome'
              keySave='classPassageSelected'
            />
            <ButtonPlus 
              quantity={quantity} 
              setQuantity={setQuantity} 
            />
        </div>
      </CardContent>
    </Card>
  );
}
