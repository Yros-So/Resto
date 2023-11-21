import Image from "next/image";

export default function HomeMenu() {
    return (
        <section className="h-48 relative">
            <div>
                <div className="">
                    <Image src={'/image1.jpg'} objectFit="contain" layout={'fill'} alt={'image1'}/>
                </div>
            </div>

            <div className="text-center">
                <h3 className="uppercase text-gray-500 font-semibold leading-4"> Check Out </h3>
                <h2 className="text-primary font-semibold text-4xl italic"> Menu </h2>
            </div>
        </section>

    );
}