import PropTypes from 'prop-types';



const Logo = ({ size = 'md', showSlogan = false }) => {

const sizes = {

sm: { fontSize: '20px', slogan: '12px' },

md: { fontSize: '28px', slogan: '13px' },

lg: { fontSize: '36px', slogan: '14px' },

};



const current = sizes[size] || sizes.md;



return (

<div className="logo">

<h1 className="logo__titulo" style={{ fontSize: current.fontSize }}>

ICFELOX

</h1>

{showSlogan && (

<p className="logo__slogan" style={{ fontSize: current.slogan }}>

CONECTATE, APRENDE, CREA

</p>

)}

</div>

);

};



Logo.propTypes = {

size: PropTypes.oneOf(['sm', 'md', 'lg']),

showSlogan: PropTypes.bool,

};



export default Logo;