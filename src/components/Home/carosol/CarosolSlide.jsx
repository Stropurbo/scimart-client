const CarosolSlide = ({title, subtitle, image}) => {
    return (
        <section 
        className='w-full h-[500px] bg-cover flex-col md:flex-row justify-center items-center px-4 md:px-8'
        style={{backgroundImage: `url('https://i.ibb.co.com/8nZYDfk1/computer-mouse-paper-bags-blue-background-top-view-169016-43523.jpg')`}}
        >
        
        <div className='flex flex-col md:flex-row justify-between max-w-6xl w-full gap-6
            items-center text-center md:text-left h-full py-8'
            >
            {/* left content */} 
            <div className='w-full md:w-1/2 text-center md:text-left mt-8 md:m-0' >
                <h1 className='text-3xl md:text-5xl text-black'> {title} </h1>
                <p className='py-2 md:py-4 text-lg text-black '> {subtitle} </p>
                <button className="btn px-2 py-2 md:px-7 md:py-3 rounded-lg">Shop</button>
            </div>

            {/* right image */}
            <div className='w-full md:w-1/2 flex justify-center mt-6 md:mt-0'>
                <img className='w-full max-w-xs sm:max-w-sm md:max-w-md' src={image} alt="product image" />
            </div>
        </div>


        </section>

    );
};

export default CarosolSlide;