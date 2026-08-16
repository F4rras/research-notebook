import Link from "next/link";
import Container from "@/components/ui/Container";

const navigation = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Notebook",
        href: "/notebook",
    },
    {
        name: "Research",
        href: "/research",
    },
    {
        name: "Timeline",
        href: "/timeline",
    },
    {
        name: "About Me",
        href: "/about",
    },
];

const social = [
    {
        name: "GitHub",
        href: "https://l.instagram.com/?u=https%3A%2F%2Fgithub.com%2FF4rras%3Futm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio%26fbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQPOTM2NjE5NzQzMzkyNDU5AAGnjpsR9i5grdIV7Mz9E-v7YPbiHMk4reY_R9ioZvkDiRi-yoNm9nYx6v6vX5Q_aem_ySzeSTizJkeLe3kRRcY3KA&e=AUDnILsmsilTh7yVF2l2Kczi089w7EwBvnUdaC2QwF1somzNPYVMqpv00yNMERQl1VkkYgyl6CReQRX4ZotF17mSgEgcomqF2GYj7BWIAUBK_ZP_0gXI7exiFbG2e4Xfliq-4fMLWQdDEHxasc1SgH8",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/fr4g_s/",
    },
    {
        name: "Email",
        href: "mailto:your@email.com",
    },
];

export default function Footer() {
    return (
        <footer className="mt-32 border-t border-white/10 bg-[#060B18]">
            <Container>

                <div className="grid gap-12 py-16 md:grid-cols-3">

                    {/* Nama */}

                    <div>

                        <h2 className="text-2xl font-bold text-white">
                            Research Notebook
                        </h2>

                        <p className="mt-4 leading-7 text-gray-400">
                            A digital space where curiosity becomes
                            research.
                        </p>

                        <p className="mt-6 text-sm text-gray-500">
                            © 2026 Farras. All rights reserved.
                        </p>

                    </div>

                    {/* Navigation */}

                    <div>

                        <h3 className="mb-5 font-semibold">
                            Navigation
                        </h3>

                        <ul className="space-y-3">

                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 transition hover:text-cyan-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>

                    {/* Connect */}

                    <div>

                        <h3 className="mb-5 font-semibold">
                            Connect
                        </h3>

                        <ul className="space-y-3">

                            {social.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-gray-400 transition hover:text-cyan-300"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}

                        </ul>

                    </div>

                </div>

                <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
                    Built with Next.js, Tailwind CSS.
                </div>

            </Container>
        </footer>
    );
}