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
        <Box sx={{ p: { xs: 2, sm: 3 }, pt: 0 }}>
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
        flexDirection: { xs: "column", md: "row" },
        minHeight: { xs: "auto", md: 224 },
        borderRadius: 1,
        overflow: "hidden",
        boxShadow: 1,
      }}
    >
      <Tabs
        orientation={{ xs: "horizontal", md: "vertical" } as any}
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="vertical tabs example"
        sx={{ 
          borderRight: { xs: 0, md: 1 }, 
          borderBottom: { xs: 1, md: 0 },
          borderColor: "divider",
          minWidth: { xs: "100%", md: 200 },
          "& .MuiTab-root": {
            fontSize: { xs: "0.75rem", sm: "0.875rem" },
            minHeight: { xs: 48, md: 72 },
            textAlign: { xs: "center", md: "left" },
          }
        }}
      >
        <Tab label="Somethinc - Beautyhaul" {...a11yProps(0)} />
        <Tab label="PT Aigen Global Teknologi" {...a11yProps(1)} />
        <Tab label="PT Webcare Digital Indonesia" {...a11yProps(2)} />
        <Tab label="PT Alina Medika Indonesia" {...a11yProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div>
          <h4 className="text-lg sm:text-2xl font-bold">Fullstack Engineer</h4>
          <span className="font-light text-sm sm:text-base">October 2025 - Present</span>
        </div>
        <List sx={{ mt: 1 }}>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Developed and maintained full-stack web applications" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Collaborated with cross-functional teams on product development" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Implemented responsive design and optimized performance" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <h4 className="text-lg sm:text-2xl font-bold">Software Developer</h4>
          <span className="font-light text-sm sm:text-base">2024 - 2025</span>
        </div>
        <List sx={{ mt: 1 }}>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Built scalable web applications using modern frameworks" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Integrated third-party APIs and services" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <h4 className="text-lg sm:text-2xl font-bold">Web Developer</h4>
          <span className="font-light text-sm sm:text-base">2023 - 2024</span>
        </div>
        <List sx={{ mt: 1 }}>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Created responsive websites and web applications" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Optimized website performance and SEO" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
        </List>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <h4 className="text-lg sm:text-2xl font-bold">Junior Developer</h4>
          <span className="font-light text-sm sm:text-base">2022 - 2023</span>
        </div>
        <List sx={{ mt: 1 }}>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Assisted in developing web applications" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
          <ListItem sx={{ px: 0, py: 0.5 }}>
            <ListItemText 
              primary="Learned modern development practices and tools" 
              primaryTypographyProps={{ fontSize: { xs: "0.875rem", sm: "1rem" } }}
            />
          </ListItem>
        </List>
      </TabPanel>
    </Box>
  );
}