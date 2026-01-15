interface GoogleMapProps {
    title: string;
}

export default function GoogleMap({ title }: GoogleMapProps) {
    // Base coordinates for each office
    const getMapSrc = (title: string) => {
        if (title.toLowerCase().includes("penang")) {
            // Penang Branch - Kepala Batas area
            return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.5!2d100.4262!3d5.5117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304ac0f9e5b5a7f1%3A0x0!2sBandar%20Putra%20Bertam!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy";
        }
        // HQ - Setia Alam area
        return "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2!2d101.4081!3d3.0987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc4ead4f4d9a4d%3A0x0!2sBandar%20Setia%20Alam!5e0!3m2!1sen!2smy!4v1700000000000!5m2!1sen!2smy";
    };

    return (
        <div className="aspect-[4/3] bg-secondary-100 relative">
            <iframe
                src={getMapSrc(title)}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map location for ${title}`}
                className="absolute inset-0"
            />
        </div>
    );
}
