import Image from 'next/image'


export default function AppIcon(props: { width: number, height: number }) {
    return (
        <Image src={"/app_icon/icon_f.svg"} alt={"icon"} width={props.width} height={props.height} />
    );
}