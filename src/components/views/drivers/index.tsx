import { Eye, Search, Trash2 } from "lucide-react";
import { Button, TableCell, TableRow } from "../../ui";
import { Table } from "../../reuseable/table";
import { PlaceholderImg } from "../../../lib/utils";
import { Pagination } from "../../reuseable/pagination";
import { useTitle } from "../../../hooks/title";
import { useEffect } from "react";

export default function Drivers() {
    const { setTitle, setSubtitle,title, subtitle} = useTitle();

    useEffect(() => {
        setTitle("Drivers");
        setSubtitle("You can see here all the drivers those use your application to earn money");
    }, [setTitle, setSubtitle]);
    const headers = ["Sr. No", "Name", "Email", "Contact info", "NID/Passport", "Action"];


    const tableData = [
        {
            id: 1,
            slNo: "001",
            name: "Md. Abid Hasan",
            email: "abid.hasan@example.com",
            contact_info: "+880 1755 112233",
            nid_or_passport: "1234 5678 9012",
            avatar: PlaceholderImg(),
        },
        {
            id: 2,
            slNo: "002",
            name: "Fatema Akter",
            email: "fatema.akter@example.com",
            contact_info: "+880 1622 334455",
            nid_or_passport: "2345 6789 0123",
            avatar: PlaceholderImg(),
        },
        {
            id: 3,
            slNo: "003",
            name: "Naimur Rahman",
            email: "naimur.rahman@example.com",
            contact_info: "+880 1911 223344",
            nid_or_passport: "3456 7890 1234",
            avatar: PlaceholderImg(),
        },
        {
            id: 4,
            slNo: "004",
            name: "Sadia Jahan",
            email: "sadia.jahan@example.com",
            contact_info: "+880 1888 556677",
            nid_or_passport: "4567 8901 2345",
            avatar: PlaceholderImg(),
        },
        {
            id: 5,
            slNo: "005",
            name: "Jamal Hossain",
            email: "jamal.hossain@example.com",
            contact_info: "+880 1555 998877",
            nid_or_passport: "5678 9012 3456",
            avatar: PlaceholderImg(),
        },
        {
            id: 6,
            slNo: "006",
            name: "Sabina Yasmin",
            email: "sabina.yasmin@example.com",
            contact_info: "+880 1777 445566",
            nid_or_passport: "6789 0123 4567",
            avatar: PlaceholderImg(),
        },
        {
            id: 7,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        },
        {
            id: 8,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        },
        {
            id: 9,
            slNo: "007",
            name: "Rahim Uddin",
            email: "rahim.uddin@example.com",
            contact_info: "+880 1999 332211",
            nid_or_passport: "7890 1234 5678",
            avatar: PlaceholderImg(),
        }
    ];


    return (
        <div>
             <ul className="lg:hidden mb-3">
        <li className="text-2xl font-bold text-primary">{title}</li>
        <li className="text-sm text-gray-600">{subtitle}</li>
      </ul>
            <ul className="flex items-center justify-between pb-8">
                <li className="w-fit lg:w-[400px]">
                    <div className="flex items-center">
                        <input
                            type="text"
                            className="w-full bg-white pl-2 border-[1px] py-2 text-primary outline-0 placeholder:text-gray-300 placeholder:text-sm"
                            placeholder="Search for driver"
                        />
                        <div className="bg-[#5B7A7D] py-3 px-3 rounded-tr-xs rounded-br-xs text-white font-semibold transition-colors cursor-pointer">
                            <Search size={17} />
                        </div>
                    </div>
                </li>
                <li>
                    <Button className="bg-[#5B7A7D] rounded-xs h-full py-[10px] hover:bg-[#5B7A7D] cursor-pointer">
                        Requests (10)
                    </Button>
                </li>
            </ul>

            <div>
                <Table headers={headers}>
                    {tableData.map((item, index) => (
                        <TableRow key={index} className="[&>td]:bg-white border-b-18 first:border-t-18 border-[#f3f5f7] [&>td]:pl-22">
                            <TableCell className="border-style">{item.slNo}</TableCell>
                            <TableCell className="relative after:absolute after:right-0 after:top-3 after:w-[1px] after:h-6 after:bg-[#b3b3b3]">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                                        <img
                                            src={item.avatar || "/placeholder.svg"}
                                            alt={item.name}
                                            className="w-8 h-8 rounded-full object-cover"
                                        />
                                    </div>
                                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="border-style">{item.email}</TableCell>
                            <TableCell className="border-style">{item.contact_info}</TableCell>
                            <TableCell className="border-style">{item.nid_or_passport}</TableCell>
                            <TableCell className="flex gap-2">
                                <div className="bg-[#fff3eb] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Eye className="text-[#F96D10]" /></div>
                                <div className="bg-[#ffe5e5] text-white px-2 py-1 w-fit rounded-md cursor-pointer"><Trash2 size={20} className="text-[#ff0000]" /></div>
                            </TableCell>

                        </TableRow>
                    ))}


                </Table>
                {/* pagination section */}
                <ul className="flex flex-wrap justify-between items-center my-7">
                    <li className="font-medium mb-2 lg:mb-0">Total: 10,258 parents</li>
                    <li className="font-medium">
                        <Pagination page={1} onPageChange={() => { }} totalPage={10} per_page={2}></Pagination>
                    </li>
                </ul>
            </div>
        </div>
    );
}
