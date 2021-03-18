

## Collection: Usage

 Usage contains endpoints for usage.

### Cancel Usage

#### API: Usage > Cancel Usage

#### > Method: <span class='method-post'>POST</span>
>{{baseURL}}/usages/{{usageId}}/cancel

Description: Cancel a usage record so that is can not be processed by the system

###### Request Parameters

| Field         | Required | Description                                                                    | Validation |
|---------------|----------|--------------------------------------------------------------------------------|-|
| usageId           | Yes     | usage Id  | between 1 and at most 999,999,999 |