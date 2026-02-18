'use client';
import Image from 'next/image';

//@typescript-eslint/no-unused-expressions
const ExploreBtn = () => {
	return (
		<>
			<button
				type='button'
				id='explore-btn'
				className='mt-7 mx-auto'
				onClick={() => console.log('CLICK')}>
				<a href='#events'>
					Explore Events
					<Image
						src='/icons/arrow-down.svg'
						alt='Explore Events'
						width={24}
						height={24}
					/>
				</a>
			</button>
		</>
	);
};

export default ExploreBtn;
