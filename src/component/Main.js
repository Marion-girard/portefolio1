import '../App.css';
import backgroundImage from '../../public/fond-steampunck3.jpg';

function Main ( ){
    return(
        <main>
            <div  className="fond w-full h-screen bg-cover bg-center bg-no-repeat flex flex-col bg-fixed" style={{ backgroundImage: `url(${backgroundImage})` }}> 
            </div>
        </main>
    )
}

export default Main 