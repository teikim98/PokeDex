import { useRecoilState } from "recoil";
import { searchState } from "../store/atom";



const Header: React.FC<{}> = () => {
    const [filterdPokemon, setFilterdPokemon] = useRecoilState(searchState);


    return (
        <header className="w-full py-4 shadow bg-white">
            <div className="container mx-auto flex flex-col text-cyan-700 items-center space-y-2 px-6 md:flex-row md:space-x-4 md:space-y-0 lg:px-0">
                <h1> Pokemon App</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Search pokemon by name..."
                        className="w-full border-2 border-gray-200 rounded py-2 px-4 md:w-72"
                        value={filterdPokemon}
                        onChange={(e) => setFilterdPokemon(e.target.value)}
                    />
                </div>
            </div>
        </header>
    );
};

export default Header

