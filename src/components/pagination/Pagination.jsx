import './pagination.css'

const Pagination = ({prev, next, onPrevious, onNext}) => {

    const handlePrevious = () =>{
        onPrevious();
    }

    const handleNext = () =>{
        onNext();
    }


  return (
    <nav>
        <ul className='pagination'>
            {
                prev ? (<li className='page-item'>
                <button className='page-link1'onClick={handlePrevious} >previous</button>
            </li>
            ): null}
            
            {
                next ? (<li className='page-item'>
                <button className='page-link2' onClick={handleNext} >next</button>
            </li>
            ) : null}
            
        </ul>
    </nav>
  )
}

export default Pagination
