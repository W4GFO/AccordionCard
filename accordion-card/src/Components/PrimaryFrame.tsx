import './PrimaryFrameStyle.scss'

import {ImageFrame} from './ImageFrame'
import {ContentFrame} from './ContentFrame'

type PrimaryFrameProps = {}

export const PrimaryFrame = (props: PrimaryFrameProps) => {
	return (
		<main className='primary-frame'>
			<ImageFrame />
			<ContentFrame />
		</main>
	)
}