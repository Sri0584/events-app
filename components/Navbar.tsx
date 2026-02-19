'use client';
import Image from 'next/image';
import Link from 'next/link';
import posthog from 'posthog-js';

const Navbar = () => {
	const handleNavClick = (linkName: string, href: string) => {
		posthog.capture('nav_link_clicked', {
			link_name: linkName,
			link_href: href,
		});
	};

	return (
		<header>
			<nav>
				<Link
					href='/'
					className='logo'
					onClick={() => handleNavClick('Logo', '/')}>
					<Image
						src='/icons/logo.png'
						alt='Logo'
						width={24}
						height={24}></Image>
					<p>Dev Event</p>
				</Link>
				<ul className='nav-links'>
					<li>
						<Link
							href='/about'
							onClick={() => handleNavClick('Home', '/about')}>
							Home
						</Link>
					</li>
					<li>
						<Link
							href='/events'
							onClick={() => handleNavClick('Events', '/events')}>
							Events
						</Link>
					</li>

					<li>
						<Link
							href='/create-event'
							onClick={() => handleNavClick('Create Event', '/create-event')}>
							Create Event
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
