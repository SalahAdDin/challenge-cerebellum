import { Button, Card, Spacer, Text } from '@nextui-org/react';
import React from 'react';

const Home: React.FC = () => (
  <>
    <Card.Body as="main" css={{ textAlign: 'center' }}>
      <Text h2 as="h3">
        You will be presented with 10 True or False questions.
      </Text>
      <Text h2 as="h3">
        Will you score 100%?
      </Text>
    </Card.Body>
    <Spacer y={2} />
    <Card.Footer as="footer">
      <Button type="reset" css={{ margin: 'auto' }}>
        Clear
      </Button>
      <Button type="submit" color="primary" css={{ margin: 'auto' }}>
        Calculate
      </Button>
    </Card.Footer>
  </>
);

export default Home;
