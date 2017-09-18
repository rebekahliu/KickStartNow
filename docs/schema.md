## Schema

**Users**

| column name | data type | details |
|----------|----------|------------|
| id | integer | not null, primary key |
| username |  string   | not null, indexed, unique |
| email | string | not null, indexed, unique |
| password_digest | string | not null |
| session_token | string | not null, indexed, unique |

**Projects**

| column name | data type | details |
|----------|----------|------------|
| id | integer | not null, primary key |
| name | string | not null, indexed |
| description | string | not null |
| user_id | integer | not null, indexed |

**Rewards**

| column name | data type | details |
|----------|----------|------------|
| id | integer | not null, primary key |
| project_id | integer | not null |
| reward | string | not null |
| amount | integer | not null |

**Backings**

| column name | data type | details |
|----------|----------|------------|
| user_id | integer | not null, indexed |
| project_id  | integer | not null, indexed |
| amount | integer | not null |
