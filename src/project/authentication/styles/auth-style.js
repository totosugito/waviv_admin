export const style_auth = {
    box: {
        minHeight: '100vh'
    },
    grid: {
        minHeight: '100vh',
        // justifyContent: 'flex-center',
        // direction: 'column',
        // container: 'true'
    },
    grid_content: {
        minHeight: {xs: 'calc(100vh - 134px)', md: 'calc(100vh - 112px)'},
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_card: {
        maxWidth: {xs: 400, lg: 475},
        margin: {xs: 2.5, md: 3},
        '& > *': {
            flexGrow: 1,
            flexBasis: '50%'
        },
        p: {xs: 2, sm: 3, md: 4, xl: 5},
    }

}