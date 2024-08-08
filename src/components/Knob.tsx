type KnobProps = {
    className?: string,
    label?: string,
    labelPosition?: 'top' | 'bottom',
    labelTextSize?: string,
    bodyColor: string,
    diameter?: number,
    indicatorColor?: string,
    ringColor?: string,
    ringRadiusPercentage?: string
}

function Knob({ bodyColor, className, label, labelPosition = 'top', indicatorColor = '#000', diameter = 6, labelTextSize = 'text-[8px]', ringRadiusPercentage = '55%', ringColor = 'black' }: KnobProps) {
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
        <div className={`flex ${labelPosition === 'top' ? 'flex-col' : 'flex-col-reverse'} items-center gap-1 ${className}`}>
            {label ? <span className={`uppercase text-gray-200 ${labelTextSize} font-semibold`}>{label}</span> : null}
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
                    r={ringRadiusPercentage}
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