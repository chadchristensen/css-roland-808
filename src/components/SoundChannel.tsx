import ChannelLabel from "./ChannelLabel";
import Knob from "./Knob";


type SoundChannelProps = {
    children?: any
}

function SoundChannel({ children }: SoundChannelProps) {
    return (
        <div className="flex flex-col justify-between border-r-2 border-gray-400 w-18 h-[16rem]">
            {children ?? null}
        </div>
    )
}

export default SoundChannel;