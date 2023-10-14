import FormControl from '@mui/material/FormControl';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';

interface StateGoing {
    setGoing: Function;
};

const RadioButton = ({ setGoing } : StateGoing) => (
  <div style={{ marginTop: '10px', marginBottom: '10px'}}>
    <FormControl>
    <FormLabel id="demo-radio-buttons-group-label" />
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={false}
            name="radio-buttons-group"
        >
            <div>
            <FormControlLabel 
                value={true} 
                control={<Radio />} 
                label="Ida e volta"
                onClick={() => setGoing(true)}
            />
            <FormControlLabel 
                value={false} 
                control={<Radio />} 
                label="So ida"
                onClick={() => setGoing(false)}
            />
            </div>
        </RadioGroup>
    </FormControl>
  </div>
);

export default RadioButton;