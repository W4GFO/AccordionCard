import './ImageFrameStyle.scss'
import woman_mobile from '../Images/illustration-woman-online-mobile.svg'
import woman_desktop from '../Images/illustration-woman-online-desktop.svg'
import desktop_box from '../Images/illustration-box-desktop.svg'

type ImageFrameProps = {}

export const ImageFrame = (props: ImageFrameProps) => {
	return (
		<section className='image-outer-frame'>
			<div className='images-container'>
				<picture>
					<source media='(min-width:1080px)' srcSet={woman_desktop} />
					<img src={woman_mobile} alt="working woman"/>
				</picture>

				<img className='desktop-box-frame' src={desktop_box} alt='box on floor'/>
			</div>
		</section>
	)
}