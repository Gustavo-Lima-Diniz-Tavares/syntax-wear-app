import iconInstagram from "@/assets/images/icon-instagram.png";
import iconWhatsapp from "@/assets/images/icon-whatsapp.png";
import iconTiktok from "@/assets/images/icon-tiktok.png";
import iconFacebook from "@/assets/images/icon-facebook.png";

const socialLinks = [
    { href: "#", icon: iconInstagram, name: "Instagram" },
    { href: "#", icon: iconWhatsapp, name: "Whatsapp" },
    { href: "#", icon: iconTiktok, name: "Tiktok" },
    { href: "#", icon: iconFacebook, name: "Facebook" },
]

export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>

            <ul className="flex gap-5">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href} aria-label={name}>
                            <img className="flex justify-center items-center border rounded-full p-1" src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}