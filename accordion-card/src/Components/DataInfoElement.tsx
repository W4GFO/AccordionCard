import React, { useState } from 'react'
import {FaChevronDown} from 'react-icons/fa'
import {DataInfoType, DataDisplayData} from '../defs'

import './DataInfoPropsStyle.scss'

type DataInfoProps = {
	className:string
	dataIndex:number
}

export const DataInfoElement = ({className, dataIndex}: DataInfoProps) => {
	const [isExpanded, setIsExpanded] = useState<boolean>(false)

	const dataElementInfo:DataInfoType = DataDisplayData[dataIndex]

	const handleExpansionClick = (e:React.MouseEvent<HTMLButtonElement>) => {
		setIsExpanded(!isExpanded)
	}

	return (
		<section className={className + ' DataInfoParentContainer'}>
			<div className='data-title-components'>
				<div className='data-title-component-item-title'>
					<span className={(isExpanded === false) ? 'data-title' : 'data-title data-title-strong'}>{dataElementInfo.title}</span>
				</div>
				<div className='data-title-component-item-image'>
					<button onClick={handleExpansionClick}><FaChevronDown 
						className={(isExpanded === true) ? 'button-down-rotation' : 'button-up-rotation'} />
					</button>
				</div>
			</div>

			<p className={(isExpanded === false) ? 'data-info-hidden' : 'data-info-visible'}>{dataElementInfo.statement}</p>
			<footer className='bottom-border'></footer>
		</section>
	)
}