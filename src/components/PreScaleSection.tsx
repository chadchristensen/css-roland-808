type PreScaleSectionProps = {
    colSpanClass: string
}

function PreScaleSection({ colSpanClass }: PreScaleSectionProps) {
    return (
        <div className={`bg-gray-400 h-4 w-full rounded-sm ${colSpanClass}`}>

        </div>
    )
}

export default PreScaleSection;