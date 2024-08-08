type RectangularSwitchProps = {
    height?: string
}

function RectangularSwitch({ height = '8' }: RectangularSwitchProps) {

    let switchHeight;

    switch (height) {
        case '12':
            switchHeight = 'h-12';
            break;
        default:
            switchHeight = 'h-8';
            break;
    }

    return (
        <div className={`w-4 ${switchHeight} my-1 bg-black rounded-sm self-center flex justify-center`}>
            <div className="w-3 h-4 bg-slate-800 self-center"></div>
        </div>
    )
}

export default RectangularSwitch;