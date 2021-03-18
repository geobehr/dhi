

## Collection: Account Package

 Account Package contains requests for account packages.

### Task

Task contains endpoints for tasks that are applied to a particular account.

#### API: Account Package > Task > Task Valid Plans

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/validPlans?planName={{planName}}

Description: Returns a list of Pricing Plans that are valid to assignt to the supplied account.  This will only return Active Pricings Plans. It supports pagination parameters.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Query Parameters
| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| planName    | No     | String to search partially for plan name matches  | Max 25 characters|
 
###### Response Fields

|   Field   |   Type - Format    |    Description |
|-|-|-|
|     serviceTypeDescription           |    String      |   Commodity for the Pricing Plan.  For example Gas or Electric       |
|     planDescription                  |    String     |    Name of the Pricing Plan      |
|     statusDescrition                |    String      |   Status of the Pricing Plan       |
|     territoryCode             |    String      |   Territory code of the Pricign Plan.      |
|     postIntroPlanName         |    String      |   The plan the account will 'roll' to when this 'Introlductory' plan expires       |
|     rateCode                  |    String      |   LDC RATE code for the Pricing Plan (LDC Rate Ready Plans)       |
|     introductoryBillingsNumber   |    String      |   If this Plan is an 'Introlductory' plan, the number of plans to bill before it expires       |
|     descriptionText                  |    String      |   Free form description of the Pricing Plan       |
|     record                    |    String - Integer    |  Unique key for this row of data        |
|     vendorId                 |    String - Integer      | Unique key for the Vendor (Supplier) of this Pricing Plan         |
|     packageId                |    String - Integer     | Unique key for the Package (Gas,Electric) of this Pricing Plan         |
|     pricingPlanId            |    String - Integer     | Unique key for this Pricing Plan, when used in combination with VendorID and packageId         |

#### API: Account Package > Task > Charges Details

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/validPlans?accountChargeId={{accountChargeId}}&billingChargeId={{billingChargeId}}

Description: Find the charge detail (Component Charge) for an Account.  This can be called for a specific charge (Billing_Charge) or it can be called to detail for all of the Fee charges for the Account. 
It supports pagination parameters.


###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Query Parameters
| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| accountChargeId    | No     | Account Charge identifier  | between 1 and 5 digits	|
| billingChargeId    | No     | Billing Charge identifier  | between 1 and 7 digits	|

 
###### Response Fields

|   Field   |   Type - Format    |    Description |
|-|-|-|
| chargeDate | String - Date | Charge Date for the Charge Detail |
| typeDescription | String | Type of Charge Detail |
| planDescription | String | Pricing Plan that created this Charge Detail |
| sequenceNumber | String - Integer | Order the Charge Detail was created by the Charge Engine |
| description | String | Additional description of the cCharge Detail |
| totalChargeAmount | String - Number | Total amount of this Charge Detail |
| chargeAmount | String - Number | Amount of this Charge Detail, excluding Taxes |
| taxAmount | String - Number | Tax amount of this Charge Detail |
| consumptionNumber | String - Number | Amount of consumption that was charged by this Charge Detail |
| record | String - Integer | unique ID for this row in the response |
| accountChargeId | String - Integer | Account Charge Id for this Charge Detail |
| billingChargeId | String - Integer | Billing Charge Id for this Charge Detail |
| accountComponentId | String - Integer | Account Component Id for this Charge Detail |
| componentChargeId | String - Integer | Component Charge Id for this Charge Detail |

#### API: Account Package > Task > Reassign Plan Validate

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/reassignPlan

Description: Returns information about an Account relating to reassigning it to a new pricing plan.  It will specify the account's start date, last charge date, renewal date and if it requires extra jurisdictional fields.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| showPlanExperation | String|  Y \| N - Y if the account requires the Plan Expiration field to be populated on a reassign |
| prevChargeDate | String | Date of the Last charge on this Account.  Account should not be reassigned before this date. |
| showPlanTerm | String | Y \| N - Y if the account requires the Plan Term Number field to be popoulated on a reassign |
| renewalDate | String | Date of the account's current Service Agreement's expiration | 
| accountPackageStartDate | String | Start Date of the Account (Confirmed Start Date).  Account should not be reassigned before this date |

#### API: Account Package > Task > Reassign Plan

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/reassignPlan

Description: Reassigns an Account to a new Pricing Plan.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| startDate | String - Date | Yes | Effective Date of the Reassignment | YYYY-MM-DD |
| vendorId | String - Integer  | Yes | Vendor ID for the new Pricing Plan | between 1 and 5 digits  |
| packageId | String - Integer | Yes | Package ID for the new Pricing Plan | between 1 and 2 digits  |
| pricingPlanId | String - Integer |Yes | Pricing Plan ID for the new Pricing Plan | between 1 and 8 digits  |
| renewalInd | String - Boolean | Yes | Y if this is a renewal, chaning the plan when the current contract expires.  N otherwise | Y - N |
| planTermNum | String - Integer | No | Number of months account should be on new plan.  Required if the account is Connecticut Residential, otherwise should be null | between 1 and 5 digits  |
| expirationCode | String| No | Year/Month the new plan will expire.  Required if the account is Connecticut Residential, otherwise should be null | YYYYMM |


###### Response Fields
| Field | Type - Format| Description |
|-|-|-|
| renewalIndicator | String - Boolean |  Y \| N - Y if this is a renewal, chaning the plan when the current contract expires.  N otherwise  |
| previousChargeDate | String - Date|  Previous charge date |
| showPlanTerm | String - Boolean| Y \| N - Y if the account requires the Plan Term Number field to be popoulated on a reassign |
| renewalDate | String - Date|  Renewal date |
| showPlanExpiration | String - Boolean|  Y \| N - Y if the account requires the Plan Expiration field to be populated on a reassign |
| accountPackageStartDate | String - Date|  Account package start date |

#### API: Account Package > Task > Get Pay Extension

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}//payExtensions

Description: Validates an Account to determine if a Payment Extension can be setup for the account.  It will return the current Charges for the account and the supplier's rules for Payment Extensions.

###### Request Path Variables

| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Response Fields
| Field | Type - Format | Definition |
|-|-|-|
| totalCharges | String  - Number | Total non-deposit charges owed by the account |
| pastDueCharges | String  - Number | Non-depoist charges that are currently past due |
| depoistCharges | String  - Number | Deposit charges currently owed by the account |
| maximumSchedules | String  - Integer | Maximum number of extension schedules that can be setup for this Account |
| frontLoad | String | Used when there is a remainder after spreading extension amont accross multiple schedules.  If Y, then add remainder to the first schedule.  If N, add to last extension |
| maximumExtensionDays | String  - Integer |  Maximum days into the future that an paymnet extension schedule can be created. |
| minimumExtensionAmount | String  - Number | Minimum extension amount that can be setup for this account at this time |

#### API: Account Package > Task > Get Commission Plans

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/agents/{{agentId}}/assigns/{{accountAgentAssignId}}

Description: Validates that an Agent/Account assignment can have a Commission Plan/Rate assigned.

###### Request Path Variables

| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	            | Yes |	Customer identifier                 |	between 1 and 8 digits|
|customerAccountId      | Yes |	Customer Account identifier         |	between 1 and 2 digits|
|accountPackageId	    | Yes |	Customer Account Package identifier |	between 1 and 4 digits|
|agentId             	| Yes |	Agent/Account assignment identifier |	between 1 and 6 digits|
|accountAgentAssignId   | Yes |	Account assignment identifier       |	between 1 and 2 digits|

###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| minStartDate    | String - Date | minimum start date that can be used for a Comission Rate for this Account/Agent Assignment |
| maxEndDate      | String - Date| maximum end date that can be used for a Comission Rate for this Account/Agent Assignment |
| commissionPlans | String | Valid Commission Plans for this Account/Agent Assignment |

#### API: Account Package > Task > Get Assign Agent Initial

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/agents/initial/{{agentId}}

Description: Validates that an Agent/Account assignment can have a Commission Plan/Rate assigned.

###### Request Path Variables

| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	            | Yes |	Customer identifier                 |	between 1 and 8 digits|
|customerAccountId      | Yes |	Customer Account identifier         |	between 1 and 2 digits|
|accountPackageId	    | Yes |	Customer Account Package identifier |	between 1 and 4 digits|
|agentId             	| Yes |	Agent/Account assignment identifier |	between 1 and 6 digits| 

###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| minStartDate    | String - Date | Minimum start date that can be used for a Commission Rate for this Account/Agent Assignment |
| typeDescription | String | Type of supplied Agent |
| signedIndicator | String |Default value to use for this assignment. This specifies if the Agent actually signed up the account (Y), or if a subordinate agent signed it up (N)|
| agentCode | String | Code used to identify the supplied Agent |
| commissionPlans | String Array | Valid Commission Plans for this Account/Agent Assignment |

#### API: Account Package > Task > Assign Commission Plans

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/agents/{{agentId}}

Description: Assign Agent Commission Plans

###### Request Path Variables

| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	            | Yes |	Customer identifier                 |	between 1 and 8 digits|
|customerAccountId      | Yes |	Customer Account identifier         |	between 1 and 2 digits|
|accountPackageId	    | Yes |	Customer Account Package identifier |	between 1 and 4 digits|
|agentId             	| Yes |	Agent/Account assignment identifier |	between 1 and 6 digits|


###### Request Body
| Field	| Type - Format | Required | Description | Validation
|-|-|-|-|-|
| accountAgentAssignId | String - Number | Yes | id for the assignment between the Agent and the Account | between 1 and 2 |
| startDate | String - Date | Yes | Date the Commission details become effective |  YYYY-MM-DD |
| endDate | String - Date | No | Date the Commission details expire |  YYYY-MM-DD |
| commssionPlan | String | Yes | Name of the Commission Plan | Max 50 |
| fixedUnitNumber | String - Decimal | No | Amount or Rate of the Commission.|  Max 12 total digits, 6 decimals |


###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| vendorId | String - Number | identifier for the Vendor parent of the Commission Pricing Plan |
| packageId | String - Number | identifier for the Package parent of the Commission Pricing Plan |
| pricingPlanId | String - Number | identifier for the Commission Pricing Plan |
| agentCommissionRateId | String - Number |identifier for the assignment between the Account/Agent/Commission Plan |

#### API: Account Package > Task > Assign Agent to Account

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/agents/assign

Description: Assign Agent Commission Plans

###### Request Path Variables

| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	            | Yes |	Customer identifier                 |	between 1 and 8 digits|
|customerAccountId      | Yes |	Customer Account identifier         |	between 1 and 2 digits|
|accountPackageId	    | Yes |	Customer Account Package identifier |	between 1 and 4 digits|
|agentId             	| Yes |	Agent/Account assignment identifier |	between 1 and 6 digits|


###### Request Body
| Field	| Type - Format | Required | Description | Validation
|-|-|-|-|-|
| agentId | String - Number | Yes |  Id for Agent to be assigned to the Account | Maximum of 6 digits|
| startDate | String - Date | Yes | Date the assignment starts |  YYYY-MM-DD |
| endDate | String - Date | No | Date the assignment ends. Must be on or after startDate |  Y or N|
| signedIndicator | String  | Yes |Flag specifying if this Agent signed the account (Y) or if a subordinate Agent signed them (N) |  YYYY-MM-DD |
| commissionPlan | String | No | Name of the Commission Plan that governs the Agent/Account relationship  | Max 50 |
| fixedUnitNumber | String - Decimal | No | Amount or Rate for the Commission.  This is optional, even if a commissionPlan is sent.  It will be ignored if no commissionPlan is sent|  Max 13 total digits, 8 decimals |

 
 
###### Response Fields
| Field | Type - Format | Description |
|-|-|-| 
| accountAgentAssignId | String - Number |Identifier for the assignment between the Account/Agent/Commission Plan |

#### API: Account Package > Task > Create Pay Extension

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/payExtensions

Description: Creates a Payment Extension for an Account

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body
| Field | Type - Format | Required | Description |
|-|-|-|-|
| requestedByName | String | Y | Name of person that requested the Extension
| extensionAmount | String  - Number  | Y | Total amount of the Extension
| note | String | Y | Description of why the Extension was created
| schedules | JSON Array | Y | List of extension schedules

###### Schedules
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-| -| 
| sequence | String  - Integer | Yes | Sequence of the extension schedule | Max 2 |
| amount | String  - Number | Yes | Amount to be paid for this extension schedule | 10 digits 2 decimals |
| date | String - Date    | Yes | Date payment is required for this extension schedule | YYYY-MM-DD |

###### Response Fields
| Field | Type - Format |  Description |
|-|-|-|
| paymentExtensionId |  String  - Integer | Id of the created Payment Extension |

#### API: Account Package > Task > Change Price

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/changePrice

Description: Create a Price Change Request for a Rate Ready account to be sent to the Utility

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| effectiveDate | String - Date  | Yes | Requested effective date of price change | YYYY-MM-DD |
| vendorId | String  - Integer | Yes | Vendor ID for the pricing plan for this change request | between 1 and 3 digits |
| packageId | String  - Integer | Yes | Package ID for the pricing plan for this change request | between 1 and 2 digits |
| pricingPlanId | String  - Integer | Yes | Pricing Plan ID for the pricing plan for this change request | between 1 and 8 digits | 
| accountPricingId | String  - Integer | Yes | Account Pricing Id for the assignment between the account and the pricing plan for this change request | between 1 and 2 digits |

###### Response Fields
| Field | Type - Format |  Description |
|-|-|-|
| accountRateChangeId | String  - Integer  | ID of the Rate Change entry that was created for this request. It can be empty/null if no entry was created |

#### API: Account Package > Task > Update Start Dates

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/startDates

Description: Update the Start Dates for an Account. This will include the Confirmed Start Date on the account, as well as some of the assignment tables, such as the Account Pricing.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| startDate | String - Date  | Yes |New Start Date for the Account. Date cannot be a future date.  | YYYY-MM-DD|

#### API: Account Package > Task > Apply Credits

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/applyCredits

Description: Apply any credit account charges to any debit account charges for an account. 

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| effectiveDate | String - Date  | Yes | New Start Date for the Account. Date cannot be a future date.   | YYYY-MM-DD |

#### API: Account Package > Task > Charge Account

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/charge

Description: Allows users to Charge an account manually

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| effectiveDate | String - Date  | Yes | Used to determine what Usage to charge. | YYYY-MM-DD |

#### API: Account Package > Task > Write-Off Account

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/writeoff

Description: Allows users to write off an account

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| writeOffDate | String - Date  | Yes | Used to determine write off date. | YYYY-MM-DD |
| logNote      | String | Optional | Reason for write off.             | Up to 2000 chars|

#### API: Account Package > Task > End Account Service

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/endservice

Description: Allows users to end an account

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| endDate | String - Date  | Yes | Used to determine end date for service | YYYY-MM-DD |

#### API: Account Package > Task > Dismiss Bankruptcy

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/dismissBankruptcy

Description: Dismiss a bankruptcy from an account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| dismissalDate | String - Date | Yes | Date of the dismissal. |  YYYY-MM-DD |
| logText | String | No | Log note abount the dismissal |  Max 2000  |

#### API: Account Package > Task > Update Cool Off Period

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/cooloffperiod

Description: Allows users to Overrides an Account's Coooling Off Period

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Request Body
| Field | Type - Format | Required | Description | Validation |
|-|-|-|-|-|
| endDate | String - Date  | Yes | New end date for the Cooling Off Period | YYYY-MM-DD |

#### API: Account Package > Task > Post Usage

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/usages

Description: Creates a Usage record and assigns it to an Account. EP API should enforce the required fields, as P2C API does not.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|



###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| beginReadDate | String - Date | Yes | Begin Date of the usage | YYYY-MM-DD |
| endReadDate | String - Date | Yes | End Date of the usage | YYYY-MM-DD  |
| usageNumber | String - Integer | Yes | The usage amount for the Usage Record | Maximum 12 numbers and 3 decimal places  |
| unitMeasureDescription | String | Yes | The Unit of Measure for this Usage Record, such as KWH or THERM. Value should be in all Caps | between 1 and 25 characters  |
| transactionId | String - Integer | No | Transaction ID for the Usage transaction, if it has one. If not supplied, the back end will generate one using the current Date/Time | between 1 and 30 characters |
| productTransferType | String | Yes | The Loop designation for the Usage Detail record that will be created. PM should be used in most cases | between 1 and 2 characters  |
| measurementSignificanceCode | String  | No | Register code for the USage Detail record that will be created. This can help identify Peak vs off-peak, for example. | between 1 and 2 characters |
| equipmentIdCode | String  | No | Meter Number for the Usage | between 1 and 25 characters |
| netMeteringUsageNumber | String - Number  | No | If this usage should have customer generated usage (Net Metering), this will be the amount that the customer generated. Should be empty if not net metering | Maximum 12 numbers and 3 decimal places |

#### API: Account Package > Task > Misc Adjustment

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/adjustments

Description: This method will create a Miscellaneous Adjustment debit or credit on an account. The General Ledger account information must be sent with the adjustment. This can be sent either using the Ids or by using the actual ledger description. If the IDs are sent, they will be used and the description ignored. If the IDs are not sent, it will attempt to use the description. If it is also not sent, the API will fail.


###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| chargeDate | String - Date | Optional | Charge Date for the adjustment. If missing, the current date will be used. This can be any date after the start date of the account | YYYY-MM-DD |
| subTypeDescription | String | Optional | A description that can be used to define the adjusmtment. | max 50 characters  |
| logText | String | Optional |  A free form narative about why the adjustment was created. This will be stored in an Account Log | max 2000 characters  |
| chargeAmount | String  - Number  | Required | Amount of the adjustment. This can be positive (Debit) or negative (Credit) | Maximum 10 digits w/ 2 decimal places |
| generalLedgerDescription | String | Conditional | The of the General Ledger Account that will be used for AR booking. This must be a valid value for the account and is required if the governingAgencyId, generalLedgerId and ledgerAccountId fields are empty/null | max 75 characters |
| governingAgencyId | String  - Integer | Conditional | ID for the Governing Agency for the General Ledger Account. This is required if the generalLedgerDescription is not populated | between 1 and 4 digits |
| generalLedgerId | String  - Integer | Conditional | ID for the General Ledger for the General Ledger Account. This is required if the generalLedgerDescription is not populated | between 1 and 7 digits |
| ledgerAccountId | String  - Integer | Conditional | ID for the General Ledger Account. This is required if the generalLedgerDescription is not populated | between 1 and 7 digits |


###### Request Fields
| Field | Type - Format | Description |
|-|-|-|
| accountChargeId | String  - Integer |  The Account Charge Id for the Charge that was created |
| billingChargeId | String  - Integer |  The Billing Charge Id for the Charge that was created|

#### API: Account Package > Task > Charge Fees

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/chargeFees

Description: Create a Flat Fee charge for the specifice fee for the specified account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| feeDescription | String | Yes |  Fee description | Must be valid fee description |
| logNote | String | Optional | Log Note | Upto 2000 characters  |

#### API: Account Package > Task > Transfer Charges - Validate

#### > Method: <span class='method-get'>GET</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/transferCharges/validate

Description: Find the eligible balance that can be transferred from this account to another account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| accountNumber | String | Account Number for the Account. |
| eligibleTransferAmount | String - Number | Eligible Amount that can be transferred. |
| customerName | String | Name of the Customer that owns the account. |

#### API: Account Package > Task > Transfer Balance

#### > Method: <span class='method-post'>POST</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/transferBalance

Description: Transfer balance to a different account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| transferAmount | String - Decimal| Yes |  amount to transfer | currency with maximum 10 digits in integer part|
|transferCustomerId	| String |Yes|	Customer identifier|	between 1 and 8 digits|
|transferCustomerAccountId	| String |	Yes|	Customer Account identifier|	between 1 and 2 digits|
|transferAccountPackageId	| String  |Yes|	Customer Account Package identifier|	between 1 and 4 digits|

#### API: Account Package > Task > Dismiss Write-Off

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/dismissWriteOff

Description: Dismiss a write-off from an account. This can only be executed on an account that is in write-off.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
|dismissalDate | String - Date| Yes |  Date of the dismissal | YYYY-MM-DD |
|logText	| String |No|Log note abount the dismissal|	maximum 2000 characters|
|reasonDescription	| String |No|Reason for the dismissal|maximum 25 characters|

#### API: Account Package > Task > Cancel Charges

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/cancelCharges

Description: This methods cancel Multiple Usage/Invoice charges for an account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| doNotSendInvoiceIndicator | String | No |  Only used if account is LDC Bill Ready. Y if a dummy invoice should be created to prevent the cancel from being sent to the utilitey. N by default | Must be Y or N |
| cancelUsageIndicator | String | No |  Y to cancel the usage for the charge, No to leave usage un-canceled. N by default | Must be Y or N |
| charges | JSON object | Yes | List of charges to cancel | Must be a List of CancelBillingChargeRequestBean object |
| logNote | String | No | Log Note | Maximum 2000 characters  |

###### CancelBillingChargeRequestBean
| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| accountChargeId | String - Number | Yes |  account charge identifier  | 1 to 5 digits |
| billingChargeId | String - Number | Yes |  billing charge identifier  | 1 to 7 digits |

#### API: Account Package > Task > Cancel Payment Extension

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/paymentExtension/{{paymentExtensionId}}/cancel

Description: This methods cancels an existing/Active Payment Extension.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|
|paymentExtensionId	|Yes|	Payment extension identifier|	between 1 and 3 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| logText | String | Yes | Log text | Maximum 2000 characters  |

#### API: Account Package > Task > Update Banked Usage

#### > Method: <span class='method-put'>PUT</span>
> {{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/netMeterBank/{{netMeteringBankId}}/bankedUsage

Description: Update the usage amount stored in a Net Metering Bank for an account.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|
|netMeteringBankId	|Yes|	Net Metering Bank identifier|	between 1 and 3 digits|

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| usageNetNumber | String - Decimal | Yes | New banked usage number for the bank | 12 digits total, 3 digits. Must be >= 0.000 |
| logText | String | No | Log text | Maximum 2000 characters  |

### Account Activity

#### API: Account Package > Account Activity

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/activity

Description: Returns list of activities for the account order by most recent.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Details

#### API: Account Package > Account Details

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}

Description: Returns details of the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Invoices

#### API: Account Package > Account Package Invoices

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/invoices

Description: Returns list of all invoices for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Charges

#### API: Account Package > Account Package Charges

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/charges

Description: Returns list of all charges for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Usages

#### API: Account Package > Account Package Usages

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/usage

Description: Returns list of all usages for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Markets

#### API: Account Package > Account Package Markets

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/marketDetails

Description: Returns list of all markets for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Packages

#### API: Account Package > Account Packages

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/accountPackages?billingPackageId={{billingPackageId}}

Description: Return list of account packages for the customer. It supports pagination parameters.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Query Parameters
| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| billingPackageId    | No     | Billing package identifier  | between 1 and 3 digits |

### Account Packages General Ledgers

#### API: Account Package > Account Packages General Ledgers

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/generalLedgers

Description: This method returns a list of the valid General Ledgers for the Account. These can be used when making Miscellaneous Adjustments to an account, to specify the specific GL to which the Miscellaneous Adjustment applies.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| required     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| required     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| required     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Response Fields

|   Field   |   Type    |    Description |
|-|-|-|
|     description           |    String      |   Description/Name of the General Ledger      |
|     governingAgencyId     |    String     |    Id for the GL Governing Agency parent record     |
|     genergalLedgerId     |    String      |   Id for the GLs General Ledger parent record |
|     ledgerAccountId   |    String      |   Id for the GLs Ledger Account record (full key is the governingAgencyTkn + genergalLedgerTkn + ledgerAccountTkn, in that order)|

### Account Alerts

#### API: Account Package > Account Alerts

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/alerts

Description: Returns list of alerts for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Pricing Plans

#### API: Account Package > Account Pricing Plans

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/pricingplans

Description: List the full list of Pricing Plan that have been assigned to an account, including history. In addition to the Pricing Plan assignment history, each row will have an object that will list the components (Account_Component) that apply to that specific pricing plan assignment (Account_Pricing).

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Response Fields
|  Field  |  Type  |  Description |
|-|-|-|
| startDate | DATE  |  Date the Plan became effective for the Account |
| endDate | DATE | Date the Plan was no longer effective for the Account |
| statusDescription | TEXT | Status of the assignment, such as Acitve or Closed |
| planDescription | TEXT | Name of the Pricing Plan for this assignment  |
| typeDescription | TEXT | Type of assignment.   Internal for plans charged by the system/supplier.  External for plans charged by an external entity (Utility) |
| revenueClassDescription | TEXT | Revenue Class of the Account at the time of this assignment |
| planBillingsNumber  |  NUMBER  |  Number of times the account has been or was charged on this plan |
| accountPricingId | NUMBER |  Id for the specific assignment to the plan |
| vendorId | NUMBER | Vendor Id for the Pricing Plan of this assignment |
| packageId | NUMBER | Package Id for the Pricing Plan of this assignment |
| id | NUMBER | Pricing Plan Id for the Pricing Plan of this assignment |
| componentDetailList | JSON Array  |   Array of Component objects relating to this assignment |

## Component Detail JSON
|  Field  |  Type  |  Definition |
|-|-|-|
| startDate |  DATE  |  Date the component was effective  |
| endDate |  DATE  |  Date the component was not longer effective  |
| typeDescription | TEXT | Type of Component |
| sequenceNumber  |  NUMBER |  Sequence that the billing engine will process the component |
| pricingReferenceCode | TEXT | Reference Code for the Component.  Used for A la Carte pricing |
| subDescription | TEXT | Sub Type Description of the component |
| productTransferTypeCode | TEXT | Used to determine what usage loop this component applies to |
| accountComponentId | NUMBER | The component ID |
| pricingComponentId | NUMBER | The ID of the Pricing Component for  this Account Component  |

### Account Add Alerts

#### API: Account Package > Account Add Alerts

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/alerts

Description: Create an new Account Alert.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Body

|Field         | Required | Description|  Validation            				|
|---------------|----------|---------------------------------|-----|
| startDate    | Yes     | Date the assignment starts.  Must be current date or later.  | YYYY-MM-DD|
| endDate  | no | date the assignment ends.  YYYY-MM-DD | YYYY-MM-DD   |
| priorityIndicator | No |   Y if this Alert is a High Priority Alert.  Default value is N | Y or N |
| title | Yes | Short description of the Alert.  |   Max 15 characters|
| text | No | Detailed message for this Alert assignment.  If empty, then the default Alert Text from the System Alert will be used.   |  Max 100 characters|

### Account Cancel Billing Charge

#### API: Account Package > Account Cancel Billing Charge

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/cancel/charge

Description: ###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						| 

###### Request Body

|Field         | Required | Description|  Validation            				|
|---------------|----------|---------------------------------|-----|
| accountChargeId	| Yes     | Id of the Account Charge parent of the Billing Charge to cancel. | Number 1-5 digits long|
| billingChargeId   | Yes     | Id of the Billing Charge to cancel. | Number 1-7 digits long|
| logText           | No     | Free form note describing why the charge was canceled. This creates an Account Log | Max 2000 characters|

### Account Get Eligible Fees

#### API: Account Package > Account Get Eligible Fees

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/eligibleFees

Description: Returns account eligible fees.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Reassign Account Package

#### API: Account Package > Reassign Account Package

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/reassign

Description: Reassign Account Package

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|



###### Request Body

|Field         | Required | Description| Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|-|
| createNewBillingPackage | Yes |  Y if a new Billing Package should be created, N if an existing one is used. | Y \| N |
| billingPackageName  |  No | Name of the new Billing Package.  Only used if createNewBillingPackage = Y | max 50 characters |
| doingBusinessAsName |   No | DBA of the new Billing Package.  Only used if createNewBillingPackage = Y | max 50 characters |
| statementName | Opitional | Billing State Name of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise | max 60 characters |
| statementCountryName |   Conditional | Country Name of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise | max 50 characters |
| statementLine1Address |   Conditional | Street Name of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 100 characters |
| statementCityName |  Conditional | City Name of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 50 characters |
| statementStateName |   Conditional | State Name of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 50 characters |
| statementPostalCode | Conditional | Postal Code of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise | max 20 characters |
| statementLine2Address | Conditional | Line 2 address of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise | max 100 characters |
| statementCopyCnt |  Conditional | Number of Copies to create for the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 115 characters |
| deliveryMethodDescription |   Conditional | Delivery Method of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 25 characters |
| statementEmail |  Conditional | Email Address of the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise |max 100 characters |
| dailyLateFeePercentage |   Conditional | Daily Late Fee Percentage for the new Billing Package.  Required if createNewBillingPackage = Y, not used otherwise.  1.0 = 100.0%  | number with 4 decimal | 
| billingPackageId | Conditional | Existing Billing Package to assign to account.   Required if createNewBillingPackage = N, not used otherwise | between 1 and 3 digits

### Get Account Promotions

#### API: Account Package > Get Account Promotions

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/promotions

Description: Get Account Promotions

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Assign Account Promotions

#### API: Account Package > Assign Account Promotions

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/promotions?promotionCode={{promotionCode}}&startDate={{startDate}}

Description: Assign Account Promotions.


###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|



###### Request Query Parameters
| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| promotionCode  | Yes     | Request param promotion Code |  valid characters |
| startDate  | Yes     | Request param start Date |  YYYY-MM-DD |

### Account Valid Taxes

#### API: Account Package > Account Valid Taxes

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/validTaxes

Description: Get Account valid taxes.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Transactions

#### API: Account Package > Account Package Transactions

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/transactions

Description: Returns list of all transactions for the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Bill Method Update

#### API: Account Package > Account Package Bill Method Update

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/billMethods

Description: Updates a bill method for an account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Body

| Field             	| Required	   | Description                          |       Validation            				| 
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| billMethodDescription    		| Yes     | Customer Account Package identifier				  |	 Must a valid string from configuration					| 
| startDate 	| Yes     | Start Date of bill method		  |	YYYY-MM-DD					|

### Account Package Bill Method Choices

#### API: Account Package > Account Package Bill Method Choices

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/billMethods

Description: Returns list of all valid bill method choices for the account. Please see sample response for more details.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package ldcAccountNumber

#### API: Account Package > Account Package ldcAccountNumber

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/ldcAccountNumber?getValidFormat=true

Description: Returns account package by Account Number.

###### Request Parameters

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| required     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| required     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| required     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Query Parameters
| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| getValidFormat  | No     | Valid format  |  true or false |

### Account Package ldcAccountNumber

#### API: Account Package > Account Package ldcAccountNumber

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/ldcAccountNumber

Description: Updates a bill method by account number.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Body

| Field             	| Required	   | Description                          |       Validation            				| 
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| ldcAccountNumber    		| Yes     | Account number identifier				  |	 Must be the ones valid on an account 					| 
| changeDate 	| Yes     |  Date of bill method		  |	YYYY-MM-DD					|

### Account End Exemptions

#### API: Account Package > Account End Exemptions

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/endExemptions?endDate={{endDate}}&exemptionIds={{exemptionIds}}

Description: This will end one to many Exemptions.  A List of Exemption Tokens for the Acocunt Package will be passed with one end date.  All Exemptions in the list will be ended.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						| 

###### Request Body

|  Field     |    Required     |   Description | Validation            				|
|------------|-----------------|--------------|-------|
| endDate    |   Yes      |  Date the Exemption should be eneded.  If the end date is before the start date of the exemption, it will be changed to the start date.   If the exemption is already ended, it will only update the end date if the new end date is before the old end date|  YYY-MM-DD |
| exemptionIds |  Yes | List of Account Exemption Tokens to end.  This list should contain at least 1 token | List of valid IDs |

### Account Package revenueClass

#### API: Account Package > Account Package revenueClass

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/revenueClass

Description: Update Revenue Class of the account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Body

| Field         | Required | Description                                                                    |Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|--------|
| logText  | No | Log text description | Max 2000 characters |
| revenueClassDescription | Yes | a list from the client configuration of the account| Must a valid string from configuration |

### Account Package applyDeposits

#### API: Account Package > Account Package applyDeposits

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/applyDeposits

Description: Update deposits of the account.

###### Request Parameters

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| required     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| required     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| required     | Customer Account Package identifier  |	 between 1 and 4 digits						| 

###### Request Body

| Field         | Required | Description                                                                    |Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|--------|
| logText  | not required | Log text description | Max 2000 characters |
| refundDescription | required | a list from the client configuration of the account| Must a valid string from configuration |

### Account Package Summary

#### API: Account Package > Account Package Summary

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/summaryInfo

Description: Returns summary account package data for a specifig customer account and account package ID.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Exemptions

#### API: Account Package > Account Package Exemptions

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/exemptions

Description: Returns list of account package exemptions

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Account Package Add Exemption

#### API: Account Package > Account Package Add Exemption

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/exemptions

Description: Add account package exemptions.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|


###### Request Body

| Field         | Required | Description                                                                    |validation|
|---------------|----------|--------------------------------------------------------------------------------||
|categoryDescription    | Yes |The Category of the Exemption, such as Tax or Collections or Life Support|Max 25 characters|
|startDate  | Yes|Date the Accont Exemption becomes effective|Date YYYY-MM-DD|
|endDate    | No|Date the Account Exemption becomes inactive|Date YYYY-MM-DD|
|exemptPercent  |Conditional (Required if categoryDesc = 'Tax')|Exemption Percentage for this Tax Exemption. Not used for non-tax exemptions. Value will be between 0 and 1, with 1 = 100% exempt|Decimal at most 4 decimal places. Max value = 1.0|
|reasonDescription  |No|Reason for the Exemption| Max 25 characters|
|taxCertificateDescription|No|Certificate that applies to this Tax Exemption, not use for non-tax exemptions| Max 25 characters|
|taxTypes|Conditional (Required if categoryDesc = 'Tax')|Type of this Exemption applies to. Used mainly for defining specific Taxes, such as Sales or State Tax| Max 50 characters|

### Reactivate Account

#### API: Account Package > Reactivate Account

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/reactivate

Description: Returns details of activated account.


###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

### Collection Steps Assign Details

#### API: Account Package > Collection Steps Assign Details

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/collections/{{pathId}}/steps/{{stepId}}/assignments/{{assignmentId}}

Description: ###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						| 
| assignmentId    | Yes     | Assigment identifier  | between 1 and 3 digits |
| pathId  | Yes | Path identifier  | between 1 and 3 digits|
| stepId | Yes | Step identifier  | between 1 and 3 digits |

### Account Package Get Market Detail

#### API: Account Package > Account Package Get Market Detail

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/marketDetails/6155

Description: Retrieve all the data for the specified Marekt Detail, as well as, determining if the End Date can be changed and what the valid Bill Methods are.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|
| marketDetailId    | Yes     | Market identifier  | between 1 and 4 digits						|


###### Response Fields

| Field | Type | Definition|
|-|-|-|
|   typeDescription                | String    |  Type of Market Detail, such as LDC Account Number or Bill Method   |
|   canShowEndDate          | String    | true if the End Date can be changed on this record.  false otherwise    |
|   endDate                 | String    | Current End Date of the Market Detail  YYYY-MM-DD   |
|   transactionId                 | String    | Current Transaction ID of the Market Detail    |
|   ldcAccountNumber           | String    | The LDC Account Number of the Market Detail    |
|   processedIndicator            | String   | Current Process status of the Market Detail    |
|   sdpNumberCode           | String    |  Current SDP Code for the Market Detail   |
|   marketStatusDescription        | String    |  Current Market Status Description for the Market Detail   |
|   detailAmount               | String   | Current Detail Amount for the Market Detail    |
|   billMethodDescriptionChoices   | String    | comma separated list of valid Bill Methods for this Account.   |
|   originalTransactionId         | String    | Current Original Transaction ID for the Market Detail    |
|   flowDirectionDescription       |  String   | Current Flow Direction for the Market Detail - Inbound or Outbound  |
|   scriptName              | String    |  Current Script Name for the Market Detail   |
|   interruptibleIndicator        | String    | Y or N - Current Interruptible status for the Account that has this Market Detail    |
|   reasonCode              | String    | Current Rason Code for this Market Detail    |
|   billMethodDescription          | String    | Current Bill Method for this Market Detail    |
|   effectiveDate           | String    | Current Effective Date for this Market Detail  YYYY-MM-DD   |
|   reasonDescription              | String    |  Current Rason Description for this Market Detail   |
|   startDate               | String    |  Current Start Date for this Market Detail  YYYY-MM-DD |

### Get Service Contract Details

#### API: Account Package > Get Service Contract Details

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/serviceContracts/{{serviceContractId}}

Description: Retrieve service contract details based on service contract id.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| serviceContractId 	| Yes     | Service Contract identifier		  |	 between 1 and 8 digits						| 

###### Response Fields

| Field             	| Required	   | Description                          
|-|-|-|
|  contractId                |  TEXT    |  Supplied provided ID for a Contract.  This is not a token/id.  It is more of a reference code    |
|  contractEffectiveDate     |  DATE    |  Date the Contract became effective or is scheduled to become effective    |
|  originalExpirationDate        |  DATE    |  Date the contract was originally scheduled to expire.     |
|  contractExpirationDate    |  DATE    |  Date the contract expired or is currently scheduled to expire    |
|  billingUomDescription            |  TEXT    |  Unit of Measure fot the charges/billing.  Used for Gas to ensure that regardless of the UOM sent by the LDC, the correct UOM will be charged/billed for the account.  For example, LDC sends CCF usage, but prices are in MCF     |
|  fixedCommodityAmount         |  DECIMAL    |  Rate that usage should be charged during this contract.   This will override any rate that the account's pricing plan tries to charge    |
|  fixedChargeAmount           |  DECOMAL    |  Flat fee that should be charged to the account.  This will override any customer charge type flat fee from the pricing plan    |
|  contractTypeDescription          |  TEXT    |  Type of service contract, such as New or Renewal or Winback    |
|  contractTypeDescriptionValues    |  TEXT    |  This can be ignored.  |
|  utilityRateAmount            |  DECIMAL    |  Rate the LDC/Utility charges the account    |
|  defaultPricingPlanDescription    |  TEXT    |  Rollover plan.  Once the contract expires, if there is not a renewal, this is the plan that the account will be rolled to    |
|  priceAdjustmentFactorNumber         |  DECIMAL    |  Used to store an agreed upon Heat Rate for Gas Accounts    |
|  usageAdjustmentFactorNumber         |  DECIMAL    |  Used to store an agreed upon Fuel Loss Factor for Gas Accounts    |
|  expirationProcessedIndicator    |  Y or N    |  Y if the Contract has already been processed and finalized by the expiration job.  N if it has not yet been finalized.    |
|  rateChangeSentIndicator         |  Y or N    |  Y if a rate change has been sent to the market for this Contract.  N if one has not been sent    |
|  renewalNoticeSentIndicator      |  Y or N    |  Y if a renewal notice has already been sent for this contract.  N if it has not    |
|  excludeDerationIndicator        |  Y or N    |  Y if the line loss calculation for this account should exclucde Deration.  N if it should include Deration    |
|  waiveEtfIndicator               |  Y or N    |  Y if this account should not be charged and Early Termination Fee if this contract is terminated early.  N if it can be charged    |
|  etfTypeDescription               |  TEXT    |  Type of Early Termination Fee. Such as Flat/Percent/Residual    |
|  etfValueAmount               |  DECIMAL    |  Estimated value of the contract.  This will be used if the Early Termination Fee is calculated based on the residual value.    |
|  etfPercentValue           |  DECIMAL    |  This field can be ignored.    |
|  residualValueAmount          |  DECIMAL    |  The value of the Contract, used when the Early Termination Fee type is Residual    |
|  pricingTypeDescription           |  TEXT    |  Used for ad-hoc pricing, giving the supplier a name that can be used to identify the type of rate the account is on    |
|  pricingReferenceCodesText |  TEXT    |  Used for Ad-hoc pricing, this is a comma separated list of Reference Codes, defining the pricing components that should be charged to this account    |
|  vendorId                |  NUMBER    |  Id for the Supplier that owns this Acocunt and Service Contract    |
|  packageId                |  NUMBER     |  Id for the Package (Electric / Gas) this account is assigned to    |
|  pricingPlanId            |  NUMBER    |  Id for the Pricing Plan for this Service Contract     |
|  customerId               |  NUMBER    |  Customer Id for this Contract    |
|  serviceAgreementId       |  NUMBER    |  Service Contract Id for this Contract  |
|  createdTimeStamp   |  TIMESTAMP  |  Date and Time the Contract was created in the system |
|  createdByUserId | TEXT   |  Userid of the user or process that created the contract in the system |
|  updatedTimeStamp   |  TIMESTAMP  |  Date and Time the Contract was last updated |
|  updatedByUserId | TEXT   |  Userid of the user or process that last updated the contract in the system |

### List Agents

#### API: Account Package > List Agents

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/agents

Description: Returns list of all the Agents assigned to an Account. It supports pagination parameters.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| startDate | String - Date | Start Date of the assignment |
| endDate | String - Date | End Date of the assignment |
| agentCode | String | Code for this Agent |
| name | String | Name for this Agent |
| typeDescription | String | Type of Agent (Master/Agent/Sub Agent) |
| signedIndicator | String | Y \| N - Y if Agent signed the account. N otherwise |
| planDescription | String | Name of the Commission Plan associated with this Agent/Account |
| fixedUnitNumber | String - Number | Rate or Amount of the Commission |
| id | String - Integer | Id for the agent |
| accountAgentAssignmentId | String - Integer | Id for this Agent/Account assignment |
| record | String - Integer | Unique sequence for the returned rows |

### Service Contracts

#### API: Account Package > Service Contracts

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/serviceContracts

Description: Return list all of the Service Contracts that are assigned to an Account

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| Field | Type - Format | Definition |
| contractEffectiveDate | String - Date | Start Date of the Service Contract |
| contractExpirationDate | String - Date | Start Date of the Service Contract |
| planDescription | String | Pricing Plan for the Service Contract |
| contractId | String | External ID or cross reference code for the Service Contract |
| fixedChargeAmount | String - Number | Fixed charge amount for this Service Contract |
| fixedCommodityAmount | String - Number |  Fixed commodity rate for this Service Contract |
| priceAdjustmentFactorNumber | String - Number |  Used to store an agreed upon Heat Rate for Gas Accounts |
| usageAdjustmentFactorNumber | String - Number |  Used to store an agreed upon Fuel Loss Factor for Gas Accounts or line Loss Factor for Electric Accounts |
| salesDate | String - Date | Date the contract was sold to the customer |
| serviceAgreementId | String - Integer | System ID for the Service Contract |
| record | String - Integer | Unique sequence for the returned rows |

### List Payment Extensions

#### API: Account Package > List Payment Extensions

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/paymentExtensions

Description: Return list all of the Payment Extensions for the specificed Account

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|
|customerAccountId|Yes|	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	|Yes|	Customer Account Package identifier|	between 1 and 4 digits|


###### Response Fields
| Field | Type - Format | Description |
|-|-|-|
| Field | Type - Format | Definition |
| accountPackageId | String - Integer | Customer Account Package identifier|
| accountNumber | String - Integer | Customer Account identifier|
| customerId | String - Integer | Customer identifier|
| customerAccountId | String - Integer | Customer Account identifier|
| extensionAmount | String - Number | Amount of the Payment Extension  |
| statusDate | String - Date |  Last date that action was taken on the Pay Extension  |
| paymentExtensionId | String - Integer |  Payment Extension identifier|
| requestedByName | String |  Name of the person that requested the Pay Extension  |
| statusDescription | String | Status of the Pay Extension  |
| logText | String | Log Note pertaining to the Pay Extension  |
| record | String - Integer | Unique sequence for the returned rows |

### Account Package Modify Market Detail

#### API: Account Package > Account Package Modify Market Detail

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/marketDetails/6155

Description: Updates account market details

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|
| marketDetailId    | Yes     | Market identifier  | between 1 and 4 digits						|

###### Request Body
| Field | Required | Description|  Validation            				|
|-|-|-|-----|
|   startDate                | Yes    |  Type of Market Detail, such as LDC Account Number or Bill Method   | YYYY-MM-DD|
|   endDate                 |  No    | Current End Date of the Market Detail    | YYYY-MM-DD |
|   value                 |  Yes    | the value varies for different market types, need to call Get Market Detail API to get the market type    | Must a valid string from configuration |

### Account Taxes

#### API: Account Package > Account Taxes

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/taxes

Description: Returns all of the Taxes and Tax Exemptions that can be assessed to an account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
|customerId	| Yes |	Customer identifier|	between 1 and 8 digits|
|customerAccountId|	 Yes |	Customer Account identifier|	between 1 and 2 digits|
|accountPackageId	| Yes |	Customer Account Package identifier|	between 1 and 4 digits|


## Response Fields
| Field | Type - Format | Description |
|-|-|-|
| revenueClassDescription |  String | Revenue Class of the Account / Tax combination |
| taxingJurisdiction (should be taxName in external API) | String | The Specific tax name |
| taxType | String | type of tax, such as Sale or GRT |
| taxOnTax | String - Y or N |  Y if this tax can be calculated using an amount that has already been taxed.  N otherwise |
| taxRate | String - Decimal | Rate for the tax.  This is the actual tax rate before any exemptions are applied |
| startDate | String - Date | Start Date of any active Tax Exemption that applies to this specific tax.  Empty if there is not an exemption |
| endDate | String - Date | End Date of any active Tax Exemption that applies to this specific tax.  Empty if there is not an exemption |
| exemptPercentage | String - Decimal | Exemption Percent for this specific tax.  Empty if there is not an exemption.  This value will be between 0 and 1, where 1 = 100% and 0.1 = 10% |
| exemptRate | String- Decimal | Effective Rate for the tax after any exemptions have been applied |
| accountExemptionId | String - Number | Id for this Tax Exemption.  Empty if there is not an exemption.   |
| record | String - Number | Unique sequence for the returned rows |

### Account Package Net Meter Banks

#### API: Account Package > Account Package Net Meter Banks

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/netMeterBanks

Description: List the net metering banks for an account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

## Response Fields
| Field | Type - Format | Definition |
|-|-|-|
| startDate | String - Date | Start Date of the Bank |
| endDate | String - Date | End Date of the Bank |
| typeDescription | String | Type of Bank.  Either Usage or Financial |
| statusDescription | String | Status of the Bank, such as Active or Closed |
| settleUpMonthNumber | String - Integer | Number representing the month the bank is scheduled to settle-up.  1 = Jan / 12 = Dec |
| settleUpTypeDescription | String | Type of settle-up.  Such as Consume or Credit |
| chargeNetAmount | String - Decimal | Financial balance for this Bank.  Only valid if bank type is Financial |
| usageNetNumber | String - Decimal | Usage balance for this Bank.  Only valid if the bank type is Usage |
| logText | String | Log Text/Note abount this Bank |
| createdByUserId | String | userid of user that created the bank |
| createdTimeStamp | String - Timestamp | date/Time the Bank was created |
| updatedTimeStamp | String | userid of user that last updated the bank |
| updatedTimeStamp | String - Timestamp | date/Time the Bank was last updated |
| record | String - Integer | unique Id for the record |
| netMeteringBankId	| String - Integer |	Net Metering Bank identifier|

### Transaction Fields

#### API: Account Package > Transaction Fields

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/transactionFields?typeDescription={{typeDescription}}

Description: Get the fields for an account for a specific transaction

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Query Parameters

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| typeDescription  		| Yes          | type description   				  |	    					|

## Response Fields
| Field | Type - Format | Definition |
|-|-|-|
| mappingTableNumber | String - Integer | Mapping Table sequence.  | 
| mappingTableName | String | Name of the field's Database table |
| mappingFieldName | String | Name of the Field |
| mappingFieldValue | String | Default value for the field |
| fieldName | String | Label that can be used for the Field |
| maxLength | Integer (not String) | Maximum length for the field | 
| possibleValues | String | Comma separated list of valid values for the field, to be used to display to the user |
| possibleValuesMap | String - JSON Map | Lookup map for translating possibleValues to what is actually needed in the transaction. For example, The possibleValues field may have a value that is 'Contract Expired', however, the text 'CCE' should be sent in the transaction.  The user can be presented with the possibleValues and then what they select can be translated into the correct value using the possbileValuesMap |
| isEnabled | String - Y or N | Y if the field can be edited.  N if it is display only |
| requirementDescription | String | Mandatory\|Conditional\|Optional - If the field is Mandatory or Conditional, the field must have a value |   
| datatypeDescription | String | Defines the fields data type: Date, Integer, Time, String, BigDecimal |
| displayIndicator | String - Y or N | Y if the field should be displayed to the user.  N if it should not be |

### Transaction Fields

#### API: Account Package > Transaction Fields

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/transactionFields?typeDescription={{typeDescription}}

Description: Get the fields for an account for a specific transaction

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Query Parameters

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| typeDescription  		| Yes          | type description   				  |	    					|


###### Request Body
| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| changeFieldName | String | Yes | Mapping_Field_Name of the field that was just changed | between 1 and 50 characters |
| changeFieldValue | String | Yes | Value of the field that was just changed | between 1 and 50 characters |
| fieldValues | String - JSAON Array | Yes | Array of each field that is displayed on the screen | json array below |

###### fieldValues
| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| mappingTableNumber | String | Yes | Mapping Table sequence.  | 1 digit  |
| mappingFieldName  | String  | Yes | 	Name of the Field  | Max 50 characters  |
| mappingTableName | String | Yes | Name of the field's Database table  | Max 50 characters  |
| value | String | No | New value that has been entered by the user on the UI.  If it is a possibleValue, this shoudl be the translated value from the possibleValuesMap | Can be anything, Date/Decimal/Integer/String/etc |

## Response Fields
| Field | Type - Format | Definition |
|-|-|-|
| mappingTableNumber | String - Integer | Mapping Table sequence.  | 
| mappingTableName | String | Name of the field's Database table |
| mappingFieldName | String | Name of the Field |
| mappingFieldValue | String | Default value for the field |
| fieldName | String | Label that can be used for the Field |
| maxLength | Integer (not String) | Maximum length for the field | 
| possibleValues | String | Comma separated list of valid values for the field, to be used to display to the user |
| possibleValuesMap | String - JSON Map | Lookup map for translating possibleValues to what is actually needed in the transaction. For example, The possibleValues field may have a value that is 'Contract Expired', however, the text 'CCE' should be sent in the transaction.  The user can be presented with the possibleValues and then what they select can be translated into the correct value using the possbileValuesMap |
| isEnabled | String - Y or N | Y if the field can be edited.  N if it is display only |
| requirementDescription | String | Mandatory\|Conditional\|Optional - If the field is Mandatory or Conditional, the field must have a value |   
| datatypeDescription | String | Defines the fields data type: Date, Integer, Time, String, BigDecimal |
| displayIndicator | String - Y or N | Y if the field should be displayed to the user.  N if it should not be |

### Create Transaction

#### API: Account Package > Create Transaction

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/sets/{{customerAccountId}}/accounts/{{accountPackageId}}/createTransaction?typeDescription={{typeDescription}}

Description: Create the specified transaction for the specified account.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    		| Yes     | Customer identifier				  |	 between 1 and 8 digits 					|
| customerAccountId 	| Yes     | Customer Account identifier		  |	 between 1 and 2 digits						| 
| accountPackageId  	| Yes     | Customer Account Package identifier  |	 between 1 and 4 digits						|

###### Request Query Parameters

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| typeDescription  		| Yes          | type description   				  |	    					|


###### Request Body
| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| mappingTableNumber | String | Yes | Mapping Table sequence.  | 1 digit  |
| mappingFieldName  | String  | Yes | 	Name of the Field  | Max 50 characters  |
| mappingTableName | String | Yes | Name of the field's Database table  | Max 50 characters  |
| value | String | No | New value that has been entered by the user on the UI.  If it is a possibleValue, this shoudl be the translated value from the possibleValuesMap | Can be anything, Date/Decimal/Integer/String/etc |

## Response Fields
| Field | Type - Format | Definition |
|-|-|-|
| marketTransactionQueueId | String - Integer | Marketer Transaction identifier |
| accountPackageDetailId | String - Integer | Account Package Detail identifier |