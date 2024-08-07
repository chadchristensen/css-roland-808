import { useState } from "react";
import LightIndicator from "./LightIndicator";

type DrumPadProps = {
    color: string;
}

function DrumPad({ color }: DrumPadProps) {
    // const [isActive, setIsActive] = useState(false);

    return (
        <button className={`w-9 h-16 rounded-sm ${color}`}>
            <LightIndicator className="translate-y-[-20px]" />
        </button>
    )
}

export default DrumPad;