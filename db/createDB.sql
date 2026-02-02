CREATE TABLE `USER_CHATROOM` (
	`user_num`	INT	NOT NULL	COMMENT '유저를 구분하는 키',
	`chatroom_num`	INT	NOT NULL
);

CREATE TABLE `USER` (
	`user_num`	INT	NOT NULL	COMMENT '유저를 구분하는 키',
	`user_id`	VARCHAR(20)	NOT NULL,
	`user_pw`	VARCHAR(20)	NOT NULL,
	`user_birth`	DATE	NULL,
	`user_phone_INT`	INT(11)	NULL
);

CREATE TABLE `MESSAGE` (
	`message_id`	INT	NOT NULL,
	`message_text`	TEXT	NOT NULL,
	`chatroom_num`	INT	NOT NULL,
	`user_num`	INT	NOT NULL	COMMENT '보낸이',
	`send_time`	DATETIME	NOT NULL
);

CREATE TABLE `CHATROOM` (
	`chatroom_num`	INT	NOT NULL,
	`chatroom_name`	VARCHAR(20)	NOT NULL
);

ALTER TABLE `USER` ADD CONSTRAINT `PK_USER` PRIMARY KEY (
	`user_num`
);

ALTER TABLE `MESSAGE` ADD CONSTRAINT `PK_MESSAGE` PRIMARY KEY (
	`message_id`
);

ALTER TABLE `CHATROOM` ADD CONSTRAINT `PK_CHATROOM` PRIMARY KEY (
	`chatroom_num`
);

