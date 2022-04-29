import React from "react";

import{
    Container,
    ColumContainer,
    GraphContainer,
    MainContainer,
} from '@layouts/Book/style';

import HouseholdHistory from "@pages/HouseholdHistory";

import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


const Book = ()=>{

    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    function a11yProps(index: number) {
        return {
          id: `full-width-tab-${index}`,
          'aria-controls': `full-width-tabpanel-${index}`,
        };
      }

    return(
        <Container>
            <ColumContainer>
                <HouseholdHistory></HouseholdHistory>
                <GraphContainer>
                    <AppBar position="static">
                        <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="secondary"
                        textColor="inherit"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                        >
                        <Tab label="Item One" {...a11yProps(0)} />
                        <Tab label="Item Two" {...a11yProps(1)} />
                        <Tab label="Item Three" {...a11yProps(2)} />
                        </Tabs>
                    </AppBar>
                </GraphContainer>
            </ColumContainer>

            <MainContainer>
            Book 화면
            </MainContainer>
        </Container>
    )
}

export default Book;