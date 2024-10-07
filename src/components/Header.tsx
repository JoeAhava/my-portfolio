import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/logo-no-background.svg";

const Header: React.FC = () => {
	return (
		<header className="flex items-center justify-between p-4">
			<div className="flex items-center">
				<Image src={Logo} alt="Logo" width={150} height={100} />
			</div>
			<nav className="flex-1 flex justify-center space-x-4">
				<Link href="/about" className="text-foreground hover:text-primary">
					About
				</Link>
				<Link href="/works" className="text-foreground hover:text-primary">
					My Works
				</Link>
			</nav>
			<Button asChild>
				<Link href="/#">Contact Me</Link>
			</Button>
		</header>
	);
};

export default Header;
