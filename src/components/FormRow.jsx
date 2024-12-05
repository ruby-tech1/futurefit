const FormRow = ({ type, name, value, handleChange, labelText }) => {
  return (
    <div className='flex flex-col'>
      <label htmlFor={name} className='capitalize font-semibold text-sm'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        onChange={handleChange}
        required
        className='input'
      />
    </div>
  );
};

export default FormRow;
