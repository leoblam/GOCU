"use client";

import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  TabIndicator,
} from "@chakra-ui/react";

export default function workout() {
  return (
    <main>
      <Tabs position="relative" variant="unstyled" align="center" p={4}>
        <TabList>
          <Tab>Musculation</Tab>
          <Tab>Etirement</Tab>
          <Tab>Boxe</Tab>
        </TabList>
        <TabIndicator
          colorScheme="red"
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <p>Bienvenue dans l'espace consacré seance de musculation !</p>
          </TabPanel>
          <TabPanel>
            <p>Bienvenue dans l'espace consacré aux étirements</p>
          </TabPanel>
          <TabPanel>
            <p>
              Bienvenue dans l'espace consacré aux seance d'entrainement a la
              boxe !
            </p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
