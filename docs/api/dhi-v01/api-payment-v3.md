---
id: p2c-v3-api-payment
title: "P2C v3-Titanium API - Payment"
sidebar_label: PaymentAPIs
---



## Collection: Payment

 Payment contains endpoints for payments.

### Payments

#### API: Payment > Payments

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/payments/?customerId={{customerId}}&billingpackageId={{billingPackageId}}

Description: Returns list of payment for a billing package. It supports pagination.


###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId    | Yes     | Billing package identifier  | between 1 and 3 digits |

### Interface Payment Details

#### API: Payment > Interface Payment Details

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/payments/interfacepayment/{{interfacePaymentId}}

Description: Retrieve the details for a specific Interface Payment Record


###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| interfacePaymentId | Yes | Interface Payment identifier | between 1 and 7 digits |


###### Response Fields

|   Field   |   Type - Format    |    Description |
|-|-|-|
| statusDescription | String | Status of the Interface Payment |
| typeDescription | String | Type of Interface Payment |
| receiverId | String - Integer | identifier of the Entity that received this Interface Payment |
| receiverName | String  | Name of the Entity that received this Interface Payment |
| senderId | String - Integer | identifier of the Entity that sent this Interface Payment |
| senderName | String  | Name of the Entity that sent this Interface Payment |
| settlementDate | String - Date | Settlement/Process date of the Interface Payment |
| transactionDate | String - Date | Date of the Transaciton for this Interface Payment |
| transactionId | String | Transaction ID for the Transaciton for this Interface Payment. |
| ttlPriorAdjustmentAmount | String - Decimal | Total Prior Adjustment Amount for the Interface Payment |
| logText | String | Log Note about the Interface Payment |
| traceCode | String | Trace code for the Interface Payment |
| totalAmount | String - Decimal | Total Amount for the Interface Payment |
| paymentFormatCode | String | Payment Format Code for the Interface Payment |
| negotiatedDiscountAmount | String - Decimal | negotiated Discount Amount for the Interface Payment  |
| settlementMethodDescription | String | Settlement Method for the Interface Payment |
| ttlSupplierAccountChargesAmoun | String - Decimal | Total Suppler Charges for the Interface Payment  |
| creditDebitCode | String - D or C | D for Debit and C for Credit.   |
| recordCount | String | Number for detail records in the INterface Payment |

### Payment Details

#### API: Payment > Payment Details

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/details

Description: Returns payment details

###### Request Body

| Field       | Type - Format  | Required | Description       | Validation            				|
|---------------|----|------|-------------------------------------------------------------|----|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId  | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    	| String - Integer	| Yes | Bank identifier  | between 1 and 5 digits |
| paymentId    	| String - Integer	| Yes | Payment identifier  | between 1 and 5 digits|

### Payment Transfers

#### API: Payment > Payment Transfers

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/transferdetails

Description: Returns payment transfer details.

###### Request Body

| Field       | Type - Format  | Required | Description       | Validation            				|
|---------------|----|------|-------------------------------------------------------------|----|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId  | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    	| String - Integer	| Yes | Bank identifier  | between 1 and 5 digits |
| paymentId    	| String - Integer	| Yes | Payment identifier  | between 1 and 5 digits|

### Payment Direction Details

#### API: Payment > Payment Direction Details

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/directiondetails

Description: Returns payment direction details.

###### Request Body

| Field       | Type - Format  | Required | Description       | Validation            				|
|---------------|----|------|-------------------------------------------------------------|----|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId  | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    	| String - Integer	| Yes | Bank identifier  | between 1 and 5 digits |
| paymentId    	| String - Integer	| Yes | Payment identifier  | between 1 and 5 digits|

### Payment Log Details

#### API: Payment > Payment Log Details

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/logdetails

Description: Returns payment log details.

###### Request Body

| Field       | Type - Format  | Required | Description       | Validation            				|
|---------------|----|------|-------------------------------------------------------------|----|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId  | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    	| String - Integer	| Yes | Bank identifier  | between 1 and 5 digits |
| paymentId    	| String - Integer	| Yes | Payment identifier  | between 1 and 5 digits|

### Save Payment Log

#### API: Payment > Save Payment Log

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/savelog

Description: Saves a log for a payment.


###### Request Body

| Field       | Type - Format  | Required | Description       | Validation            				|
|---------------|----|------|-------------------------------------------------------------|----|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId  | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    	| String - Integer	| Yes | Bank identifier  | between 1 and 5 digits |
| paymentId    	| String - Integer	| Yes | Payment identifier  | between 1 and 5 digits|
| typeDescription   | String | Yes | Cash Posting Note \| CCR Note \| Payment Correction Note \| Return Payment Note - Sets the type of payment log | Valid list from configuration  |
| logText    		| String | Yes | Additional information for the log  | between 1 and 2000 characters |

### Cancel Payment

#### API: Payment > Cancel Payment

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/{{paymentId}}/cancel

Description: Cancel a payment.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| paymentId    		| Yes     | Customer identifier				  |	 between 1 and 5 digits 					|

###### Request Body

| Field         | Type - Format| Required |Description  | Validation            				|
|---------------|--------------|----------|------------------------------------------|------|
| customerId    | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId   | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| bankId    		| String - Integer | Yes | Bank identifier  | between 1 and 5 digits |
| returnReasonDescription    | String		| Yes | Valid Reason from config | Valid list from configuration |
| chargeFeeIndicator    	| String	| Yes | Y  \| N  | Y  \| N |
| sendNotification  | String | Yes | Y  \| N | Y  \| N |
| logText    		| String| Yes | Additional information for the log  | between 1 and 1000 characters |

### Create Payment Method

#### API: Payment > Create Payment Method

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/create

Description: Creates a payment method.

###### Request Body

| Field        | Type - Format | Required | Description         | Validation     		|
|--------------|------|--------|--------------------------------------------------------------------------------|------|
| customerId   | String - Integer | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId   | String - Integer | Yes     | Billing package identifier  | between 1 and 3 digits |
| startDate    	| String - Date	| Yes | YYYY-MM-DD | YYYY-MM-DD
| vendorName    	| String	| Yes | Valid item from config vendor list | Valid list from configuration |
| payMethodType    		| String| Yes | Valid item from config payment method type list | Valid list from configuration |
| subscriptionNumber    	| String - Integer	| No | Subscription number | Valid characters |
| paymentReferenceId    | String - Integer		| No | max 10 characters | max 10 characters |
| reassign    	| String	| Yes |  Checks if it is reassign | Y  \| N |

### Generate 820 Payment Interface

#### API: Payment > Generate 820 Payment Interface

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/generate820/{{interfacePaymentId}}

Description: Generate an 820 FAM/Payment transaction for an Interface Payment

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| interfacePaymentId    | Yes     | Interface Payment Id				  |	 between 1 and 7 digits 					|


###### Request Body

| Field         | Type - Format| Required              | Description       | Validation            |
|---------------|----------|---|----------------------------------------------|-----------------------|
| settlementDate    |  String - Date  | Yes | Settlement Date for the Payments           | YYYY-MM-DD |
| paymentMethod      |  String | Yes | Type of Payment                            | between 1 and 50 chars
| paymentFormatCode  |  String | No | Format code.                               | between 1 and 3 chars
| traceCode           |  String| Yes | Code used to Trace the payment transaction | between 1 and 50 chars
| ldcName 	         |  String | Yes | Utility name		                         | between 1 and 50 chars | 

###### Response Fields
|     Field             |     Type     |  Definition     |
|-----------------------|--------------|--------------------|
|  marketTransQueueId   |  String - Integer       |  Id for the Transaction

### Payment One Time

#### API: Payment > Payment One Time

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/payments/customers/{{customerId}}/billingPackages/{{billingPackageId}}/onetime

Description: Make one time payment using token


###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| billingPackageId 	| Yes     | Customer Account identifier		  |	 between 1 and 3 digits						| 


###### Request Body

| Field        | Type - Format | Required | Description            | Validation            				|
|---------------|-----|-----|--------------------------------------------------------------------------------|------|
| customerId    | String - Integer |  Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId   | String - Integer  | Yes     | Billing package identifier  | between 1 and 3 digits |
| amount    		| String - Number| Yes | Payment amount | between 1 to 5 digits with 2 decimal |
| vendorName   		| String | Yes | Name of the payment vendor | Valid list from configuration |
| accountNumber     | String - Integer| Yes | Account Number | Valid characters|
| paymentType    	| String | Yes | Payment Type | Valid list from configuration |
| marketerName    	| String | Yes | Marketer Name |  Valid list from configuration|
| paymentToken    	| String | Yes | Payment Token received from vendor | Valid list from configuration |