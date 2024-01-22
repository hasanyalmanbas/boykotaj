import { Progress } from '@nextui-org/react'
import React from 'react'

export default function StatProgress({ label, valueLabel, value }: { label: string, valueLabel: string, value: number }) {
    return (
        <Progress
            size="lg"
            radius="sm"
            classNames={{
                base: "max-w-md border-2 dark:border-white/10 border-black/10 px-4 py-4 rounded-2xl",
                track: "drop-shadow-md border border-default",
                indicator: "bg-gradient-to-r from-[#bb0a1e] via-[#8b0000] to-[#cc1100]",
                label: "tracking-wider font-medium text-foreground/60",
                value: "tracking-wider font-semibold text-default-600",
            }}
            valueLabel={valueLabel}
            showValueLabel={true}
            label={label}
            value={value}
        />
    )
}
