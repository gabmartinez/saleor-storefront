import { UserDetails_me } from "@sdk/queries/types/UserDetails";
import { getShop_shop_countries } from "@temp/core/types/saleor";
import { IAddress, ICardData, IFormError, IPaymentGateway } from "@types";

export interface IPromoCodeDiscount {
  voucherCode?: string | null;
}

export interface IProps {
  billingErrors: IFormError[];
  gatewayErrors: IFormError[];
  userAddresses: UserDetails_me["addresses"] | null | undefined;
  selectedUserAddressId?: string;
  billingAsShippingAddress?: boolean;
  checkoutBillingAddress: IAddress | null | undefined;
  countries: Array<getShop_shop_countries | null>;
  formRef: React.RefObject<HTMLFormElement>;
  formId: string;
  paymentGateways: IPaymentGateway[];
  setBillingAddress: (address: IAddress, id?: string) => void;
  setBillingAsShippingAddress: (billingAsShippingAddress: boolean) => void;
  promoCodeDiscount: IPromoCodeDiscount;
  addPromoCode: (promoCode: string) => void;
  removeVoucherCode: (voucherCode: string) => void;
  /**
   * Selected payment gateway.
   */
  selectedPaymentGateway?: string;
  /**
   * Selected payment gateway token.
   */
  selectedPaymentGatewayToken?: string;
  /**
   * Called when selected payment gateway with passed the payment gateway name attribute.
   */
  selectPaymentGateway?: (paymentGateway: string) => void;
  /**
   * Gateway form reference on which payment might be submitted.
   */
  gatewayFormRef?: React.RefObject<HTMLFormElement>;
  /**
   * Method called when the form is submitted. Passed gateway name and token attribute might be used to create payment.
   */
  processPayment: (
    gateway: string,
    token: string,
    cardData?: ICardData
  ) => void;
}