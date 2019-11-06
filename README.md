# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user



## usersテーブル
|Column|Type|Options|
|------|----|-------|
|password|string|null: false|
|username|string|null: false|
|e-mail|text|null: false|
|comment|integer|null: false|

### association
- has_many :tweets
- has_many :comments
- has_many :groups, through: :groups_users




## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|groupname|string|null: false|

### association
- has_many :users, through: :groups_users





## tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|title|text|null: false|
|user_id|integer|null: false, foreign_hey: true|


### association
 - belongs_to :user
 - has_many :images
 - has_many :comments





 ## imagesテーブル
 |Column|Type|Options|
 |------|----|-------|
 |image|blob|null: false|
 |tweet_id|string|null: false,foreign_key: true|

 ### association
 - belongs_to :tweet
 



 ## commentsテーブル
 |Column|Type|Options|
 |------|----|-------|
 |text|text|null: false|

 ### association
 - belongs_to :user
 - belongs_to :tweet
