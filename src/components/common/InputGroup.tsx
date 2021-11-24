type InputGroupProps = {
  label: string;
  field: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
};

const InputGroup = ({ label, field, onChange, type = "text" }: InputGroupProps) => {
  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input type={type} 
        className="form-control" 
        onChange={onChange}
        id={field} name={field} />
    </div>
  );
};

export default InputGroup;
