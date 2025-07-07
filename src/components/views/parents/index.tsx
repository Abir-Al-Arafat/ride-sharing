import { Funnel, Search } from "lucide-react";
import { Button } from "../../ui";

export default function Parents() {
    return (
        <div>
            <ul className="flex items-center justify-between">
                <li className="w-fit lg:w-[400px]">
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="w-full bg-white pl-2 border-[1px] py-2 text-primary outline-0 placeholder:text-gray-300 placeholder:text-sm"
                            placeholder="Search for parents"
                        />
                        <div
                            className="bg-[#5B7A7D]  py-3 px-3 rounded-tr-xs rounded-br-xs text-white font-semibold transition-colors cursor-pointer"
                        >
                            <Search size={17} />
                        </div>
                    </div>
                </li>
                <li>
                    <Button className="bg-[#5B7A7D] rounded-xs h-full py-[10px] hover:bg-[#5B7A7D] cursor-pointer"><Funnel size={18}/>Filter</Button>
                </li>
            </ul>
        </div>
    );
}
