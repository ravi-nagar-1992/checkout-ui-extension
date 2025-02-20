import {
  reactExtension,
  Banner,
  useSettings,
  Checkbox,
  useShippingAddress,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const {banner_title} = useSettings();
  const {countryCode} = useShippingAddress();
  if (countryCode !== 'CA') {
    return <Banner title={banner_title} />;
}
}
