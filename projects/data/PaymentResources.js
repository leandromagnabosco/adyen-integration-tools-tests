export default class PaymentResources {
  masterCardWithout3D = "5100290029002909";
  masterCard3DS2 = "5454545454545454";
  visa3DS1 = "4212345678901237";
  oneyCard = "4970101558744789";

  klarnaVerificationCode = "123456";

  payPalUserName = process.env.PAYPAL_USERNAME;
  payPalPassword = process.env.PAYPAL_PASSWORD;

  klarnaApprovedNLDateOfBirth = "10-07-1970";

  afterPayApprovedNLGender = "M";
  afterPayApprovedNLDateOfBirth = "1990-01-01";
  afterPayApprovedNLPhoneNumber = "0644444444";
  afterPayApprovedNLHouseNumber = "80";
  afterPayDeniedNLHouseNumber = "999";

  wrongExpDate = "1122";
  expDate = "0330";
  cvc = "737";
  cardTypes = { credit: "Credit Card", debit: "Debit Card" };

  threeDSCorrectUser = "user";
  threeDSCorrectPassword = "password";
  threeDSWrongPassword = "wrong answer";

  magentoAdminUser = {
    username: process.env.MAGENTO_ADMIN_USERNAME,
    password: process.env.MAGENTO_ADMIN_PASSWORD,
  };

  apiCredentials = {
    merchantAccount: process.env.ADYEN_MERCHANT,
    clientKey: process.env.ADYEN_CLIENT_KEY,
    apiKey: process.env.ADYEN_API_KEY,
  };

  bcmc = {
    be: {
      cardNumber: "6703444444444449",
      expDate: "0330",
      user: "user",
      password: "password",
      wrongUser: "wronguser",
      wrongPassword: "wrongpassword",
    },
  };

  sepaDirectDebit = {
    nl: {
      accountName: "A. Klaassen",
      iban: "NL13TEST0123456789",
    },
  };

  giftCard = {
    /* The test cards are broken as of 18th Jul 2022,
    so using the VVVgiftcard codes instead, after discussing
    with support
    The amounts are respectively 560EUR and 60EUR for EUR50 card
    and EUR20 cards*/

    EUR50: {
      cardHolderName: "BALANCE EUR 5000",
      cardNumber: "6064364295385017424",
      cardPIN: "73737",
    },

    EUR20: {
      cardHolderName: "BALANCE EUR 2000",
      cardNumber: "6064364295385017427",
      cardPIN: "73737",
    },
  };

  sampleRegisteredUser = {
    email: "roni_cost@example.com",
    password: "roni_cost3@example.com",
  };

  guestUser = {
    regular: {
      email: "guest@adyen.com",
      firstName: "Guest",
      lastName: "Test",
      street: "Guest street",
      houseNumber: "1",
      city: "London",
      postCode: "WC2N 5DU",
      countryCode: "GB",
      countryName: "United Kingdom",
      phoneNumber: "06123456789",
      stateCode: "NH",
    },
    dutch: {
      email: "guest@adyen.com",
      firstName: "Guest",
      lastName: "Test",
      street: "Guest street",
      houseNumber: "1",
      city: "Amsterdam",
      postCode: "1111 AA",
      countryCode: "NL",
      countryName: "Netherlands",
      phoneNumber: "06123456789",
      stateCode: "Noord-Holland",
    },
    brazilian: {
      email: "guest@adyen.com",
      firstName: "Guest",
      lastName: "Test",
      street: "Guest street",
      houseNumber: "1",
      city: "São Paulo",
      postCode: "12345-123",
      countryCode: "BR",
      countryName: "Brazil",
      phoneNumber: "06123456789",
      stateCode: "SP",
      stateOrProvince: "508",
    },
    portuguese: {
      email: "guest@adyen.com",
      firstName: "Portuguese",
      lastName: "Test",
      street: "Guest street",
      houseNumber: "1",
      city: "Lisbon",
      postCode: "1234-123",
      countryCode: "PT",
      countryName: "Portugal",
      stateOrProvince: "1013",
      phoneNumber: "06123456789",
    },
    belgian: {
      email: "guest@adyen.com",
      firstName: "Belgian",
      lastName: "Test",
      street: "Guest street",
      houseNumber: "1",
      city: "Brussels",
      postCode: "1000",
      countryCode: "BE",
      countryName: "Belgium",
      phoneNumber: "+32456555720",
    },
    klarna: {
      approved: {
        nl: {
          email: "guest@adyen.com",
          firstName: "Testperson-nl",
          lastName: "Approved",
          street: "Neherkade",
          houseNumber: "1 XI",
          city: "Gravenhage",
          postCode: "2521VA",
          countryCode: "NL",
          stateCode: "NH",
          phoneNumber: "0612345678",
          dateOfBirth: "10071970",
          gender: "M",
        },
      },
    },
    boleto: {
      email: "guest@adyen.com",
      firstName: "Alex",
      lastName: "De Souza",
      street: "Guest street",
      houseNumber: "1",
      city: "São Paulo",
      postCode: "12345-123",
      countryCode: "BR",
      countryName: "Brazil",
      phoneNumber: "06123456789",
      stateCode: "SP",
      stateOrProvince: "508",
      socialSecurityNumber: "56861752509",
    },
    oney: {
      approved: {
        fr: {
          email: "utilisateurinvite@adyen.fr",
          firstName: "User",
          lastName: "Test",
          street: "Place Charles de Gaulle",
          houseNumber: "1",
          city: "Paris",
          postCode: "75008",
          countryCode: "FR",
          phoneNumber: "+33700555497",
          dateOfBirth: "07071970",
          gender: "M",
        },
      },
    },
    afterPay: {
      approved: {
        nl: {
          email: "guest@adyen.com",
          firstName: "Test",
          lastName: "Acceptatie",
          address: "Hoofdstraat",
          houseNumber: "999",
          city: "Heerenveen",
          postCode: "8441ER",
          phoneNumber: "0612345678",
          dateOfBirth: "1990-01-01",
          gender: "M",
          countryCode: "NL",
        },
      },
      denied: {
        nl: {
          email: "guest@adyen.com",
          firstName: "Test T",
          lastName: "Afwijzing",
          address: "Hoofdstraat",
          houseNumber: "999",
          city: "Heerenveen",
          postCode: "9999XX",
          phoneNumber: "0612345678",
          dateOfBirth: "1990-01-01",
          gender: "M",
          countryCode: "NL",
        },
      },
    },
    clearPay: {
      approved: {
        it: {
          email: "guestitalian@adyen.com",
          firstName: "Test",
          lastName: "Accepted",
          street: "Vicolo Bianchetti",
          houseNumber: "8",
          city: "Bologna",
          postCode: "40125",
          phoneNumber: "0612345678",
          dateOfBirth: "1990-01-01",
          gender: "M",
          stateOrProvince: "697",
          countryCode: "IT",
        },
      },
    },
    iDeal: {
      nl: {
        email: "guest@adyen.com",
        firstName: "Test",
        lastName: "Acceptatie",
        address: "Hoofdstraat 80",
        city: "Heerenveen",
        countryName: "Netherlands",
        postCode: "8441ER",
        phoneNumber: "0612345678",
        dateOfBirth: "1990-01-01",
        gender: "M",
      },
    },
  };
}
