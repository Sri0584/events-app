import EventCard from '@/components/EventCard';
import ExploreBtn from '@/components/ExploreBtn';
import { events } from '@/lib/constants';

const Home = () => {
	return (
		<section>
			<h1 className='text-center'>
				The Hub for Every Dev <br /> Event You Cannot Miss
			</h1>
			<p className='text-center mt-5'>
				Hackathons, Meetups, and Conferences, All in One Place
			</p>
			<ExploreBtn />
			{events.length > 0 && (
				<ul id='events' className='events-grid'>
					{events.map((event) => (
						<li key={event.slug}>
							<EventCard {...event} />
						</li>
					))}
				</ul>
			)}
		</section>
	);
};

export default Home;
