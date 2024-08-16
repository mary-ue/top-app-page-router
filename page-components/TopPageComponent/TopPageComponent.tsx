import { TopPageComponentProps } from './TopPageComponent.props';

export const TopPageComponet = ({
  firsCategory,
  page,
  products,
}: TopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
