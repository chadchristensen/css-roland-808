import { ReactNode } from "react";

type ChannelLabelProps = {
    children: string | ReactNode
}

function ChannelLabel({ children }: ChannelLabelProps) {
    return (
        <span className="uppercase bg-yellow-100 rounded py-1 px-2 mx-1 text-[8px]">{children}</span>
    )
}

export default ChannelLabel;