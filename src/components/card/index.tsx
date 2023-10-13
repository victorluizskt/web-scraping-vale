import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectSmall from '../select';
import railroads from '../../utils/railroadsList';
import './styles.css';
import SimpleSelect from '../simpleSelect';
import { handleChange } from '../../utils/functions';
import Railroad from '../../interface/Railroad';

const initialRailroad: Railroad = {
  railroadSelected: '',
  id: '',
  origin: [],
  classPassage: [],
};

export default function BasicCard() {
  const [railroad, setRailroad] = useState(initialRailroad);
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
        <SelectSmall />
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
