import Image from 'next/image';
import Link from 'next/link';

interface Props {
	title: string;
	image: string;
	slug: string;
	location: string;
	date: string;
	time: string;
}
const EventCard = ({ title, image, slug, location, date, time }: Props) => {
	return (
		<Link href={`/events/${slug}`} id='event-card'>
			<div className='event-image'>
				<Image
					src={image}
					alt={title}
					width={300}
					height={200}
					className='poster'
				/>
				<div>
					<Image
						src='/icons/pin.svg'
						alt='Event Location'
						width={16}
						height={16}
					/>
					<p>{location}</p>
				</div>
				<p className='title'>{title}</p>
				<div className='datetime'>
					<div>
						<Image
							src='/icons/calendar.svg'
							alt='date'
							width={14}
							height={14}
						/>
						<p>{date}</p>
					</div>
					<div>
						<Image src='/icons/clock.svg' alt='time' width={14} height={14} />
						<p>{time}</p>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default EventCard;
