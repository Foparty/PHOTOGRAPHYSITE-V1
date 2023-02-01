import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => {
	return (
		<div className='container single contact'>
			<div className='info-data'>
				<h2 className='info-data-title'>Contact</h2>
				<div className='contact-group'>
					<span>
						<a href='mailto:studio@gabrielasdrubal.com'>
							studio@gabrielasdrubal.com
						</a>
					</span>
				</div>
				<div className='contact-group'>
					<span>
						<a href='tel:+34692883934'>+34 692883934</a>
					</span>
				</div>
				<h2 className='info-data-title'>Print sales</h2>
				<div className='contact-group'>
					<span>
						<a href='mailto:alegria@gabrielasdrubal.com'>
							alegria@gabrielasdrubal.com
						</a>
					</span>
				</div>
				<h2 className='info-data-title'>Site Credits</h2>
				<div className='contact-group'>
					<span>
						<a href='https://alfonsomartingarcia.com' target='_blank'>
							www.alfonsomartingarcia.com
						</a>
					</span>
				</div>
				<h2 className='info-data-title'>Copyright</h2>
				<div className='contact-group'>
					<span>Gabriel Asdrúbal</span>
				</div>
			</div>
		</div>
	);
};

export default ContactInfo;
