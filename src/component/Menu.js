import '../App.css';

function Menu() {
    return(
    <header class="">
    <nav class="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 my-10" >
        <ul class="flex flex-row list-none  justify-center justify-around">

            <li class=" no-underline hover:underline bg-white opacity-60 p-2"><a href="#moi">Moi</a></li>
            <li class=" no-underline hover:underline bg-white opacity-60 p-2"><a href="#competence">Compétence</a></li>
            <li class=" no-underline hover:underline bg-white opacity-60 p-2"><a href="#projet">project</a></li>
            <button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Contact</button>
        </ul>
    </nav>
</header>
)
}
export default Menu
