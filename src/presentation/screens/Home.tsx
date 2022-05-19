import { onPromise } from '@application/utils';
import { Recipe } from '@domain/form.dto';
import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Col, Row, Spacer } from '@nextui-org/react';
import Input from '@presentation/widgets/forms/inputs/Input';
import RadioGroup, {
  RadioOption,
} from '@presentation/widgets/forms/inputs/RadioGroup';
import schema from '@presentation/widgets/forms/validation.schema';
import React from 'react';
import { useForm } from 'react-hook-form';

const boolOptions: RadioOption[] = [
  {
    label: 'Yes',
    value: 'true',
  },
  {
    label: 'No',
    value: 'false',
  },
];

const plansOptions: RadioOption[] = [
  { label: 'Economy', value: 'economy' },
  { label: 'Standard', value: 'standard' },
  { label: 'Premium', value: 'premium' },
];

const sizeOptions: RadioOption[] = [
  { label: 'Small', value: 'small' },
  { label: 'Medium', value: 'medium' },
  { label: 'Large', value: 'large' },
];

const defaultValues: Recipe = {
  hasBudget: false,
  sanitary: false,
  floorTiling: false,
  size: 'small',
};

const Home: React.FC = () => {
  const form = useForm<Recipe>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit, watch, control } = form;
  const { hasBudget, sanitary, floorTiling } = watch();

  const onSubmit = handleSubmit((data) => {
    console.log('Data: ', data);

    reset();
  });

  const onReset = () => {
    reset();
  };
  return (
    <form onSubmit={onPromise(onSubmit)} onReset={onReset}>
      <Card.Body as="main" css={{ textAlign: 'center' }}>
        <Row gap={2}>
          <Col>
            <RadioGroup
              name="hasBudget"
              control={control}
              options={boolOptions}
              label="Do you have a budget?"
              groupProps={{ row: true }}
            />
          </Col>
          {hasBudget && (
            <Col>
              <Input
                name="budget"
                control={control}
                fieldProps={{
                  type: 'number',
                  label: 'How much is your budget?',
                  required: true,
                  clearable: true,
                  bordered: true,
                  min: 0,
                  role: 'textbox',
                }}
              />
            </Col>
          )}
        </Row>
        <Row gap={1}>
          <Col>
            <RadioGroup
              name="sanitary"
              control={control}
              options={boolOptions}
              label="Are you changing sanitary products?"
              groupProps={{ row: true }}
            />
          </Col>
          {sanitary && (
            <>
              <Col>
                <RadioGroup
                  name="toilet"
                  control={control}
                  options={plansOptions}
                  label="Toilet"
                />
              </Col>
              <Col>
                <RadioGroup
                  name="sink"
                  control={control}
                  options={plansOptions}
                  label="Sink"
                />
              </Col>
              <Col>
                <RadioGroup
                  name="bathtub"
                  control={control}
                  options={plansOptions}
                  label="Bathtub"
                />
              </Col>
            </>
          )}
        </Row>
        <Row gap={1}>
          <Col>
            <RadioGroup
              name="floorTiling"
              control={control}
              options={boolOptions}
              label="Are you changing your floor tiling?"
              groupProps={{ row: true }}
            />
          </Col>
          {floorTiling && (
            <>
              <Col>
                <RadioGroup
                  name="ceramic"
                  control={control}
                  options={plansOptions}
                  label="Ceramic"
                />
              </Col>
              <Col>
                <RadioGroup
                  name="marble"
                  control={control}
                  options={plansOptions}
                  label="Marble"
                />
              </Col>
            </>
          )}
          <Col>
            <RadioGroup
              name="size"
              control={control}
              options={sizeOptions}
              label="What is the size of your bathroom?"
            />
          </Col>
        </Row>
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
      <DevTool control={control} />
    </form>
  );
};

export default Home;
