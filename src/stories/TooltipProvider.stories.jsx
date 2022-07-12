import * as React from "react";
import Button from "../components/button";
import TooltipProvider from "../components/tooltip/provider";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "TooltipProvider",
  component: TooltipProvider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div>
    <style
      dangerouslySetInnerHTML={{
        __html: `body: {
          padding: 0;
        }`,
      }}
    />
    <TooltipProvider>
      <div
        style={{
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
        <Button data-tooltip="Afficher les résultats de la compétition de ski">
          En savoir plus
        </Button>
      </div>
    </TooltipProvider>
  </div>
);

export const Basic = Template.bind({});
Basic.args = {};
