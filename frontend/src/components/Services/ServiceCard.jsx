export default function ServiceCard({service, index}){
    return (
        <div
            key={index}
            id={service.id}
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden border border-gray-100"
        >
            {/* Image Header */}
            <div className="relative h-40 md:h-48 overflow-hidden bg-gradient-to-br bg-surface-200">
                <img 
                    src={service.backgroundImage} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                
                {/* Icon Badge */}
                <div className={`absolute top-4 right-4 p-3.5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg backdrop-blur-sm transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                </div>
            </div>
            
            {/* Content */}
            <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-black text-background-900 mb-2 tracking-tight">
                    {service.title}
                </h3>
                <p className={`${service.accentClass} text-sm font-semibold mb-3 tracking-tight`}>
                    {service.subtitle}
                </p>
                <p className="text-muted-600 leading-relaxed mb-6 font-normal text-sm">
                    {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2.5 mb-7">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-muted-700 font-medium text-sm">
                            <div className={`w-1.5 h-1.5 ml-3 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}></div>
                            {feature}
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button className={`group/btn w-full bg-gradient-to-r ${service.color} text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center font-semibold text-sm hover:scale-105 active:scale-95`}>
                    <span>مشاهده جزئیات</span>
                    <svg className="mr-2.5 w-4 h-4 group-hover/btn:mr-3 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}