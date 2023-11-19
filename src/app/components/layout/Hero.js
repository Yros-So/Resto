import Image from "next/image"
import Right from "../icon/Right"

export default function Hero() {
    return(
        <section className="hero">

            <div className="py-12">
                <h1 className="text-4xl font-semibold">
                    EveryThing is Better with a Restaurant ! 
                </h1>

                <p className="my-4 text-gray-500">
                    Pizza is the missing piece that makes every day complete
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
            

            <div className="relative">
                <Image src={'/image4.jpg'} layout= {'fill'} condemod={'contain'} alt={'image4'} />
            </div>
        </section>
    )
}