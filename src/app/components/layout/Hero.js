import Image from "next/image"
import Right from "../icon/Right"

export default function Hero() {
    return(
        <section className="hero">

            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    EveryThing<br/>
                    is Better<br/>
                    in a&nbsp;<span className="text-primary">Restaurant Dimma !</span>  
                </h1>

                <p className="my-6 text-gray-500 text-sm">
                    Restaurant is the missing piece that makes every day complete
                    , a simgle yet delicious joy in life
                </p>

                <div className="flex gap-4 text-sm">
                    <button className="bg-primary flex items-center gap-2 text-white px-4 py-2 rounded-full">
                        Order Now
                        <Right/>
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 font-semibold">
                        Learn More
                        <Right/>
                    </button>
                </div>
            </div>
            

            <div className="flex -z-10">
                <Image src={'/image1.jpg'} layout= {'fill'} objectFit={'contain'} alt={'image1'} />
            </div>

            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold leading-4">
                    Check Out
                </h3>
                <h2 className="text-primary font-semibold">

                </h2>
            </div>
        </section>
    )
}