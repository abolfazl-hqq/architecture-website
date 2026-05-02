export default function MissionCard({icon, title, description, featuresList}) {
    return <div className="rounded-[2rem] bg-white p-10 shadow-[0_40px_120px_rgba(15,23,42,0.06)]">
                <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-xl">
                {icon}
                </div>
                <h2 className="mt-8 text-3xl font-black text-background-900">{title}</h2>
                {description}
                <ul className="mt-8 space-y-4 text-muted-600">
                <li className="flex gap-3 text-sm leading-7">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                    {featuresList[0]}
                </li>
                <li className="flex gap-3 text-sm leading-7">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                    {featuresList[1]}
                </li>
                <li className="flex gap-3 text-sm leading-7">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-500" />
                    {featuresList[2]}
                </li>
                </ul>
            </div>;
}