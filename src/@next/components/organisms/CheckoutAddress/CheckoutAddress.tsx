import React from "react";

import { AddressForm, AddressGridSelector } from "..";
import * as S from "./styles";
import { IProps } from "./types";

/**
 * Address form used in checkout.
 */
const CheckoutAddress: React.FC<IProps> = ({
  checkoutAddress,
  email,
  selectedUserAddressId,
  userAddresses,
  countries,
  formRef,
  formId,
  setShippingAddress,
  errors,
}: IProps) => {
  const adresses =
    userAddresses
      ?.filter(function notEmpty<TValue>(
        value: TValue | null | undefined
      ): value is TValue {
        return value !== null && value !== undefined;
      })
      .map(address => ({
        address: {
          ...address,
          isDefaultBillingAddress: address.isDefaultBillingAddress || false,
          isDefaultShippingAddress: address.isDefaultShippingAddress || false,
          phone: address.phone || undefined,
        },
        id: address?.id || "",
        onSelect: () => null,
      })) || [];

  return (
    <S.Section>
      <S.Title data-cy="checkoutPageSubtitle">SHIPPING ADDRESS</S.Title>
      {userAddresses ? (
        <AddressGridSelector
          addresses={adresses}
          selectedAddressId={selectedUserAddressId}
          onSelect={(address, id) => setShippingAddress(address, undefined, id)}
        />
      ) : (
        <AddressForm
          formId={formId}
          formRef={formRef}
          countriesOptions={countries.filter(function notEmpty<TValue>(
            value: TValue | null | undefined
          ): value is TValue {
            return value !== null && value !== undefined;
          })}
          address={{
            ...checkoutAddress,
            email,
          }}
          handleSubmit={address =>
            address && setShippingAddress(address, address.email)
          }
          errors={errors}
        />
      )}
    </S.Section>
  );
};

export { CheckoutAddress };