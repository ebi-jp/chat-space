

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|name|string|null: false, index: true|
|e-mail|text|null: false|

### association
- has_many :messages
- has_many :comments
- has_many :groups, through: :groups_users
- has_many :groups_users




## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|

### association
- has_many :users, through: :groups_users
- has_many :groups_users
- has_many :messages




## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|title|text|null: false|
|user_id|integer|null: false, foreign_hey: true|
|image|blob|null: false|

### association
 - belongs_to :user
 - has_many :comments
 - belongs_to :group
 

