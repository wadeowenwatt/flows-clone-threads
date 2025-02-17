import Image from 'next/image'
import { CSSProperties } from 'react';


export default function AppIcon(props: { width: number, height: number, style: CSSProperties}) {
    return (
        <Image src={"/app_icon/icon_f.svg"} alt={"icon"} width={props.width} height={props.height} style={props.style} />
    );
}