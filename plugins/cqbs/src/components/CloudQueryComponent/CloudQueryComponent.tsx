import React, {useState} from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  HeaderTabs,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';
import { wrapInTestApp } from '@backstage/test-utils';

export const CloudQueryComponent = () => {
  const [selectedTab, setSelectedTab] = useState<number>(2);
  return <Page themeId="tool">
        <Header title="Welcome to cqbs!" subtitle="powered by CloudQuery">
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
        </Content>
      </Page>
    </div>
  ));  
};