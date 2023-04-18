
export default function Footer() {
    let footerLinkStyling = "flex items-center mx-4"

    return (
        <footer className="flex ml-auto w-[calc(100vw-250px)]">
            <div className="flex items-center mx-2 w-[400px] text-sm">
                © 2023, made with 𓀐 by 🎤 Sing Song, 🍖 Hanny and 🔔 Nel Bell for a better web. Supervisor: Overlord King Kang 🦍
            </div>
            <ul className="flex ml-auto">
                <li className={footerLinkStyling}><a href="">Team Confusion</a></li>
                <li className={footerLinkStyling}><a href="">About Us</a></li>
                <li className={footerLinkStyling}><a href="">Blog</a></li>
                <li className={footerLinkStyling}><a href="">License</a></li>
            </ul>
        </footer>
    )
} 