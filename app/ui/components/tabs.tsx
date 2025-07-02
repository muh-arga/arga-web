"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { List, ListItem, ListItemText } from "@mui/material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, pt: 0 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: "background.paper",
        display: "flex",
        height: 224,
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider"}}
      >
        <Tab label="Somethinc - Beautyhaul" {...a11yProps(0)} />
        <Tab label="PT Aigen Global Teknologi" {...a11yProps(1)} />
        <Tab label="PT Webcare Digital Indonesia" {...a11yProps(2)} />
        <Tab label="PT Alina Medika Indonesia" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <h4 className="text-2xl font-bold">Fullstack Engineer</h4>
          <span className="font-light">October 2025 - Present</span>
        </div>
        <List>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Single-line item" />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
