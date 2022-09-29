import React, { useState, ComponentType } from 'react';
import { Typography, Grid, TextField, Chip } from '@material-ui/core';
import {
  InfoCard,
  Header,
  HeaderTabs,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
  Sidebar,
  SidebarDivider,
  SidebarGroup,
  SidebarExpandButton,
  SidebarIntro,
  SidebarItem,
  SidebarPage,
  SidebarSearchField,
  SidebarSpace,
  SidebarSubmenu,
  SidebarSubmenuItem,
  
} from '@backstage/core-components';

import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { wrapInTestApp } from '@backstage/test-utils';

import { createRouteRef } from '@backstage/core-plugin-api';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import BuildRoundedIcon from '@material-ui/icons/BuildRounded';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CloudQueueIcon from '@material-ui/icons/CloudQueue';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import AppsIcon from '@material-ui/icons/Apps';



export const CloudQueryComponent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(2);
  return <Page themeId='Tool'>
    <Header title="Welcome to cqbs2!" subtitle="powered by CloudQuery">
      <HeaderLabel label="Version" value="0.0.1" />
      <HeaderLabel label="Lifecycle" value="Alpha" />
    </Header>
    <HeaderTabs
      selectedIndex={selectedTab}
      onChange={index => setSelectedTab(index)}
      tabs={tabs.map(({ label }, index) => ({
        id: index.toString(),
        label,
      }))}
    />
    
  
    <Content>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    <Chip label="AWS"/> <Chip label="GCP"/> <Chip label="Azure"/>
      <ExampleContentHeader selectedTab={selectedTab} />
      <QueryHost />
    </Content>
  </Page>
};

const tabs = [
  { label: 'Overview' },
  { label: 'Cloud Assets' },
  { label: 'Devices' },
  { label: 'User Accounts' },
  { label: 'Artifacts' },
  { label: 'Compliance Advisor' },
  { label: 'Configuration' },
];

const ExampleContentHeader = ({ selectedTab }: { selectedTab?: number }) => (
  <ContentHeader
    title={selectedTab !== undefined ? tabs[selectedTab].label : 'Header'}
  >
    <SupportButton>
      This Plugin is an example. This text could provide useful information for
      the user.
    </SupportButton>
  </ContentHeader>
);



export const AssetInventory = () => {
  const [selectedTab, setSelectedTab] = useState<number>(2);
  return wrapInTestApp(() => (
    <div style={{ border: '1px solid #ddd' }}>
      <Page themeId="tool">
        <Header title="Welcome to cqbs!" subtitle="Optional subtitle">
          <HeaderLabel label="Owner" value="Team X" />
          <HeaderLabel label="Lifecycle" value="Alpha" />
        </Header>
        <HeaderTabs
          selectedIndex={selectedTab}
          onChange={index => setSelectedTab(index)}
          tabs={tabs.map(({ label }, index) => ({
            id: index.toString(),
            label,
          }))}
        />
        <Content>
          <ExampleContentHeader selectedTab={selectedTab} />
          <QueryHost />
        </Content>
      </Page>
    </div>
  ));
};

export const QueryHost = () => {
  return <div style={{ border: '1px solid #ddd' }}>
    
    <h1> QueryHost </h1>
    <Grid>
      <p>hello</p>
    </Grid>
  </div>

};


const handleSearch = (input: string) => {
    
    console.log(input);
  };

export const SampleScalableSidebar = () => (
  <SidebarPage>
    <Sidebar disableExpandOnHover>
      <SidebarSearchField onSearch={handleSearch} to="/search" />
      <SidebarDivider />
      <SidebarGroup label="Menu" icon={<MenuIcon />}>
        <SidebarItem icon={MenuBookIcon} text="Catalog">
          <SidebarSubmenu title="Catalog">
            <SidebarSubmenuItem title="Tools" to="/1" icon={BuildRoundedIcon} />
            <SidebarSubmenuItem title="APIs" to="/2" icon={CloudQueueIcon} />
            <SidebarSubmenuItem title="Components" to="/3" icon={AppsIcon} />
            <SidebarSubmenuItem
              title="Misc"
              to="/6"
              icon={AcUnitIcon}
              dropdownItems={[
                {
                  title: 'Lorem Ipsum',
                  to: '/7',
                },
                {
                  title: 'Lorem Ipsum', 
                  to: '/8',
                },
              ]}
            />
          </SidebarSubmenu>
        </SidebarItem>
        <SidebarItem icon={HomeOutlinedIcon} to="#" text="Plugins" />
        <SidebarItem icon={AddCircleOutlineIcon} to="#" text="Create..." />
      </SidebarGroup>
      <SidebarDivider />
      <SidebarIntro />
      <SidebarSpace />
      <SidebarExpandButton />
    </Sidebar>
  </SidebarPage>
);