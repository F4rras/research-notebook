"use client";

import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

interface Props
    extends React.ImgHTMLAttributes<HTMLImageElement> { }

export default function Image(props: Props) {
    return (
        <Zoom>
            <img
                {...props}
                className={`rounded-xl border border-white/10 my-8 ${props.className ?? ""
                    }`}
            />
        </Zoom>
    );
}