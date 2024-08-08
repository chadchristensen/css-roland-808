import { ReactNode } from "react";

type SoundChannelProps = {
    children?: ReactNode
}

function SoundChannel({ children }: SoundChannelProps) {
    return (
        <div className="flex flex-col justify-between border-r-2 border-gray-400 w-18 h-[16rem]">
            {children ?? null}
        </div>
    )
}

export default SoundChannel;