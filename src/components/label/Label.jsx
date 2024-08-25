
const Label = ({htmlFor ="" ,children, ...props}) => {
    return (
        <label htmlFor={htmlFor}{...props} className='font-semibold cursor-pointer text-white'>
            {children}
        </label>
    );
};

export default Label;