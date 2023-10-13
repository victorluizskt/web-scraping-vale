import { useState } from 'react';
import { getRailwayLocations, getClassPassageSearch } from '../../api/railroad';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Locale from '../../interface/Locale';
import ClassPassage from '../../interface/ClassPassage';

const railroads = [
    { title: 'ESTRADA DE FERRO CARAJAS (MA-PA)', id: "04" },
    { title: 'ESTRADA DE FERRO VITORIA A MINAS', id: "03" },
];

export default function SelectSmall() {
  const [railroad, setRailroad] = useState(String);
  const [selectedOrigin, setSelectedOrigin] = useState(String);
  const [classPassage, setClassPassage] = useState(Object);
  const [selectedDest, setSelectedDest] = useState(String);
  const [classPassageSelect, setClassPassageSelect] = useState(String);
  const [origin, setOrigin] = useState(Object);
  const handleChange = async (event: SelectChangeEvent) => {
    const idWagon = railroads.find(railroad => railroad.title === event.target.value)?.id;
    const response = await getRailwayLocations(idWagon);
    const classPassage = await getClassPassageSearch(idWagon);
    setOrigin(response.message.locaisFerroviarios);
    setClassPassage(classPassage.message.classesPassagem);
  };

  console.log(classPassage);

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
                disabled={origin.length === 0}
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
       <div style={{ display: 'flex' }}>
            <FormControl 
                variant="standard" 
                sx={{ m: 1, minWidth: 120, width: '100%' }} 
                size="small"
            >
                <InputLabel id="demo-simple-select-standard-label">Origem</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedDest}
                    disabled={origin.length === 0}
                >
                {origin.length > 0 && origin.map((dest: Locale) => (
                    <MenuItem 
                        value={dest.descricaoInternet}
                        onClick={() => setSelectedDest(dest.descricaoInternet)}
                    >
                        {dest.descricaoInternet}
                    </MenuItem>
                ))}
                </Select>
                </FormControl>
            <FormControl 
                variant="standard" 
                sx={{ m: 1, minWidth: 120, width: '100%' }} 
                size="small"
            >
                <InputLabel id="demo-simple-select-standard-label">Destino</InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={selectedOrigin}
                    disabled={!origin}
                >
                {origin.length > 0 && origin.map((dest: Locale) => (
                    <MenuItem 
                        value={dest.descricaoInternet}
                        onClick={() => setSelectedOrigin(dest.descricaoInternet)}
                    >
                        {dest.descricaoInternet}
                    </MenuItem>
                ))}
                </Select>
        </FormControl>
       </div>
       <div>
       <FormControl>
        <FormLabel id="demo-radio-buttons-group-label" />
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <div>
                <FormControlLabel value="female" control={<Radio />} label="Ida e volta" />
                <FormControlLabel value="male" control={<Radio />} label="So ida" />
                </div>
            </RadioGroup>
        </FormControl>
       </div>
       <div style={{ display: 'flex', width: '100%'}}>
        <input
            style={{ marginRight: '5px', width: '100%'}}
            id="date" 
            type="date" 
        />
        <input
            id="date" 
            type="date"
            style={{ marginLeft: '5px', width: '100%'}}
        />        
       </div>
       <FormControl 
            variant="standard" 
            sx={{ m: 1, minWidth: 120, width: '100%' }} 
            size="small"
        >
            <InputLabel id="demo-simple-select-standard-label">Ferrovia</InputLabel>
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={classPassageSelect}
                disabled={origin.length === 0}
            >
            {classPassage.length > 0 && classPassage.map((dest: ClassPassage) => (
                <MenuItem 
                    value={dest.nome}
                    onClick={() => setClassPassageSelect(dest.nome)}
                >
                    {dest.nome}
                </MenuItem>
            ))}
        </Select>
        </FormControl>
    </>
  );
}