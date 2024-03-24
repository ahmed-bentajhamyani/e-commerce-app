

function HomePage(){

    return (
        <>
                <section className="flex justify-center">
                    <img className="max-w-[88%]" src="/topImage.jpg">
                    </img>
                </section>
                <h2 className="text-center mt-12 mb-12 font-playfair-display font-extrabold text-[1.8em]">Discover latest arrivals</h2>



                {/* <slider></slider> */}




                <section className=" ml-auto mr-auto mb-10 flex justify-between w-[85%] gap-8">
                    <div className="flex flex-col gap-8">
                        <img src="/left.jpg">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <p className=" text-[13px] font-[300] text-gray-800">ISABEL MARANT</p>
                            <h2 className="text-center font-playfair-display font-[900] text-[1.5em]">Take a look at New Arrivals</h2>
                            <p className=" font-bold text-[13px] hover:border-b-2 border-black pb-[10px]">SHOP NOW</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <img src="/right.jpg">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <p className=" text-[13px] font-[300] text-gray-800">AMI PARIS</p>
                            <h2 className="text-center font-playfair-display font-[900] text-[1.5em]">Spring’s Trendiest Garments</h2>
                            <p className="font-bold text-[13px] hover:border-b-2 border-black pb-[10px]">DISCOVER THE SELECTION</p>
                        </div>
                    </div>
                </section>

                <section className="ml-auto mr-auto flex justify-center mb-10">
                    <img className="h-[100px] w-[70%]" src="/off.png">
                    </img>
                </section>

                <h2 className="text-center mt-12 mb-12 font-playfair-display font-extrabold text-[1.8em]">Stylish Shoes</h2>


                 {/* <slider></slider> */}


                 <section className=" ml-auto mr-auto mb-10 flex justify-between w-[85%] gap-5">
                    <div className="flex flex-col gap-8">
                        <img src="/first.jpg">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <p className=" text-[13px] font-[300] text-gray-800">JACQUEMUS</p>
                            <h2 className="text-center font-playfair-display font-[900] text-[1.5em]">Focus On: Bags</h2>
                            <p className=" font-bold text-[13px] hover:border-b-2 border-black pb-[10px]">SHOP NOW</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <img src="/second.jpg">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <p className=" text-[13px] font-[300] text-gray-800">HEREU</p>
                            <h2 className="text-center font-playfair-display font-[900] text-[1.5em]">Spring Vibes</h2>
                            <p className="font-bold text-[13px] hover:border-b-2 border-black pb-[10px]">SHOP NOW</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <img src="/third.jpg">
                        </img>
                        <div className="flex justify-center items-center flex-col">
                            <p className=" text-[13px] font-[300] text-gray-800">GOLDEN GOOSE</p>
                            <h2 className="text-center font-playfair-display font-[900] text-[1.5em]">Undisputed Must-Haves</h2>
                            <p className="pb-[10px] font-bold text-[13px] hover:border-b-2 border-black ">SHOP NOW</p>
                        </div>
                    </div>
                </section>

                <section className=" bg-gray-100 h-[150px] flex items-center justify-center">
                    <p className=" text-2xl font-[200]">Express Shipping + Free Return</p>
                </section>

        </>
    )
    
    }
    
    export default HomePage