export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 bg-grid overflow-hidden">
            <div className="glow bg-cyan-400 top-[-150px] left-[-150px]" />

            <div className="glow bg-blue-500 bottom-[-200px] right-[-200px]" />
        </div>
    );
}