type LightIndicatorProps = {
    className?: string
}

function LightIndicator({ className }: LightIndicatorProps) {
    return (
        <span className={`w-3 h-3 relative inline-block bg-red-900 rounded-lg ${className}`}>
            <span className="w-1 h-1 absolute top-0.5 left-1 bg-red-300 rounded-full" />
        </span>
    )
}

export default LightIndicator;