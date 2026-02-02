
# 채팅방 조회 기능 inner join으로 통한 usernum을 통한 채팅방 조회 및 이름 조회
SELECT 
    USER_CHATROOM.user_num, CHATROOM.chatroom_name 
FROM 
    `USER_CHATROOM` INNER JOIN `CHATROOM` 
ON 
    USER_CHATROOM.CHATROOM_NUM = CHATROOM.CHATROOM_NUM 
WHERE `user_num`=?
LIMIT 100