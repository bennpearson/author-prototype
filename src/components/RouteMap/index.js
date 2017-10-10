import React from 'react';
import Tree from 'react-d3-tree';
import styled from "styled-components";

const DataVis = styled.div`
  width: 100%;
  height: 25em;
  overflow: visible;
  .nodeNameBase {
    stroke-width: 0;
  }
  .nodeAttributesBase{
    stroke-width: 0;
  }
`;

const svgTranslate = {
  x: 11,
  y: 230,
}

const svgSquare = {
  shape: 'circle',
  shapeProps: {
    r: 10,
    fill: '#ffffff',
  }
}

const myTreeData = [
  {
    name: 'Q 1.1 Pizza size',
    children: [
      {
        name: 'Q 1.2 Topping',
        attributes: {
          Routing: 'Basic'
        },
        children: [
          {
            name: 'Q 2.1 Cookie',
            attributes: {
              Routing: 'Advanced'
            },
            children: [
              {
                name: 'Summary',
              },
              {
                name: 'Q 2.2 Ice cream',
                children: [
                  {
                    name: 'Customer name',
                    attributes: {
                      Piped: '{name}'
                    },
                    children: [
                      {
                        name: 'Summary',
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: 'Summary',
            attributes: {
              Piped: 'Error - missing {name}'
            },
          },
        ],
      },
    ],
  },
];
export default ({ }) =>
  <DataVis>
    <Tree data={myTreeData} translate={svgTranslate} nodeSvgShape={svgSquare}/>
  </DataVis>
;
