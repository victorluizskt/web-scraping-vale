import { useState } from 'react';
import { getRailwayLocations } from '../../api/railroad';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const railroads = [
    { title: 'ESTRADA DE FERRO CARAJAS (MA-PA)', id: "04" },
    { title: 'ESTRADA DE FERRO VITORIA A MINAS', id: "03" },
];

export default function SelectSmall() {
  const [railroad, setRailroad] = useState(String);
  const [origin, setOrigin] = useState(Object);
  const handleChange = async (event: SelectChangeEvent) => {
    const idWagon = railroads.find(railroad => railroad.title === event.target.value)?.id;
    const response = await getRailwayLocations(idWagon);
    setOrigin(response);
  };

  console.log(origin);

  return (
    <>
        <FormControl 
            variant="standard" 
            sx={{ m: 1, minWidth: 120, width: '100%' }} 
            size="small"
        >
            <InputLabel id="demo-simple-select-standard-label">Ferrovia</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={railroad}
                onChange={(e) => handleChange(e)}
            >
            {railroads.map(railroad => (
                <MenuItem 
                    value={railroad.title}
                    onClick={() => setRailroad(railroad.title)}
                >
                    {railroad.title}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
        {/* <FormControl 
            variant="standard" 
            sx={{ m: 1, minWidth: 120, width: '100%' }} 
            size="small"
        >
            <InputLabel id="demo-simple-select-standard-label">Origem</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={railroad}
                onChange={handleChange}
            >
            {railroads.map(railroad => (
                <MenuItem value={railroad.id}>
                    {railroad.title}
                </MenuItem>
            ))}
        </Select>
        </FormControl> */}
    </>
  );
}