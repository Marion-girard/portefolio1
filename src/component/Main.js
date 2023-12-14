import '../App.css';
import backgroundImage from '../assets/fond-steampunck3.jpg';

function Main ( ){
    return(
        <main>

        <div className="h-screen flex items-center justify-center">
            <div
            className="fixed top-0 left-0 w-full h-full z-[-1]"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            ></div>

           
                <div className=" depart w-screen h-screen flex justify-center items-center ">
                    <div className=" bg-white bg-opacity-60 w-2/5 ">
                        <h1 className="text-center text-lg font-medium  " >  developeuse web </h1>
                        <a href="#cv"> <p  className=" text-center "> Découvrez mon monde </p> </a>
                    </div>
                </div>

            </div>
                <div class="w-screen h-screen " id="moi">
                    <div  class=" profil   flex justify-center items-center mt-52">
                        <div class="bg-white w-72 flex flex-row ">
                            <h2> profil </h2>
                            <div>Image</div>

                            <div class="text-center"> Bienvenue sur mon portefolio, 
                                Je suis une développeur web en formation à la 3W Accadémie. 
                                Je suis passionné de web depuis quelque anné.j’ai pu apprendre les base de python et de C++.
                                Ici vous allez pouvoir en apprendre plus sur mes compétence 
                            </div>
                        </div>
                        
                    </div>
                </div>

                
    
                
                <div class="text-white text-center"><h1> Skill </h1> </div>
                        <div class="grid grid-cols-4 gap-12 justify-center items-center mx-40">
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> HTML</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> CSS</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> PHP</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> MySQL</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> Figma</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Laravel</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center">Git</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Trelo</div>
                        </div>
                        <div class="grid grid-cols-3 gap-12 justify-center items-center mx-60 mt-12">
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Vu.js</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Wordpress</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Notion</div>
                        </div>

                
                
                <div  class="text-white" > Project</div>
                    <cards> </cards>


                    <div  class="text-white" > Contact</div>
                    <cards> </cards>
        </main>
        /*<div className="h-screen flex items-center justify-center">
        <div
          className="fixed top-0 left-0 w-full h-full z-[-1]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
       
        <div className="relative z-10 p-10 text-white">
        <div className=" depart w-screen h-screen flex justify-center items-center ">
                    <div className=" bg-white bg-opacity-60 w-2/5 ">
                        <h1 className="text-center text-lg font-medium  " >  developeuse web </h1>
                        <a href="#cv"> <p  className=" text-center "> Découvrez mon monde </p> </a>
                    </div>
                </div>

                <div class="w-screen h-screen " id="moi">
                    <div  class=" profil   flex justify-center items-center mt-52">
                        <div class="bg-white w-72 flex flex-row ">
                            <h2> profil </h2>
                            <div>Image</div>

                            <div class="text-center"> Bienvenue sur mon portefolio, 
                                Je suis une développeur web en formation à la 3W Accadémie. 
                                Je suis passionné de web depuis quelque anné.j’ai pu apprendre les base de python et de C++.
                                Ici vous allez pouvoir en apprendre plus sur mes compétence 
                            </div>
                        </div>
                        
                    </div>
                </div>

                
                <div class="my-10">
                    <div class="text-white"><p> Hard Skill </p> </div>
                        <div class="grid grid-cols-4 gap-12 justify-center items-center mx-40">
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> HTML</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> CSS</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> PHP</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> MySQL</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> Figma</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Laravel</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center">Git</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Trelo</div>
                        </div>
                        <div class="grid grid-cols-3 gap-12 justify-center items-center mx-60 mt-12">
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Vu.js</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Wordpress</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Notion</div>
                        </div>
                </div>
                
                <div class="text-white"><p> Hard Skill </p> </div>
                        <div class="grid grid-cols-4 gap-12 justify-center items-center mx-40">
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> HTML</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> CSS</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> PHP</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> MySQL</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> Figma</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Laravel</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center">Git</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Trelo</div>
                        </div>
                        <div class="grid grid-cols-3 gap-12 justify-center items-center mx-60 mt-12">
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Vu.js</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Wordpress</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Notion</div>
                        </div>
                </div>

                
                <div class="text-white"><p> Hard Skill </p> </div>
                        <div class="grid grid-cols-4 gap-12 justify-center items-center mx-40">
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> HTML</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> CSS</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> PHP</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> MySQL</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> Figma</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Laravel</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center">Git</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Trelo</div>
                        </div>
                        <div class="grid grid-cols-3 gap-12 justify-center items-center mx-60 mt-12">
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Vu.js</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Wordpress</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Notion</div>
                        </div>  

                        <div class="text-white"><p> Hard Skill </p> </div>
                        <div class="grid grid-cols-4 gap-12 justify-center items-center mx-40">
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> HTML</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> CSS</div>
                            <div class="bg-white w-30  h-10 text-center flex justify-center items-center "> PHP</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> MySQL</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center "> Figma</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Laravel</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center">Git</div>
                            <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Trelo</div>
                        </div>
                        <div class="grid grid-cols-3 gap-12 justify-center items-center mx-60 mt-12">
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Vu.js</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Wordpress</div>
                                <div class="bg-white w-30 h-10 text-center flex justify-center items-center ">Notion</div>
                        </div>
        </div>*/
    
    );
  };
    

export default Main 