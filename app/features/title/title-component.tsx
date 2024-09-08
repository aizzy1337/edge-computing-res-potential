import { useEffect } from 'react';
import './title-component.css'

const Title = () => {
    return(
        <div className='title-component-div'>
            <div className='title-div'>
                <p className='title-p'>RES POTENTIAL</p>
            </div>
            <div className='cover-div' />
            <div className='second-title-div'>
                <p className='second-title-p'>Check the potential for energy production from solar and wind power plants in your chosen location</p>
            </div>
        </div>
    );
}

export default Title;