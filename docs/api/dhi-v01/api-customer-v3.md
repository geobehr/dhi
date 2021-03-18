

## Collection: Customer

 Customer contains endpoints for customer.

### Customer

#### API: Customer > Customer

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}

Description: Returns customer details.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |



###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| contactText    | String      | Contact text  | 
| creditRatingCode    | String      |  Credit rating code | 
| customerName    | String      |  Customer name | 
| externalCrossReferenceId    | String      |  External cross reference ID | 
| firstName    | String      |  Customer first name | 
| lastName    | String      |  Customer last name | 
| phoneticCustomerName    | String      |  Phonetic customer name | 
| suffixName    | String      |  Customer suffix name | 
| titleName    | String      |  Customer title name | 
| userName    | String      |  User name | 
| updatedByUserId    | String      |  Updated by  user ID | 
| createdByUserId    | String      |  Created by user ID |
| createdTimeStamp    | String - Timestamp      |  Timestamp creation |
| updatedTimeStamp    | String - Timestamp      |  Timestamp last updated |
| customerId    | String - Integer      | Customer identifier  |
| cellularNumber    | String - Integer      | Cell number  |
| checkAllowedIndicator    | String      |  Check allowed indicator | 
| checkFeeIndicator    | String      |  Check fee indicator | 
| creditRatingIndicator    | String      |  Credit rating indicator | 
| creditRatingSourceDescription    | String      |   Credit rating source description| 
| doNotCallIndicator    | String      |  Do not call indicator | 
| doNotEmailIndicator    | String      | Do not email indicator  | 
| emailAddress    | String      |  Email address | 
| federalTaxIdNumber    | String - Integer       | Federal tax ID number  | 
| groupDescription    | String      |  Group description | 
| homePhoneNumber    | String- Integer       |  Home phone number | 
| languagePreferenceCode    | String      |  Language | 
| parentOrganizationDescription    | String      | Parent organization description  | 
| personalIdNumber    | String - Integer       | Personal ID number  | 
| phoneExtensionNumber    | String - Integer       | Phone extension number  | 
| securityAnswerText    | String      |  Security answer | 
| securityQuestionText    | String      |  Security question | 
| servicePhoneNumber    | String      | Service phone number  | 
| socialSecurityCode    | String - Integer       | Social security number  | 
| stateTaxIdNumber    | String      |  State tax ID number | 
| temporaryPasswordIndicator    | String      |  Temporary password indicator | 
| associateEmailAddress    | String      | Associate email address  | 
| associateUserName    | String      |  Associate userName | 
| businessPhoneNumber    | String - Integer      | Business phone number  |

### Customer Alert

#### API: Customer > Customer Alert

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/alerts

Description: Returns customer alert details.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |

###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| record    | String - Integer     | Row identifier  | 
| customerId    | String - Integer      | Customer identifier  |
| isHighPriority    | String      | Indicate if high priority | 
| alertAssignmentId    | String - Integer       | Alert assigment identifier | 
| alertId    | String - Integer       | Alert identifier | 
| text    | String      | Text | 
| title    | String      | Tittle | 
| type    | String      | Type |

### Customer Notifications

#### API: Customer > Customer Notifications

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/notifications

Description: Returns customer notifications.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |

###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| record    | String - Integer     | Row identifier  | 
| canceledDate    | String - Date       | Cancelled date  |
| documentDate    | String - Date       | Document date | 
| documentNumber    | String - Integer      | Document identifier | 
| printedDate    | String - Date       | Printed date | 
| systemDocumentId    | String - Integer      | System document identifier | 
| systemTemplateId    | String - Integer     | System template identifier | 
| templateName    | String      | Template name |

### Customer Summary

#### API: Customer > Customer Summary

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/summaryInfo?firstOne={{firstOne}}

Description: Returns customer summary data and billing and account package data based on customer ID. 

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |


###### Request Query Parameters
| Parameter         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| firstOne    | No     | Allows to return only the first billing and account package | true or false |



###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| customerId    | String - Integer     |  Customer identifier | 
| emailAddress    | String      | Email address| 
| baNumber    | String - Integer     | Bank account number | 
| closedAccounts    | String - Integer     |  Number of closed accounts | 
| billGroups    | String  - Integer    | Number of bill groups | 
| activeAccounts    | String  - Integer    | Number of active accounts | 
| inactiveAccounts    | String - Integer     | Number of inactive accounts| 
| customerName    | String      | Customer name | 
| languagePreferenceCode    | String      | Language preference code| 
| businessPhoneNumber    | String - Integer     | Business phone number| 
| servicePhoneNumber    | String - Integer      | Service phone number | 
| securityQuestionText    | String      |Security question | 
| securityAnswerText    | String      | Security answer | 
| totalBalanceAmount    | String - Number      | Total balance| 
| totalDueAmount    | String - Number      | Total due amount | 
| totalPastDueAmount    | String - Number      | Total past due amount | 
| totalHeldDepositAmount    | String - Number      | Total held deposit amount | 
| totalDeferredAmount    | String - Number      | Total deferred amount |
| billingInfo    | String - JSON Object      |  Billing info object | 

###### BillingInfo
| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| lastBillEndDate    | String - Date      |  last bill end date | 
| postalCode    | String      |  Postcal code | 
| lastBillBeginDate    | String - Date      | Last bill begin date  | 
| lastPaidDate    | String - Date      |  Last paid date | 
| cityName    | String      |  City name | 
| streetAddress    | String      |  Street address | 
| nextDueDate    | String - Date      |  Next due date | 
| lastBillDate    | String - Date      |  Last bill date | 
| stateCode    | String      |  State code | 
| paymentMethodType    | String      |  Payment method type | 
| key    | String - Integer     |   Key identifier | 
| billingActiveAccounts    | String - Integer    | Number of active billing accounts  | 
| billingInactiveAccounts    | String - Integer      |  Number of inactive billing accounts  | 
| billingClosedAccounts    | String - Integer     |  Number of closed billing accounts  | 
| billingMarketerName    | String      |  Marketer name | 
| billingEmailAddress    | String      |  Email address | 
| nextDraftDate    | String - Date      |   Next draft date | 
| nextStatementDate    | String - Date      |   Next statement date | 
| lastPaidAmount    | String - Number     | Last paid amount  | 
| billingBalanceAmount    | String - Number     |  Balance amount | 
| paymentMethodAccountType    | String      |  Payment method account type | 
| lastBillAmount    | String - Number     |  Last bill amount | 
| billingPackageId    | String - Integer     |  Billing package identifier | 
| billPackageName    | String      |  Billing package name | 
| billingPastDueAmount    | String - Number     |  Past due amount | 
| billingHeldDepositAmount    | String - Number     |  Held deposit amount | 
| billingDueAmount    | String - Number     |  Due amount | 
| billingNumber    | String - Integer      |  Billing number | 
| deliveryDescription    | String      | Delivery description  | 
| billingDeferredAmount    | String - Number     |  Deferred amount | 
| lastBillCustomerStatementId    | String - Integer     |  Customer statement identifier | 
| lastPaidBankId    | String - Integer     |  Last paid bank identifier | 
| lastPaidPaymentId    | String - Integer     |  Last payment identifier | 
| paymentMethodId    | String - Integer     |  Payment method identifier | 
| paymentMethodReferenceId    | String - Integer     | Payment method reference identifier  | 
| nextDraftAmount    | String - Number     |  Next draft amount | 
| contactAddressId    | String  - Integer    |  Contact address identifier | 
| billingAddressId    | String  - Integer    |  Billing address identifier | 
| accountInfo    | String - JSON Object      | AccountInfo info object  | 


###### AccountInfo
| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| commodity    | String      |  Commodity |
| contractStartDate    | String - Date      | Contract start date  |
| serviceStartDate    | String - Date      | Service end date  |
| contractEndDate    | String - Date      |  Contract end date |
| distributorName    | String      |  Distributor name |
| billMethod    | String      |  Bill method |
| serviceEndDate    | String - Date      |  Service end date |
| isMaster    | String      |  Indicate if it is mater |
| brandingName    | String      | Branding name  |
| marketerName    | String      |  Marketer name |
| key    | String - Integer     | Key identifier  |
| accountName    | String      | Account name  |
| territoryCode    | String      |  Territory code |
| requestedStartDate    | String - Date      |  Requested start date |
| requestedEndDate    | String - Date      |  Requested end date |
| revenueClass    | String      |  Revenue class |
| contractId    | String - Integer     | Contract identifier  |
| statusDescription    | String      |  Status decription |
| planDescription    | String      |  Plan description |
| accountNumber    | String - Integer     | Account number  |
| ldcAccountNumber    | String - Integer     |  LDC account number |
| subStatusDescription    | String      | Sun status description  |
| accountPackageId    | String - Integer     |  Account package identifier |
| balanceAmount    | String - Number     |  Balance amount |
| dueAmount    | String - Number     |  Due amount |
| pastDueAmount    | String - Number     |  Past due amount |
| heldDepositAmount    | String - Number     | Held deposit amount  |
| customerAccountId    | String      | Customer account identifier   |
| deferredAmount    | String - Number     |  Deferred amount |
| commodityAmount    | String - Number     |  Commodity amount |
| taxExemptPercentage    | String - Number     |  Tax exempt percentage |
| writeOffDescription    | String      | WriteOff Description |
| premiseInfo    | String - JSON Object     |  Premise info object |
| netMeterInfo    | String - JSON Object     |  Net Meter info object |


###### premiseInfo
| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| meterNumber    | String - Integer     | Meter number  |
| postalCode    | String - Integer     |  Postal code |
| premiseId    | String  - Integer    |  Premise identifier |
| cityName    | String      |  City name |
| streetAddress    | String      | Street address  |
| ldcRateCode    | String      |  Rate code |
| tagCapacity    | String      |  Tag capacity  |
| stateCode    | String      |  State code |
| tagNITS    | String - Integer     | Tag units  |
| loadProfile    | String      |  Load profile |
| gasPoolId    | String      |  Gas Pool Id |
| key    | String - Integer     |  Key identifier |
| countyName    | String      | County name  |
| meterInstallDate    | String - Date      | Meter install date  |
| servicePointId    | String - Integer     |  Service point identifier |


###### netMeterInfo
| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| usageBank    | String - Integer     | Usage Bank  |
| settleUpMonth    | String - Integer     |  Settle Up Month |
| id    | String  - Integer    |  Net Meter identifier |
| type    | String      |  Type |
| settleUpType    | String      | Settle Up Type |
| chargeBank    | String      |  Charge Bank Name |
| status    | String      |  Status  |

### End Alert Assignment

#### API: Customer > End Alert Assignment

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/alerts/{{alertId}}/assignments/{{alertAssignmentId}}?endDate={{endDate}}

Description: Update the end date for Customer/ Bill Group/ Account Package Alert


###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| alertId    | Yes     | Alert identifier  | between 1 and 3 digits |
| alertAssignmentId    | Yes     | Alter assigment identifier  | between 1 and 6 digits |



###### Request Query Parameters
| Parameter         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| endDate    | Yes     | End date  | YYYY-MM-DD |

### Edit Customer Details

#### API: Customer > Edit Customer Details

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/{{customerId}}

Description: Updates customer details.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |


###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| contactText   | String | No |  | The contact name associated for the customer     | between 0 and 500 characters |
| creditRatingCode         | String | No | The credit rating code for the customer   | between 0 and 25 characters |
| externalCrossReferenceId | String - Integer| No | The external cross reference for the customer  | between 0 and 500 characters |
| firstName    | String | No  | The customer's first name | between 0 and 500 characters |
| lastName    | String | No   | The customer's last name  | between 0 and 500 characters |
| phoneticCustomerName     | String | No| The customer's name pronunciation.  | between 0 and 100 characters |
| suffixName    | String | No | The customer's suffix name  | between 0 and 5 characters |
| titleName    | String | No  | The customer's title name  | between 0 and 5 characters |
| userName    | String | No   | Valid userName  | between 0 and 500 characters |
| cellularNumber    | String | No        | Set modbile phone number  | must be 10 digits or empty|
| checkAllowedIndicator    | String | Yes | Allows check payments | Y \| N |
| checkFeeIndicator    | String | Yes     | Allows fees for check payments | Y \| N |
| creditRatingIndicator    | String | Yes | Allows credit rating codes |Y \| N |
| creditRatingSourceDescription       | String | No| Credit rating description  | between 0 and 25 characters |
| doNotCallIndicator    | String | Yes    | Allows to call the customer |Y \| N |
| doNotEmailIndicator    | String | Yes   | Allows to email the customer |Y \| N |
| emailAddress    | String | No          | A valid email address for the customer  | between 0 and 50 characters |
| federalTaxIdNumber        | String - Integer | No| Tax Id number  | between 0 and 9 digits
| groupDescription    | String | No      | Group description for the customer  | between 0 and 25 characters|
| homePhoneNumber    | String - Integer | No       | Home phone number  | must be 10 digits or empty|
| languagePreferenceCode    | String | No| English \| Spanish - Set the language preference for the customer  | between 0 and 10 characters |
| parentOrganizationDescription    | String | No| Organization description for the customer  | between 0 and 25 characters|
| personalIdNumber    | String - Integer | No| Personal Id number  | between 0 and 10 digits |
| phoneExtensionNumber    | String - Integer | No| Set phone extension number  | between 2 and 5 digits |
| securityAnswerText    | String | No| Security answer description  | between 0 and 2000 characters
| securityQuestionText    | String | No| Security question  | between 0 and 2000 characters
| servicePhoneNumber    | String - Integer | No| Service phone number  | must be 10 digits or empty
| socialSecurityCode    | String - Integer | No| Social security last 4 numbers  | must be 4 digits or empty |
| stateTaxIdNumber    | String - Integer | No| State tax Id number | between 0 and 8 digits
| temporaryPasswordIndicator    | String | Yes| Allows temporary password | Y \| N |



###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| contactText    | String      | Contact text  | 
| creditRatingCode    | String      |  Credit rating code | 
| customerName    | String      |  Customer name | 
| externalCrossReferenceId    | String      |  External cross reference ID | 
| firstName    | String      |  Customer first name | 
| lastName    | String      |  Customer last name | 
| phoneticCustomerName    | String      |  Phonetic customer name | 
| suffixName    | String      |  Customer suffix name | 
| titleName    | String      |  Customer title name | 
| userName    | String      |  User name | 
| updatedByUserId    | String      |  Updated by  user ID | 
| createdByUserId    | String      |  Created by user ID |
| createdTimeStamp    | String - Timestamp      |  Timestamp creation |
| updatedTimeStamp    | String - Timestamp      |  Timestamp last updated |
| customerId    | String - Integer      | Customer identifier  |
| cellularNumber    | String - Integer      | Cell number  |
| checkAllowedIndicator    | String      |  Check allowed indicator | 
| checkFeeIndicator    | String      |  Check fee indicator | 
| creditRatingIndicator    | String      |  Credit rating indicator | 
| creditRatingSourceDescription    | String      |   Credit rating source description| 
| doNotCallIndicator    | String      |  Do not call indicator | 
| doNotEmailIndicator    | String      | Do not email indicator  | 
| emailAddress    | String      |  Email address | 
| federalTaxIdNumber    | String - Integer       | Federal tax ID number  | 
| groupDescription    | String      |  Group description | 
| homePhoneNumber    | String- Integer       |  Home phone number | 
| languagePreferenceCode    | String      |  Language | 
| parentOrganizationDescription    | String      | Parent organization description  | 
| personalIdNumber    | String - Integer       | Personal ID number  | 
| phoneExtensionNumber    | String - Integer       | Phone extension number  | 
| securityAnswerText    | String      |  Security answer | 
| securityQuestionText    | String      |  Security question | 
| servicePhoneNumber    | String      | Service phone number  | 
| socialSecurityCode    | String - Integer       | Social security number  | 
| stateTaxIdNumber    | String      |  State tax ID number | 
| temporaryPasswordIndicator    | String      |  Temporary password indicator | 
| associateEmailAddress    | String      | Associate email address  | 
| associateUserName    | String      |  Associate userName | 
| businessPhoneNumber    | String - Integer      | Business phone number  |

### End Payment Method

#### API: Customer > End Payment Method

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/{{customerId}}/paymentMethods/{{billingPackageId}}/endDate/{{endDate}}

Description: This will end the specified Payment Method and remove it from the Billing Package.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |
| billingPackageId    | Yes     | Billing package identifier  | between 1 and 3 digits |
| endDate | Yes| End Date of the Payment Method (PM).  The PM will be ended on this date and the date should be the current date| YYYY-MM-DD |

### Customer Payment Method Detail

#### API: Customer > Customer Payment Method Detail

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/paymentMethods/{{paymentMethodId}}

Description: Updates a bill method for an account.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |
| paymentMethodId 	    | Yes     | Payment Method identifier		      |	 between 1 and 6 digits						|


###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| customerId    | String - Integer     |  Customer identifier | 
| updatedByUserId    | String      | Updated by user ID  | 
| createdByUserId    | String      | Created by user ID  | 
| createdTimeStamp    | String - Timestamp     |  Created timestamp | 
| updatedTimeStamp    | String - Timestamp     |  Last updated timestamp | 
| startDate    | String - Date     | Start date  | 
| typeDescription    | String      | Type description  | 
| accountTypeDescription    | String      | Account type description  | 
| endDate    | String - Date     |  End date | 
| paymentMethodId    | String - Integer     | Payment method identifier  | 
| bankId    | String - Integer     | Bank identifier  | 
| nextDraftDate    | String - Date     |  Next draft date | 
| nextDraftAmount    | String - Number     |  Next draft amount  | 
| accountNumber    | String - Number     |  Account number | 
| draftDay    | String      |  Draft day |

### Create Alert

#### API: Customer > Create Alert

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/alerts

Description: Create/Assign Alert

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |


###### Request Body

| Field         | Type - Format | Required       | Description                                                             | Validation |
|---------------|----------|--------------------------------------------------------------------------------|-| - |
| startDate    | String - Date| Yes     | Date the assignment starts.  Must be current date or later.   | YYYY-MM-DD |
| endDate  | String - Date | No | date the assignment ends.   | YYYY-MM-DD |
| priorityInd | String | No | Y if this Alert is a High Priority Alert.  Default value is N | Y or N |
| alertTitle | String | Yes | Short description of the Alert.   | Max 15 characters |
| alertText | String | No | Detailed message for this Alert assignment.  If empty, then the default Alert Text from the System Alert will be used. | Max 100 characters|

###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| customerId    | String - Integer     |  Customer identifier | 
| alertAssignmentId    | String      | Alert assignment identifier  | 
| text    | String      |   | Text
| tittle    | String      |  Tittle | 
| startDate    | String - Date     | Start date  | 
| endDate    | String - Date    |  End date | 
| priorityIndicator    | String      |  Priority indicator |

### Create Watch Queue

#### API: Customer > Create Watch Queue

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/watchqueues

Description: Creates watch queue for customer

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|

###### Request Body

| Field         | Type - Format | Required       | Description                                                             | Validation |
|---------------|----------|--------------------------------------------------------------------------------|-| - |
| requestedDate | String - Date| Yes | Requested action date for the Watch Queue.  Must be greater than or equal to current date.  | YYYY-MM-DD |
| priorityNumber | String - Integer| Yes | Defines the priority of the Watch Queue.  Values  with 1 being the highest priority | between 1 and 5 digits |
| queueDescription | String | Yes | This specifies the type of Watch Queue. Valid values comre from the Global Configuration userWatchQueueDescriptions | Max 100 characters|
| queueText | String | Yes | Free form text/note about the Watch Queue.   | Max 2000 characters |
| departmentName    | String | No     | The Watch Queue will be assigned to the specific Department.  | Valid list from configuration |
 |callerName | String | No | The name of the person that called in and trigger the creationg of this Watch Queue | Max 50 characters |
| callBackNum | String - Integer | No | The phone number to call if the customer needs to be called back | 10 digit number |
| assignedUsers | Array - String | No | The list of usernames of users assigned to this Watch Queue | An array of strings, validated for usernames in the backend |

###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| entityName    | String      | Entity name  | 
| requestedDate    | String - Date     |  Requested date | 
| queueDescription    | String      | Queue description  | 
| departmentName    | String      |  Department name | 
| priorityNumber    | String - Integer      |  Priority number  | 
| callBackNumber    | String - Integer      |  Call back number | 
| callerName    | String      | Caller name  | 
| queueText    | String      | Queue text  |

### List Watch Queues for a Customer

#### API: Customer > List Watch Queues for a Customer

#### > Method: <span class='method-get'>GET</span>
>{{baseURL}}/customers/{{customerId}}/watchqueues

Description: List any Watch Queue (WQ) that are assigned to the Customer. It supports pagination parameters.

###### Request Path Variables
| Field	| Required | Description | Validation
|-|-|-|-|
|customerId	|Yes|	Customer identifier|	between 1 and 8 digits|

###### Response Fields
| Field | Type - Format | Description |
|--------|------|-------------|
| departmentName  |  String    |  Department the WQ is currently assigned to.        |
| completedIndicator  |  String - Y or N    |  Y if the WQ has been Completed.  N if not      |
| priorityNumber  |   String - Integer   |   Priority of the WQ, where 1 is the highest priority and 5 is the lowest.       |
| queueDescription  |  String    |   Description of the WQ.  Defines the type of WQ.       |
| queueId  | String - Integer     |  Unique ID for this specific watch queue record in the database.        |
| entityIdCode  |  String    |   LDC / ESI ID Code if the Prospect Account, if this WQ is assigned to a Prospect Account       |
| createdTimeStamp  |  String - Timestamp |  Date/Time the WQ was created        |
| requestedDate  |  String - Date |  Date the WQ was requested to be worked        |
| completedTimeStamp  | String - Timestamp |   Date/Time the WQ was marked completed       |
| record	  |  String - Integer |   Unique field for this row in the results       |
|entityName	| String |Name of the Entity assigned this Watch Queue|
|entityTokens	| String |List of Ids/Tokens of the Entity assigned this Watch Queue|

### Edit Customer FAQ Details

#### API: Customer > Edit Customer FAQ Details

#### > Method: <span class='method-patch'>PATCH</span>
>{{baseURL}}/customers/{{customerId}}

Description: Updates customer details.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |


###### Request Body
| Field         | Type - Format | Required       | Description                                                             | Validation |
|---------------|----------|--------------------------------------------------------------------------------|-| - |
| emailAddress    | String | No          | A valid email address for the customer  | between 0 and 50 characters |
| languagePreferenceCode    | String | No| English \| Spanish - Set the language preference for the customer  | between 0 and 10 characters |
| servicePhoneNumber    | String  - Integer | No| Service phone number  | must be 10 digits or empty|
| businessPhoneNumber    | String  - Integer | No| Business phone number  | must be 10 digits or empty |


###### Response Fields

| Field         | Type - Format | Description                                                                    |             			
|---------------|----------|--------------------------------------------------------------------------------|
| customerId    | String - Integer     |  Customer identifier | 
| emailAddress    | String     |  Email address |
| languagePreferenceCode    | String |  Language preference for the customer  | 
| servicePhoneNumber    | String  - Integer | Service phone number  |
| businessPhoneNumber    | String  - Integer | Business phone number  |

### Add Service Contract

#### API: Customer > Add Service Contract

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/customers/{{customerId}}/serviceContracts

Description: Adds a service contract.

###### Request Path Variables

| Field         | Required | Description                                                                    | Validation            				|
|---------------|----------|--------------------------------------------------------------------------------|------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| customerAccountId | String  - Integer| Yes | Customer account identifier | between 1 and 1 digits |
| accountPackageId | String - Integer | Yes | Customer account identifier | between 1 and 4 digits |
| contractId | String  - Integer| No | Supplier provided ID for a Contract. This is not a token/id. It is more of a reference code. | maximum 50 characters |
| contractEffectiveDate | String - Date  | Yes | Date the Contract became effective or is scheduled to become effective. | YYYY-MM-DD  |
| contractExpirationDate | String - Date |No | Date the contract expired or is currently scheduled to expire. | YYYY-MM-DD  |
| billingUomDescription | String | No | Unit of Measure fot the charges/billing. Used for Gas to ensure that regardless of the UOM sent by the LDC, the correct UOM will be charged/billed for the account. For example, LDC sends CCF usage, but prices are in MCF | maximum 10 characters |
| fixedCommodityAmount | String - Number| No | Rate that usage should be charged during this contract. This will override any rate that the account's pricing plan tries to charge | currency 13 digits and max 8 in decimal part  |
| fixedChargeAmount | String - Number| No | Flat fee that should be charged to the account. This will override any customer charge type flat fee from the pricing plan | currency with maximum 5 digits in integer part  |
| utilityRateAmount | String - Number| No | Rate the LDC/Utility charges the account | maximum 7 digits in integer part and maximum 7 in decimal part |
| priceAdjustmentFactorNumber | String - Number| No | Also called heatRate. Used to store an agreed upon Heat Rate for Gas Accounts | maximum 5 digits in integer part and maximum 8 in decimal part |
| usageAdjustmentFactorNumber | String - Number| No | Also called fuelLossFactor.  Used to store an agreed upon Fuel Loss Factor for Gas Accounts | maximum 5 digits in integer part and maximum 8 in decimal part |
| waiveEtfIndicator | String - Boolean| No | Y if this account should not be charged and Early Termination Fee if this contract is terminated early. N if it can be charged. | Y - N |
| etfTypeDescription | String | No | Type of Early Termination Fee. Such as Flat/Percent/Residual. | maximum 15 characters |
| etfValueAmount | String - Number| No | UEstimated value of the contract. This will be used if the Early Termination Fee is calculated based on the residual value. | maximum 6 digits in integer part and maximum 6 in decimal part |
| residualValueAmount | String - Number| No | The value of the Contract, used when the Early Termination Fee type is Residual. | currency with maximum 10 digits in integer part |



###### Response Fields
| Field | Type - Format| Description |
|-|-|-|
|serviceContractId | String - Integer | Service contract identifier |

### Update Service Contract

#### API: Customer > Update Service Contract

#### > Method: <span class='method-put'>PUT</span>
>{{baseURL}}/customers/{{customerId}}/serviceContracts/{{serviceContractId}}

Description: Update a Service Contract.

###### Request Path Variables

| Field             	| Required	   | Description                          |       Validation            				|
|-----------------------|--------------|--------------------------------------|---------------------------------------------|
| customerId    | Yes     | Customer identifier  | between 1 and 8 digits |
| serviceContractId 	| Yes     | Service Contract identifier		  |	 between 1 and 4 digits						| 

###### Request Body

| Field | Type - Format | Required | Description | Validation            				|
|-|-|-|-| --------------------------------------|
| contractId | String - Integer| No | Supplier provided ID for a Contract. This is not a token/id. It is more of a reference code. | maximum 50 characters |
| contractEffectiveDate | String - Date  | Yes | Date the Contract became effective or is scheduled to become effective. | YYYY-MM-DD  |
| originalExpirationDate | String - Date | No | Date the contract was originally scheduled to expire. | YYYY-MM-DD  |
| contractExpirationDate | String - Date |No | Date the contract expired or is currently scheduled to expire. | YYYY-MM-DD  |
| billingUomDescription | String | No | Unit of Measure fot the charges/billing. Used for Gas to ensure that regardless of the UOM sent by the LDC, the correct UOM will be charged/billed for the account. For example, LDC sends CCF usage, but prices are in MCF | maximum 10 characters |
| fixedCommodityAmount | String - Number | No | Rate that usage should be charged during this contract. This will override any rate that the account's pricing plan tries to charge | maximum 5 digits in integer part and maximum 8 in decimal part  |
| fixedChargeAmount | String - Number| No | Flat fee that should be charged to the account. This will override any customer charge type flat fee from the pricing plan | currency with maximum 5 digits in integer part  |
| contractTypeDescription | String | No | Type of service contract, such as New or Renewal or Winback. | maximum 15 characters |
| utilityRateAmount | String - Number| No | Rate the LDC/Utility charges the account | maximum 7 digits in integer part and maximum 7 in decimal part |
| defaultPricingPlanDescription | String | No | Rollover plan. Once the contract expires, if there is not a renewal, this is the plan that the account will be rolled to. | maximum 50 characters |
| priceAdjustmentFactorNumber | String - Number| No | Also called heatRate. Used to store an agreed upon Heat Rate for Gas Accounts | maximum 5 digits in integer part and maximum 8 in decimal part |
| usageAdjustmentFactorNumber | String - Number| No | Also called fuelLossFactor.  Used to store an agreed upon Fuel Loss Factor for Gas Accounts | maximum 5 digits in integer part and maximum 8 in decimal part |
| expirationProcessedIndicator | String - Boolean| No | Y if the Contract has already been processed and finalized by the expiration job. N if it has not yet been finalized. | Y - N |
| rateChangeSentIndicator | String - Boolean| No | Y if a rate change has been sent to the market for this Contract. N if one has not been sent | Y - N |
| renewalNoticeSentIndicator | String - Boolean| No | Y if a renewal notice has already been sent for this contract. N if it has not. | Y - N |
| excludeDerationIndicator | String - Boolean| No | Y if the line loss calculation for this account should exclucde Deration. N if it should include Deration. | Y - N |
| waiveEtfIndicator | String - Boolean| No | Y if this account should not be charged and Early Termination Fee if this contract is terminated early. N if it can be charged. | Y - N |
| etfTypeDescription | String | No | Type of Early Termination Fee. Such as Flat/Percent/Residual. | maximum 15 characters |
| etfValueAmount | String - Number| No | UEstimated value of the contract. This will be used if the Early Termination Fee is calculated based on the residual value. | maximum 6 digits in integer part and maximum 6 in decimal part |
| residualValueAmount | String - Number| No | The value of the Contract, used when the Early Termination Fee type is Residual. | currency with maximum 10 digits in integer part |
| pricingTypeDescription | String | No | Used for ad-hoc pricing, giving the supplier a name that can be used to identify the type of rate the account is on. | maximum 50 characters |
| pricingReferenceCodesText | String | No | Used for Ad-hoc pricing, this is a comma separated list of Reference Codes, defining the pricing components that should be charged to this account. | maximum 100 characters |