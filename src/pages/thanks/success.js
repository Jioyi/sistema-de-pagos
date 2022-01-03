import Image from 'next/image';
import { Message } from '../../ui/components';
import { Button } from '../../ui/core';
import { getLayout } from '../../layouts';

export default function ThanksSuccessPage() {
	const URL = process.env.NEXT_PUBLIC_BASE_URL;
	return (
		<Message
			title="Thank you"
			content="Your payment has been received successfully"
			action={
				<Button
					className="bg-primary"
					onClick={() => window.location.replace(URL)}
				>
					Return to home
				</Button>
			}
			image={<Image src="/img/thanks.png" alt="" width={160} height={160} />}
		/>
	);
}

ThanksSuccessPage.getLayout = getLayout;
