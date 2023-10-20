import React from 'react';

interface DatePickerProps {
  going: boolean;
  railroad: {
    initialDate: string;
    finalDate: string;
  };
  setRailroad: (railroad: any) => void;
}

const DatePicker: React.FC<DatePickerProps> = ({ going, railroad, setRailroad }) => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <input
        style={{ marginRight: '5px', width: '100%' }}
        id="initialDate"
        type="date"
        value={railroad.initialDate}
        onChange={(e) => setRailroad({ ...railroad, initialDate: e.target.value })}
      />
      {going && (
        <input
          id="finalDate"
          type="date"
          style={{ marginLeft: '5px', width: '100%' }}
          value={railroad.finalDate}
          onChange={(e) => setRailroad({ ...railroad, finalDate: e.target.value })}
        />
      )}
    </div>
  );
};

export default DatePicker;
