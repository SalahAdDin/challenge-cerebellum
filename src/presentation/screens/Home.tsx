import AppContext from '@application/context';
import {
  calculateRecipeList,
  defaultRecipe,
  onPromise,
} from '@application/utils';
import { Recipe } from '@domain/form.dto';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Card, Col, Row, Spacer } from '@nextui-org/react';
import Input from '@presentation/widgets/forms/inputs/Input';
import RadioGroup, {
  RadioOption,
} from '@presentation/widgets/forms/inputs/RadioGroup';
import schema from '@presentation/widgets/forms/validation.schema';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const boolOptions: RadioOption[] = [
  {
    label: 'Yes',
    value: true,
  },
  {
    label: 'No',
    value: false,
  },
];

const tilingOptions: RadioOption[] = [
  {
    label: 'Ceramic',
    value: 'ceramic',
  },
  {
    label: 'Marble',
    value: 'marble',
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

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { setResult } = useContext(AppContext);
  const form = useForm<Recipe>({
    defaultValues: defaultRecipe,
    resolver: yupResolver(schema),
  });

  const { reset, handleSubmit, watch, control } = form;
  const { hasBudget, sanitary, floorTiling, tilingType } = watch();

  const onSubmit = handleSubmit((data) => {
    const recipe = calculateRecipeList(data);
    const price = recipe.reduce((acc, item) => acc + +item.price, 0);

    setResult({
      hasBudget: data.hasBudget,
      budget: data.budget,
      recipe,
      price,
    });

    reset();

    navigate('result', {
      state: { title: 'Calculation Results' },
    });
  });

  const onReset = () => {
    reset();
  };

  return (
    <form onSubmit={onPromise(onSubmit)} onReset={onReset}>
      <Card.Body as="main" css={{ textAlign: 'center' }}>
        <Row>
          <Col span={4}>
            <RadioGroup
              name="hasBudget"
              control={control}
              options={boolOptions}
              label="Do you have a budget?"
              groupProps={{
                row: true,
              }}
            />
          </Col>
          {hasBudget && (
            <Col span={4}>
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
        <Spacer y={1} />
        <Row>
          <Col span={3}>
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
              <Col span={3}>
                <RadioGroup
                  name="toilet"
                  control={control}
                  options={plansOptions}
                  label="Select your Toilet"
                />
              </Col>
              <Col span={3}>
                <RadioGroup
                  name="sink"
                  control={control}
                  options={plansOptions}
                  label="Select your Sink"
                />
              </Col>
              <Col span={3}>
                <RadioGroup
                  name="bathtub"
                  control={control}
                  options={plansOptions}
                  label="Select your Bathtub"
                />
              </Col>
            </>
          )}
        </Row>
        <Spacer y={1} />
        <Row>
          <Col span={3}>
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
              <Col span={3}>
                <RadioGroup
                  name="tilingType"
                  control={control}
                  options={tilingOptions}
                  label="Do you prefer ceramic or marble floor tiling?"
                />
              </Col>
              {tilingType === 'ceramic' && (
                <Col span={3}>
                  <RadioGroup
                    name="ceramic"
                    control={control}
                    options={plansOptions}
                    label="Choose your Ceramic"
                  />
                </Col>
              )}
              {tilingType === 'marble' && (
                <Col span={3}>
                  <RadioGroup
                    name="marble"
                    control={control}
                    options={plansOptions}
                    label="Choose your Marble"
                  />
                </Col>
              )}
            </>
          )}
          <Col span={3}>
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
        <Button type="reset" bordered css={{ margin: 'auto' }}>
          Clear
        </Button>
        <Button type="submit" css={{ margin: 'auto' }}>
          Calculate
        </Button>
      </Card.Footer>
      {/* <DevTool control={control} /> */}
    </form>
  );
};

export default Home;
