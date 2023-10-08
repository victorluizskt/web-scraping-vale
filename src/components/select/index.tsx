import Select from 'react-select'

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  
  const SelectComponent = () => (
    <Select 
        options={options} 
        isClearable
    />
  )

  export default SelectComponent;