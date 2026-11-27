import PropTypes from 'prop-types';


const CampoTexto = ({
label,
type = 'text',
placeholder,
value,
onChange,
name,
id,
error,
...props
}) => {
return (
<div className="campo-texto">
{label && (
<label htmlFor={id || name} className="campo-texto__label">
{label}
</label>
)}

<input
id={id || name}
name={name}
type={type}
placeholder={placeholder}
value={value}
onChange={onChange}
className={`campo-texto__input ${error ? 'campo-texto__input--error' : ''}`}
{...props}
/>

{error && <span className="campo-texto__error">{error}</span>}
</div>
);
};


CampoTexto.propTypes = {
label: PropTypes.string,
type: PropTypes.string,
placeholder: PropTypes.string,
value: PropTypes.string,
onChange: PropTypes.func,
name: PropTypes.string,
id: PropTypes.string,
error: PropTypes.string,
};

export default CampoTexto;
