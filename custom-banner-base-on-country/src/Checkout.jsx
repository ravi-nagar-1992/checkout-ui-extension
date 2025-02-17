import {
  reactExtension,
  Banner,
  useSettings,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {banner_title} = useSettings();
  const {use_shipping} = useShippingAddress();
  console.log({use_shipping});
  return <Banner title={banner_title} />;
}
