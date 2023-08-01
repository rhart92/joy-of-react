'use client';

export function Banner(props: {
    status: 'success' | 'failure';
    children: React.JSX.Element;
}) {
    // TODO: Animate the won or lost message so it's more visually interesting
    const { status, children } = props;
    return (
        <div
            className={`text-center ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} p-4 m-4 rounded flex justify-center items-center gap-4`}
        >
            {children}
        </div>
    );
}

