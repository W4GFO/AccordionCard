import './ImageFrameStyle.scss'
import woman from '../Images/illustration-woman-online-mobile.svg'

type ImageFrameProps = {}

export const ImageFrame = (props: ImageFrameProps) => {
	return (
		<section className='image-outer-frame'>
			<img src={woman} alt="foo"/>
		</section>
	)
}