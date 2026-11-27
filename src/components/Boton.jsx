`src/components/Boton.jsx`

import PropTypes from 'prop-types';
import './Boton.css';

const Boton = ({
children,
tipo = 'primario',
onClick,
type = 'button',
disabled = false,
className = ''
}) => {

return (
<button
type={type}
onClick={onClick}
disabled={disabled}
className={`boton boton--${tipo} ${className}`}
>
{children}
</button>
);
};


Boton.propTypes = {
children: PropTypes.node.isRequired,
tipo: PropTypes.oneOf(['primario', 'secundario', 'texto']),
onClick: PropTypes.func,
type: PropTypes.string,
disabled: PropTypes.bool,
className: PropTypes.string,
};



export default Boton;

