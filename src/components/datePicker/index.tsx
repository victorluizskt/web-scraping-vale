interface DatePicker {
    going: boolean;
};

// add onclick by selected field and save my state
const DatePicker = ({ going } : DatePicker) => {
    return (
        <div style={{ display: 'flex', width: '100%'}}>
        <input
            style={{ marginRight: '5px', width: '100%'}}
            id="date" 
            type="date" 
        />
        {going && (
            <input
                id="date" 
                type="date"
                style={{ marginLeft: '5px', width: '100%'}}
            />      
        )}  
       </div>
    )
};

export default DatePicker;