import PropTypes from 'prop-types';

const Card = (props) => {
    return (
        <div className='flex flex-col xs:flex-col ss:flex-row md:flex-row bg-white rounded-lg h-full overflow-hidden shadow-custom'>
            {/* div containing image */}
            <div className='flex-none w-35'>
                <img src={props.icon} alt="Image" className='object-center object-cover w-full h-full' />
            </div>

            {/* div containing content */}
            <div className='p-4 flex-grow flex flex-col justify-between h-full'>
                <div className='pb-4'>
                    <h2 className='text-secondary uppercase font-semibold text-2xl ss:text-3xl sm:text-4xl'>{props.title}</h2>
                    <p className=' text-tertery font-normal'>{props.country}</p>
                </div>
                <div className='flex-grow overflow-auto'>
                    <p className='overflow-auto h-full text-1xl text-primary font-normal' >{props.content}</p>
                </div>
            </div>
        </div>
    )
}
Card.propTypes = {
    icon: PropTypes.string.isRequired, // 'title' should be a required string prop
    title: PropTypes.string.isRequired, // 'title' should be a required string prop
    country: PropTypes.string.isRequired, // 'title' should be a required string prop
    content: PropTypes.string.isRequired, // 'title' should be a required string prop

};

export default Card