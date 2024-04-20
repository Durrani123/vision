import Header from '../components/HeaderBlack';
import Generate from '../components/Generate';

function Result() {
  return (
    <div className="bg-black h-screen">
    <div className='pl-5 pt-5'>
        <Header/>
    </div>
    <div className='px-4 '>

      <Generate/>
    </div>
    </div>

  );
}

export default Result;
