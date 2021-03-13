import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import { PrivateCollegeTemplate } from "./PrivateCollegeTemplate";
import { PublicCollegeTemplate } from "./PublicCollegeTemplate";

function TabPanel({
  shouldShow,
  children,
}: PropsWithChildren<{
  shouldShow: boolean;
}>) {
  return (
    <div role="tabpanel" style={{ display: shouldShow ? "block" : "none" }}>
      <Box p={3}>{children}</Box>
    </div>
  );
}

export function TemplateList() {
  const [selectedIdx, setSelectedIdx] = React.useState(0);

  const handleChange = React.useCallback((_event, newValue) => {
    setSelectedIdx(newValue);
  }, []);

  return (
    <Box>
      <Header>Templates</Header>
      <Description>
        You can pick good template story from here to above calendar.
      </Description>
      <Paper>
        <Tabs
          value={selectedIdx}
          onChange={handleChange}
          textColor="primary"
          indicatorColor="primary"
          style={{ backgroundColor: "lightblue" }}
        >
          <Tab
            icon={<Icon>🏫</Icon>}
            label="Private College"
            style={{ textTransform: "none" }}
          />
          <Tab
            icon={<Icon>🎓</Icon>}
            label="Public College"
            style={{ textTransform: "none" }}
          />
        </Tabs>
        <TabPanel shouldShow={selectedIdx === 0}>
          <PrivateCollegeTemplate />
        </TabPanel>
        <TabPanel shouldShow={selectedIdx === 1}>
          <PublicCollegeTemplate />
        </TabPanel>
      </Paper>
    </Box>
  );
}

const Header = styled.div`
  font-size: 3rem;
  font-weight: 900;
`;

const Description = styled.span`
  font-size: 1.3rem;
`;

const Icon = styled.span`
  font-size: 2rem;
`;
