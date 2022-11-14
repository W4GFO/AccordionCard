import './ContentFrameStyles.scss'
import {DataInfoElement} from './DataInfoElement'

type ContentFrameProps = {}

export const ContentFrame = (props: ContentFrameProps) => {
	return (
		<section className='content-outer-frame'>
			<div className='content-frame'>
				<h1>FAQ</h1>
				<DataInfoElement className='content-frame-flex-item' dataIndex={0} />
				<DataInfoElement className='content-frame-flex-item' dataIndex={1} />
				<DataInfoElement className='content-frame-flex-item' dataIndex={2} />
				<DataInfoElement className='content-frame-flex-item' dataIndex={3} />
				<DataInfoElement className='content-frame-flex-item' dataIndex={4} />
			</div>
		</section>
	)
}