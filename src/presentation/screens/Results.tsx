import AppContext from '@application/context';
import { Card, Table } from '@nextui-org/react';
import LeftText from '@presentation/widgets/text.styles';
import React, { useContext } from 'react';

const Results: React.FC = () => {
  const { result } = useContext(AppContext);
  const { price, recipe, hasBudget, budget } = result;

  const renderPriceCell = ({
    feature,
    label,
  }: {
    feature: string;
    label: number;
  }) => {
    let color = 'default';

    if (feature === 'total' && hasBudget) {
      if (budget > price) color = 'success';
      if (budget < price) color = 'red';
    }

    return <LeftText color={color}>{label}</LeftText>;
  };

  return (
    <Card.Body as="main" css={{ textAlign: 'center' }}>
      <Table
        aria-label="Calculation Results"
        css={{
          height: 'auto',
          minWidth: '100%',
        }}
        selectionMode="none"
      >
        <Table.Header>
          <Table.Column>Feature</Table.Column>
          <Table.Column>Selection</Table.Column>
          <Table.Column>Price</Table.Column>
        </Table.Header>
        <Table.Body items={[...recipe, { feature: 'total', plan: '', price }]}>
          {(item) => (
            <Table.Row key={`row_${item.feature}`}>
              <Table.Cell>
                <LeftText h3={item.feature === 'total'}>
                  {item.feature}
                </LeftText>
              </Table.Cell>
              <Table.Cell>
                <LeftText css={{ textTransform: 'capitalize' }}>
                  {item.plan}
                </LeftText>
              </Table.Cell>
              <Table.Cell>
                {renderPriceCell({
                  feature: item.feature,
                  label: item.price,
                })}
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>
      </Table>
    </Card.Body>
  );
};

export default Results;
