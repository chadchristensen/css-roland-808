import LightIndicator from "./LightIndicator";

type DrumPadProps = {
    color: string;
    idx: number
}

function DrumPad({ color, idx }: DrumPadProps) {

    return (
        <button className={`w-9 h-16 rounded-sm ${color}`}>
            <LightIndicator className={`translate-y-[-20px] light light-delay-${idx}`} />
        </button>
    )
}

export default DrumPad;