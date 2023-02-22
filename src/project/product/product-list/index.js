import {useEffect, useMemo, useState, useCallback} from "react";
import MaterialReactTable from "material-react-table";
import {httpGet} from "../../../services/api-service";
import {Alert, Box, IconButton, LinearProgress, Tooltip} from "@mui/material";
import React from "react";
import {getRouterApi} from "../../../routes/router-api";
import {Delete, Edit} from "@mui/icons-material";

const ProductList = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [pageStatus, setPageStatus] = useState({isError: false, message: ""});
    const columns = useMemo(
        () => [
            {
                accessorKey: 'id',
                header: 'ID',
                size: 100,
            },
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
                //custom conditional format and styling
                Cell: ({cell}) => (
                    <Box
                        component="span"
                        sx={(theme) => ({
                            backgroundColor: cell.getValue() < 4.3 ? theme.palette.error.dark :
                                (cell.getValue() >= 4.3 && cell.getValue() < 4.5) ? theme.palette.warning.dark : theme.palette.success.dark,
                            borderRadius: '0.25rem',
                            color: '#fff',
                            maxWidth: '9ch',
                            p: '0.25rem',
                        })}>
                        {cell.getValue().toFixed(2)}
                    </Box>
                ),
            },
            {
                accessorKey: 'thumbnail',
                header: 'Picture',
                size: 100,
                Cell: ({cell}) => (
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                        }}>
                        <img
                            height={50}
                            src={cell.getValue()}
                            loading="lazy"
                        />
                    </Box>

                ),
            },
        ],
        [],
    );

    const getData = async () => {
        setLoading(true);
        setPageStatus({isError: false, message: ""});

        await httpGet(getRouterApi("product-list-api"), {}).then((v) => {
            if (v.isError) {
                setPageStatus({isError: v.isError, message: v.message});
                setData([]);
            } else {
                setData(v.data.products);
            }
            setLoading(false);
        });
    }
    useEffect(() => {
        setLoading(true);
        getData();
    }, []);

    const handleDeleteRow = useCallback(
        (row) => {
            if (
                !confirm(`Are you sure you want to delete ${row.getValue('title')}`)
            ) {
                return;
            }
            //send api delete request here, then refetch or update local table data for re-render
        },
        [data],
    );

    return (
        <div>
            {loading &&
                <Box sx={{width: '100%'}}>
                    <LinearProgress/>
                </Box>
            }
            {pageStatus.isError && (
                <Alert severity="error" sx={{mb: 2}}>{pageStatus.message}</Alert>
            )}

            <MaterialReactTable
                columns={columns}
                data={data}
                enableStickyHeader
                enableStickyFooter
                enableRowSelection
                positionToolbarAlertBanner="bottom"
                initialState={{pagination: { pageSize: 5, pageIndex: 0 }}}

                // editingMode="modal" //default
                // enableColumnOrdering
                // enableEditing
                renderRowActions={({ row, table }) => (
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Tooltip arrow placement="left" title="Edit">
                            <IconButton onClick={() => table.setEditingRow(row)}>
                                <Edit />
                            </IconButton>
                        </Tooltip>
                        <Tooltip arrow placement="right" title="Delete">
                            <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                                <Delete />
                            </IconButton>
                        </Tooltip>
                    </Box>
                )}
            />
        </div>
    );
}

export default ProductList;
