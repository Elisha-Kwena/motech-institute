import Link from "next/link"
import Image from "next/image"
export default function Logo(){
    return(
        <>
        <Link href="/"
        className="flex items-center justify-start gap-3"
        >
            <Image
            src="/logo.png"
            alt="motech technology training institute logo"
            width={60}
            height={60}
            className="object-contain"
            />
            <div className="flex flex-col items-start justify-center">
                <h1 className="text-blue-800 font-extrabold text-[10px]">MOTECH TECHNOLOGY</h1>
                <h1 className="text-blue-800 font-extrabold text-[10px]">TRAINING INSTITUTE</h1>
            </div>

        </Link>
        </>
    )
}