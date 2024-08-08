type HorizontalToggleProps = {
    width?: string;
}

function HorizontalToggle({ width = '8' }: HorizontalToggleProps) {
    let toggleWidth;

    switch (width) {
        case '12':
            toggleWidth = 'w-14';
            break;
        default:
            toggleWidth = 'w-8';
            break;

    }
    return (
        <div className={`flex ${toggleWidth} h-4 my-1 bg-black rounded-full justify-center`}>
            <div className="w-3 h-3 rounded-full bg-slate-300 self-end ml-2 mb-[.05em]"></div>
        </div>
    )
}

export default HorizontalToggle;