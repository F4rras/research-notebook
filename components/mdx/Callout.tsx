import {
    Info,
    TriangleAlert,
    CheckCircle2,
    XCircle,
    Lightbulb,
} from "lucide-react";

type Props = {
    type?: "info" | "warning" | "success" | "danger" | "tip";
    children: React.ReactNode;
};

const titles = {
    info: "Info",
    warning: "Warning",
    success: "Success",
    danger: "Danger",
    tip: "Tip",
};

const variants = {
    info: {
        icon: Info,
        border: "border-cyan-500",
        bg: "bg-cyan-500/10",
        text: "text-cyan-400",
    },
    warning: {
        icon: TriangleAlert,
        border: "border-yellow-500",
        bg: "bg-yellow-500/10",
        text: "text-yellow-400",
    },
    success: {
        icon: CheckCircle2,
        border: "border-green-500",
        bg: "bg-green-500/10",
        text: "text-green-400",
    },
    danger: {
        icon: XCircle,
        border: "border-red-500",
        bg: "bg-red-500/10",
        text: "text-red-400",
    },
    tip: {
        icon: Lightbulb,
        border: "border-purple-500",
        bg: "bg-purple-500/10",
        text: "text-purple-400",
    },
};

export default function Callout({
    type = "info",
    children,
}: Props) {
    const variant = variants[type];
    const Icon = variant.icon;

    return (
        <div
            className={`
                my-6 rounded-xl border-l-4
                p-4
                sm:my-8 sm:p-5
                ${variant.border}
                ${variant.bg}
            `}
        >
            <div className="flex min-w-0 gap-3">

                <Icon
                    className={`${variant.text} mt-1 shrink-0`}
                    size={20}
                />

                <div className="min-w-0 flex-1">

                    <div
                        className={`mb-2 font-semibold ${variant.text}`}
                    >
                        {titles[type]}
                    </div>

                    <div className="prose prose-invert max-w-none break-words">
                        {children}
                    </div>

                </div>

            </div>
        </div>
    );
}