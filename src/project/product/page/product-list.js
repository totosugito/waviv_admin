import {useEffect, useMemo, useState} from "react";
import MaterialReactTable from "material-react-table";
import {httpGet, httpPost} from "../../../services/api-service";

const ProductList = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const columns = useMemo(
        () => [
            {
                accessorKey: 'title',
                header: 'Title',
            },
            {
                accessorKey: 'brand',
                header: 'Brand',
            },
            {
                accessorKey: 'category',
                header: 'Category',
            },
            {
                accessorKey: 'rating',
                header: 'Rating',
            },
        ],
        [],
    );

    const getData = async () => {
        console.log("getdata")
        let aa = await httpGet("https://dummyjson.com/products", {}).then((v) => {
            setData(v.products)
            console.log(v)
        });

        // .then((response) => {
        //     console.log(JSON.stringify(response));
        // }).catch((err) => {
        //     console.log(JSON.stringify(err));
        // })
        setLoading(false);
    }
    useEffect(() => {
        setLoading(true);
        getData();
    }, []);

    return (
        <div>
            <MaterialReactTable
                columns={columns}
                data={data}
                enableStickyHeader
                enableStickyFooter
                // muiTableContainerProps={{sx: {maxHeight: '300px'}}}
            />
        </div>
    );
}

export default ProductList;
