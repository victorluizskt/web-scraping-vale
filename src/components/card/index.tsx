import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import SelectSmall from '../select';
import railroads from '../../utils/railroadsList';
import './styles.css';
import SimpleSelect from '../simpleSelect';

export default function BasicCard() {
  const [railroad, setRailroad] = useState(String);
  console.log(railroad);
  const handleChange = () => {
    console.log('hi barbie');
  };
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
          valueSelect={railroad}
          onChangeSelect={handleChange}
          key={railroad}
          disabled={railroads.length === 0}
          keyRender='value'
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
