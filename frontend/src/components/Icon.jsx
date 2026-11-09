export default function Icon({icon, label, onClick}) {
    return(
        <button type="button" onClick={onClick} className="w-full max-w-[70px] aspect-[70/55] mb-[20px] min-h-11 min-w-11 rounded-lg flex flex-col justify-center items-center cursor-pointer bg-background text-black text-sm transition-transform [@media(hover:hover)]:hover:-translate-y-1 active:scale-95">
            <img className="w-[25px] h-[25px] select-none" src={icon} alt={label} />
            <span className="hidden xs:block text-[12px] select-none">{label}</span>
        </button>
    ) ;

}










