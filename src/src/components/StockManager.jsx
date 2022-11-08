import { Button, Grid } from '@mui/material'
import { React } from 'react'
import CRUDCreator from './CRUDCreator'

const StockManager = () => {
    return (
        <Grid container>
            <Grid item xs={4}>
                <Button 
                    variant="contained"
                >
                    Add
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button
                    variant="contained"
                >
                    Delete
                </Button>
            </Grid>
            <Grid item xs={4}>
            <Button
                    variant="contained"
                >
                    Upload File
                </Button>
            </Grid>
            <Grid item xs={12} mt={2}>
                <CRUDCreator/>
            </Grid>
        </Grid>
    )
}

export default StockManager