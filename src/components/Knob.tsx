type KnobProps = {
    label?: string,
    labelTextSize?: string,
    bodyColor: string,
    diameter?: number,
    indicatorColor?: string,
    ringColor: string,
    ringWidth: string
}

function Knob({ bodyColor, label, indicatorColor = '#000', diameter = 6, labelTextSize = 'text-xs', ringWidth = '14', ringColor = 'black' }: KnobProps) {
    let knobSize: string;

    switch (diameter) {
        case 8:
            knobSize = 'w-8 h-8';
            break;
        case 16:
            knobSize = 'w-16 h-16';
            break;
        default:
            knobSize = 'w-4 h-4';
            break;

    }

    return (
        <div className="flex flex-col items-center gap-1">
            {label ? <span className={`uppercase text-white ${labelTextSize}`}>{label}</span> : null}
            <svg className={knobSize + ' overflow-visible'} viewBox="0 0 200 200">
                <filter>
                    <feTurbulence
                        type="turbulence"
                        baseFrequency="0.05"
                        numOctaves="3"
                        result="turbulence"
                    />
                </filter>
                <circle
                    cx="50%"
                    cy="50%"
                    r="55%"
                    fill={ringColor}
                />
                <circle
                    cx="50%"
                    cy="50%"
                    r="45%"
                    fill={bodyColor}
                />
                <line x1="50%" y1="5%" x2="50%" y2="25%" strokeWidth="8" stroke={indicatorColor} />
            </svg>
        </div>
    )
}

export default Knob;